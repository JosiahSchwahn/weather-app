import React from "react";
import '../styles/liveweather.css'

const LiveWeather = ({description, location, time, temperature, display_unit}) => {

    const buttonText = (display_unit === 'c') ? 'F' : 'C';

    const dateDisplay = () => {
        const date = new Date();
        const dayNames = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
        const dateObjectKey = {
            '0': 'Jan.', '1': 'Feb.', '2': 'Mar.', '3': 'Apr.', '4': 'May', '5': 'Jun.',
            '6': 'Jul.', '7': 'Aug.', '8': 'Sep.', '9': 'Oct.', '10': 'Nov.', '11': 'Dec.',
          };

        const dayOfWeek = dayNames[date.getDay()]
        const day = date.getDate() + `th`;
        const month = dateObjectKey[date.getMonth()];
        const year = `'` +date.getFullYear().toString().slice(2,4);

        const formattedString = [[dayOfWeek, day].join(", "), month, year].join(" ");
        return formattedString;
    }

    function standardTime(militaryTime) {
        const hours = parseInt(militaryTime.slice(0, 2));
        const minutes = militaryTime.slice(3, 5);
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        const standardHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
        return `${standardHours}:${minutes} ${meridiem}`;
    }

    return(

        <div className="lw_wrapper">

            <div className="lw_description">{description}</div>
            <div className="lw_location">{location}</div>
            <div className="lw_date">{dateDisplay()}</div>
            <div className="lw_time">{standardTime(time.slice(11))}</div>
            <div className="lw_temperature">{temperature}°{display_unit.toUpperCase()}</div>
            <div className="lw_display_button ">display: °{buttonText.toUpperCase()}</div>

        </div>

    )


}

export default LiveWeather;