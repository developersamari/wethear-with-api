import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
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
        <Stack spacing={2} direction="row">
          <input
          
            type="text"
            className="py-3 px-6 w-[200px]"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            
          />
          <Button variant="text" className="rounded-full btn btn-outline btn-secondary" onClick={search}>🔍</Button>
          </Stack>
        </div>

        {typeof weather.main != "undefined" ? (
          <div className="flex flex-col gap-2 w-60 text-center ml-14 p-4 bg-cyan-50 shadow-white shadow-xl rounded-full mt-9 ">
            <div>
              <div >
                {weather.name}, {weather.sys.country}
              </div>
              <div className="">{today}</div>
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
