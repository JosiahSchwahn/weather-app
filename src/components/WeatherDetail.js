import React from "react";


const WeatherDetails = ({title, data, icon}) => {

    return(
        <div className="weather_specfic_wrapper">

            <div className="ws_icon">
            <img alt="cloud_icon"></img>  
            </div>

            <div className="ws_info">
                <div className="ws_title">{title}</div>
                <div className="ws_value"></div>
            </div>

        </div>
    )

}

export default WeatherDetails;
