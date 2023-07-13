import React from "react";

import '../styles/weatherdetailmanager.css'

import feelsLogo from "../assets/svgs/detailSVGs/FEELSLIKE.svg";
import cloudLogo from "../assets/svgs/detailSVGs/CLOUD.svg";
import rainLogo from "../assets/svgs/detailSVGs/RAIN.svg";
import windLogo from "../assets/svgs/detailSVGs/WIND.svg";

import gitHub from '../assets/svgs/buttonSVGs/github.svg'


import WeatherDetails from "./WeatherDetail";
import LiveWeather from "./LiveWeather";


const WeatherDetailManager = ({weatherData}) => {

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

            <div className="github">
                    <div className="github_text">Weather App</div>
                    <div className="github_rights_logo">
                        <em> All rights reserved @Josiah Schwahn 2023 </em>
                        <a href="https://github.com/JosiahSchwahn/weather-app" target="_blank" rel="noopener noreferrer"><img className='github-logo' src={gitHub} alt="github icon"></img></a>
                    </div>
            </div>


            <div className="weather_details">
                <WeatherDetails title = "Feels Like" data ={weatherData.current.feelslike} icon = {feelsLogo} units = {' °F'}></WeatherDetails>
                <WeatherDetails title = "Humidity" data ={weatherData.current.humidity} icon = {cloudLogo} units = {' %'}></WeatherDetails>
                <WeatherDetails title = "UV Index" data ={weatherData.current.uv_index} icon = {rainLogo} units = {' UV'}></WeatherDetails>
                <WeatherDetails title = "Wind Speed" data={weatherData.current.wind_speed} icon = {windLogo} units = {' mph'}></WeatherDetails>

            </div>

        </div>
    )

}

export default WeatherDetailManager;