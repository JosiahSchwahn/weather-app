import React from "react";
import '../styles/liveweather.css'

const LiveWeather = ({description, location, time, temperature, display_unit}) => {

    const buttonText = (display_unit === 'c') ? 'F' : 'C';

    const dateDisplay = () => {  
        const date = new Date();

        const dayNames = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
        const dateObjectKey = {
            '1': 'Jan.', '2': 'Feb.', '3': 'Mar.', '4': 'Apr.', '5': 'May', '6': 'Jun.',
            '7': 'Jul.', '8': 'Aug.', '9': 'Sep.', '10': 'Oct.', '11': 'Nov.', '12': 'Dec.',
          };

        const dayOfWeek = dayNames[date.getDay()]
        const day = date.getDate() + `th`;
        const month = dateObjectKey[date.getMonth()];
        const year = `'` +date.getFullYear().toString().slice(2,4);

        const formattedString = [[dayOfWeek, day].join(", "), month, year].join(" ");
        return formattedString;

    }



    return(

        <div className="lw_wrapper">

            <div className="lw_description">{description}</div>
            <div className="lw_location">{location}</div>
            <div className="lw_date">{dateDisplay()}</div>
            <div className="lw_time">{time.slice(11)}</div>
            <div className="lw_temperature">{temperature}°{display_unit.toUpperCase()}</div>
            <div className="lw_display_button ">display: °{buttonText.toUpperCase()}</div>

        </div>

    )


}

export default LiveWeather;