import React from "react";


const HourlyForcast = ({weatherData, currentDate}) => {

    const hourlyArray = weatherData.historical[currentDate].hourly;
    const localTimeHour = (weatherData.location.localtime).slice(11,13);
    console.log([hourlyArray, localTimeHour]);

    //finds the first hour to display inside the hourlyArray depending on local time
    console.log(hourlyArray[1].time);

    const hourlyArrayJSX = hourlyArray.map((hourObject) => {
        return(
            <div key={hourObject.id}>
                <div className="hf_time">{hourObject.time}</div>
                <div className="hf_temperature">{hourObject.temperature}</div>
                <div className="hf_icon">{hourObject.weather_descriptions}</div>
            </div>

        )

    })

    return(

        <div className="hf_wrapper">

            <>{hourlyArrayJSX}</>

        </div>

    )


}


export default HourlyForcast;