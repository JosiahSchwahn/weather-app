import React, {useEffect, useState} from "react";
import WeatherDetailManager from "./WeatherDetailManager";
import ErrorModal from './ErrorModal';

import '../styles/weather.css'
import HourlyForcast from "./HourlyForcast";

export default function Weather(){

    const [weatherData, setWeatherData] = React.useState({});
    const [modalOpen, setModalOpen ] = React.useState(false);
    const [search, setSearch] = React.useState('Bozeman');
    const [isLoading, setIsLoading] = React.useState(true);

    const API_KEY = `0e24dc66bceaaad7ff88da794fad4a9d`;
    // Set this parameter to 1 (on) or 0 (off) depending on whether or not you want
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
        month = (month.toString()).length === 1 ? `0${month}` : month;
        day = (day.toString()).length === 1 ? `0${day}` : day;

        return [year,month,day].join("-").toString();
    }

    const fetchWeatherData = async (city) => {
        try {
            //a singular string literal wasn't working
            const response = await fetch(`http://api.weatherstack.com/historical` +
            `?access_key=${API_KEY}` +
            `&query=${city}` +
            `&historical_date=${currentDate()}` +
            `&hourly=${hourly}` +
            `&interval=${interval}` +
            `&units=${units}`);
            const weatherJSON = await response.json();

            if(weatherJSON.error){
                setModalOpen(true);
                setIsLoading(false);
                return;

            } else{
                console.log(weatherJSON);
                setWeatherData(weatherJSON);
                setIsLoading(false);
            }

        } catch (error) {
            console.log(`There was an error: ${error.message}`);
            setIsLoading(false);
            return null;
            }
        }

      useEffect(() => {
        fetchWeatherData(search)
      }, []);

    //not arrow function for funzies
    const searchNewCity = (event) => {
        event.preventDefault();
        setIsLoading(true);
        const newCity = event.target.city.value;
        fetchWeatherData(newCity);
      };

    return(
        <div className="weather-wrapper">

            {isLoading ? (<div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>) :
            //when API returns, change from loading state to displaying weather data
            (<>
                <ErrorModal modalOpen = {modalOpen} setModalOpen = {setModalOpen}></ErrorModal>
                <WeatherDetailManager weatherData = {weatherData}></WeatherDetailManager>
                <form onSubmit={searchNewCity}>
                    <input type="text" name="city" placeholder="search location..."></input>
                    <button type="submit" className="form-submit-button">Submit</button>
                </form>
                <HourlyForcast weatherData = {weatherData} currentDate = {currentDate()}></HourlyForcast>
            </>
            )}
        </div>
    )

}