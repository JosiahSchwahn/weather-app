import React from "react";

const WeatherSpecifics = (props) => {

    console.log(props);
    

    return(
        <div className="weather_specfic_wrapper">
            <div className="ws_icon">{props.current.name}</div>
            <div className="ws_info">
                <div className="ws_title"></div>
              
                <div className="ws_value"></div>
            </div>
        </div>

    )

}

export default WeatherSpecifics;