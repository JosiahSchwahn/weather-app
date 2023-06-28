import React, {useEffect, useState} from "react";
import WeatherSpecifics from "./WeatherSpecifics.js";

export default function Weather(){

    const [weatherData, setWeatherData] = useState(null);

    
    const fetchWeatherData = async () => {
        try {
          const response = await fetch('https://api.weatherstack.com/current?access_key=0e24dc66bceaaad7ff88da794fad4a9d&query=Bozeman');
          const weatherData = await response.json();
          setWeatherData(weatherData);
          //console.log(weatherData);
          //console.log(weatherData.location.name);
          return weatherData;
        } catch (error) {
          console.log(`There was an error: ${error}`);
          return null;
        }
      }

      useEffect(() => {
        fetchWeatherData()
      }, []);


    
      

    return(
        <div className="weather-wrapper">
            <WeatherSpecifics weatherData={weatherData}></WeatherSpecifics>
        </div> 
    );
}