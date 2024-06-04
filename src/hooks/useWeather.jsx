import { useEffect, useState } from "react";

const useWeather = (city) => {
  const [weather, setWeather] = useState();

  //   Handle API
  const API = `0a62a9486983423f9fa04512242905`;
  const URL = `http://api.weatherapi.com/v1/current.json?key=${API}&q=${city}&aqi=no`;

  //   Get Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.log("Error Fetching DATA");
      }
    };

    fetchData();
  }, [URL]);

  return weather;
};

export default useWeather;
