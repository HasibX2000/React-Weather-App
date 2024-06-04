import React, { useState } from "react";
import useWeather from "../hooks/useWeather";
import SearchIcon from "../assets/search.svg";

const Card = () => {
  const [city, setCity] = useState("Dhaka");
  const [inputvalue, setInputValue] = useState("");

  const weatherData = useWeather(city);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputvalue);
    setInputValue("");
  };
  return (
    <div className="flex flex-col justify-center gap-5 rounded-xl bg-slate-800 p-10 text-white opacity-80 backdrop-blur-sm md:w-1/2 xl:w-1/3">
      <div className="flex items-center gap-5">
        <input
          type="text"
          name="city"
          id="city"
          autoComplete="off"
          placeholder="Enter city name"
          className="w-full rounded-lg p-2 text-slate-900 focus:outline-none"
          value={inputvalue}
          onChange={handleInputChange}
        />
        <div
          className="w-11 cursor-pointer rounded-lg bg-white"
          onClick={handleSubmit}
        >
          <img src={SearchIcon} alt="SearchIcon" className="w-fit p-2" />
        </div>
      </div>

      {weatherData ? (
        <div className="flex flex-col justify-center gap-5">
          <div className="text-center">
            <h2>{weatherData.location.name}</h2>
            <p>Country: {weatherData.location.country}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={weatherData.current.condition.icon} alt="" />
            <h2>
              {weatherData.current.dewpoint_c} <span>&deg;C</span>
            </h2>
            <h3>{weatherData.current.condition.text}</h3>
            <p>
              Feelslike: {weatherData.current.feelslike_c} <span>&deg;C</span>
            </p>
          </div>
          <div className="text-center">
            <p>
              Humidity: {weatherData.current.humidity} <span>%</span>
            </p>
            <p>Windspeed: {weatherData.current.wind_kph} km/h</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
