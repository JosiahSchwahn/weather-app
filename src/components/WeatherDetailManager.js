import React from "react";

import '../styles/weatherdetailmanager.css'

import feelsLogo from "../assets/svgs/FEELSLIKE.svg";
import cloudLogo from "../assets/svgs/CLOUD.svg";
import rainLogo from "../assets/svgs/RAIN.svg";
import windLogo from "../assets/svgs/WIND.svg";


import WeatherDetails from "./WeatherDetail";
import LiveWeather from "./LiveWeather";


const WeatherDetailManager = ({weatherData}) => {

    console.log(weatherData);
    

    return(

        <div className="wdm_wrapper">

            <div className="live_weather">

                <LiveWeather weatherDescription = {weatherData.current.weather_descriptions}></LiveWeather>

            </div>

            <div className="weather_details">
                <WeatherDetails title = "Feels Like" data ={weatherData.current.feelslike} icon = {feelsLogo}></WeatherDetails>
                <WeatherDetails title = "Humidity" data ={weatherData.current.humidity} icon = {cloudLogo}></WeatherDetails>
                <WeatherDetails title = "UV Index" data ={weatherData.current.uv_index} icon = {rainLogo}>UV INDEX</WeatherDetails>
                <WeatherDetails title = "Wind Speed" data={weatherData.current.wind_speed} icon = {windLogo}></WeatherDetails>

            </div>
           
        </div>
    )
  
}

export default WeatherDetailManager;