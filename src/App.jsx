import React, { useState } from "react";

import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const [weather, setWeather] = useState({});

  const api = {
    key: "ca29748bdf7b72723fc195758b134cd7",

    base: "https://api.openweathermap.org/data/2.5/",
  };

  const search = () => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())

      .then((result) => {
        setWeather(result);

        setQuery("");

        console.log(result);
      });
  };
  let today = new Date().toDateString();

  return (
    <>
      <div className="flex flex-col gap-4 " >
      
        <div className="flex flex-row bg-slate-50 w-9/12 p-16 rounded-2xl shadow-lg shadow-black mr-16 ">
          
          <input
          
            type="text"
            className="search-bar rounded-full "
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            
          />
          <button className="rounded-full btn btn-outline btn-secondary" onClick={search}>جستجو</button>
        </div>

        {typeof weather.main != "undefined" ? (
          <div className="flex flex-col gap-2 w-60 text-center ml-14 p-4 bg-cyan-50 shadow-white shadow-xl rounded-full mt-9 ">
            <div>
              <div >
                {weather.name}, {weather.sys.country}
              </div>
              <div>{today}</div>
            </div>
          <div>
          <div >{Math.round(weather.main.temp)}°c</div>
          <div>{weather.weather[0].main}</div>
          </div>
        
            
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default App;
