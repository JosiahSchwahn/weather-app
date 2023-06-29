import React, {useEffect, useState} from "react";
import WeatherDetailManager from "./WeatherDetailManager";

export default function Weather(){

    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const API_KEY = `0e24dc66bceaaad7ff88da794fad4a9d`;
    const QUERY_LOCATION = `Bozeman`;
    const forecastDate = `2023-06-28`;
    // Set this parameter to 1 (on) or 0 (off) depending on whether or not you want 
    // the API to return weather data split hourly. (Default: 0 - off)
    const hourly = `1`;
    const units = `f`;

    
    const fetchWeatherData = async () => {
        try {   
            //a singular string literal wasn't working
            const response = await fetch(`http://api.weatherstack.com/historical` +
            `?access_key=${API_KEY}` +
            `&query=${QUERY_LOCATION}` +
            `&historical_date=${forecastDate}` +
            `&hourly=${hourly}` +
            `&units=${units}`);
            const weatherJSON = await response.json();       
            console.log(weatherJSON);
            
            setWeatherData(weatherJSON);
            setIsLoading(false);
        } catch (error) {
            console.log(`There was an error: ${error.message}`);
            setIsLoading(false);
            return null;
            }
        }

      useEffect(() => {
        fetchWeatherData()
      }, []);
        
    
    return(
        <div className="weather-wrapper">

            {isLoading ? (<div>Application is Loading</div>) : 
            //when API returns, change from loading state to displaying weather data
            (<WeatherDetailManager weatherData = {weatherData}></WeatherDetailManager>)}

        </div>
    )

}