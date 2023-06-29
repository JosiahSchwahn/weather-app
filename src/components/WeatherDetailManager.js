import React from "react";
import feelsLogo from "../assets/svgs/FEELSLIKE.svg";
import cloudLogo from "../assets/svgs/CLOUD.svg";
import rainLogo from "../assets/svgs/RAIN.svg";
import windLogo from "../assets/svgs/WIND.svg";
import WeatherDetails from "./WeatherDetail";


const WeatherDetailManager = ({weatherData}) => {

    console.log(weatherData.historical.date);
    

    return(

        <div className="wdm_wrapper">
            <WeatherDetails title = "Feels Like" data ={weatherData.current.feelslike} icon = {feelsLogo}  ></WeatherDetails>
            <WeatherDetails title = "Humidity" data ={weatherData.current.humidity} icon = {cloudLogo}></WeatherDetails>
            <WeatherDetails title = "UV Index" data ={weatherData.current.uv_index} icon = {rainLogo}>UV INDEX</WeatherDetails>
            <WeatherDetails title = "Wind Speed" data ={weatherData.historical["2023-06-28"].astro[0]} icon = {windLogo}></WeatherDetails>
        
        </div>
    )
  
}

export default WeatherDetailManager;