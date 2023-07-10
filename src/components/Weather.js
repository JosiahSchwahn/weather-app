import React, {useEffect, useState} from "react";
import WeatherDetailManager from "./WeatherDetailManager";

import '../styles/weather.css'
import HourlyForcast from "./HourlyForcast";

export default function Weather(){

    const [weatherData, setWeatherData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    const API_KEY = `0e24dc66bceaaad7ff88da794fad4a9d`;
    const QUERY_LOCATION = `bozeman`;
   // const forecastDate = `2023-06-06`;
    // Set this parameter to 1 (on) or 0 (off) depending on whether or not you want
    // the API to return weather data split hourly. (Default: 0 - off)
    const hourly = `1`;
    const interval = `1`;
    const units = `f`;

    const currentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        //adds 1 since Jan is 0
        let month = currentDate.getMonth() + 1;
        let day = currentDate.getDate();
        //formats date for API query
        if((month.toString()).length === 1){
            month = `0` + month;
        }
        if((day.toString()).length  === 1){
            day = `0` + day;
        }
        return [year,month,day].join("-").toString();
    }

    const fetchWeatherData = async () => {
        try {
            //a singular string literal wasn't working
            const response = await fetch(`http://api.weatherstack.com/historical` +
            `?access_key=${API_KEY}` +
            `&query=${QUERY_LOCATION}` +
            `&historical_date=${currentDate()}` +
            `&hourly=${hourly}` +
            `&interval=${interval}` +
            `&units=${units}`);

            const weatherJSON = await response.json();
            setWeatherData(weatherJSON);
            setIsLoading(false);
            return weatherData;
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
            (<>
                <WeatherDetailManager weatherData = {weatherData}></WeatherDetailManager>
                <HourlyForcast weatherData = {weatherData} currentDate = {currentDate()}></HourlyForcast>
            </>
            )}
        </div>
    )

}