import React from "react";

import '../styles/weatherdetailmanager.css'

import feelsLogo from "../assets/svgs/detailSVGs/FEELSLIKE.svg";
import cloudLogo from "../assets/svgs/detailSVGs/CLOUD.svg";
import rainLogo from "../assets/svgs/detailSVGs/RAIN.svg";
import windLogo from "../assets/svgs/detailSVGs/WIND.svg";


import WeatherDetails from "./WeatherDetail";
import LiveWeather from "./LiveWeather";


const WeatherDetailManager = ({weatherData}) => {

   console.log(weatherData);
    return(

        <div className="wdm_wrapper">

            <div className="live_weather">

                <LiveWeather
                description = {weatherData.current.weather_descriptions}
                location = {weatherData.location.name}
                time = {weatherData.location.localtime}
                temperature = {weatherData.current.temperature}
                display_unit = {weatherData.request.unit}
                ></LiveWeather>

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