import React from "react";
import '../styles/weatherdetail.css'

const WeatherDetails = ({title, data, icon}) => {


    return(
        <div className="weather_specfic_wrapper">

            <div className="ws_icon">
            <img src={icon} alt="cloud_icon"></img>  
            </div>

            <div className="ws_info">

                <div className="ws_title">
                    <b>{title}</b>
                </div>

                <div className="ws_value">
                    {data}
                </div>

            </div>

        </div>
    )

}

export default WeatherDetails;
