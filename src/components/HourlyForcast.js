import React,{useState} from "react";
import '../styles/hourlyforcast.css'

//icons for hourly data
import rainShower from '../assets/svgs/hourlySVGs/LIGHT RAIN SHOWER.svg'
import mist from '../assets/svgs/hourlySVGs/MIST.svg';
import overcast from '../assets/svgs/hourlySVGs/OVERCAST.svg'
import partlyCloudly from '../assets/svgs/hourlySVGs/PARTLY CLOUDY.svg'
import patchRainPossible from '../assets/svgs/hourlySVGs/PATCHY RAIN POSSIBLE.svg'
import sunny from '../assets/svgs/hourlySVGs/SUNNY.svg'
import thunderyOutbreaksPossible from '../assets/svgs/hourlySVGs/THUNDERY OUTBREAKS POSSIBLE.svg'
import fog from '../assets/svgs/hourlySVGs/FOG.svg';
import lightRain from '../assets/svgs/hourlySVGs/LIGHT RAIN.svg';

//icons for custom button
import rightArrow from '../assets/svgs/buttonSVGs/feArrowDown2-1.svg';
import leftArrow from '../assets/svgs/buttonSVGs/feArrowDown2.svg';
import dot from '../assets/svgs/buttonSVGs/Vector-1.svg'
import dotFilled from '../assets/svgs/buttonSVGs/Vector.svg'



const HourlyForcast = ({weatherData, currentDate}) => {

    const [hourCarousel, sethourCarousel] = React.useState(0);

    // mist, fog , Light drizzle, Moderate rain, Heavy rain,

    const weatherDescriptionMap = {
        'Partly cloudy': partlyCloudly, 'Light rain shower': rainShower, 'Clear': sunny, 'Sunny': sunny,
        'Mist': mist, 'Cloudy': overcast, 'Overcast': overcast, 'Patchy rain possible': patchRainPossible,
        'Thundery outbreaks possible': thunderyOutbreaksPossible, 'Moderate or heavy rain shower':rainShower,
        'Moderate rain at times': lightRain, 'Moderate rain': rainShower, 'Heavy rain': rainShower, 'Light drizzle': lightRain,
        'Fog': fog, 'Light rain': lightRain
    };

    const arraySections = (array, startingIndex) => {
        const [arrayOne, arrayTwo, arrayThree] = [[],[],[]];
        for(let i = 0; i < array.length; i++){
            if(startingIndex > 23){
                startingIndex = 0;
            }
            //an array is filled at 8, the next array section will start to be filled
            arrayOne.length === 8 ? arrayTwo.length === 8 ? arrayThree.push(array[startingIndex]):
                                    arrayTwo.push(array[startingIndex]):
                                                              arrayOne.push(array[startingIndex]);
            startingIndex++;
        }
        return[arrayOne , arrayTwo, arrayThree];
    }

    //finds the first hour to display inside the hourlyArray depending on local time
    const hourlyArray = weatherData.historical[currentDate].hourly;
    const localTimeHour = parseInt((weatherData.location.localtime).slice(11,13));
    let liveArray = arraySections(hourlyArray, localTimeHour)[hourCarousel];


    //display conversation from milatary time to standard time
    const standardTime = (militaryTime) =>{
        if (militaryTime === '0') {
            return `12:00 AM`;
        }
        let hours = parseInt(militaryTime.slice(0, militaryTime.length === 4 ? 2 : 1));
        let minutes = militaryTime.slice(militaryTime.length === 4 ? 2 : 1, 4);
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        const standardHours = hours > 12 ? hours - 12 : (hours === 0 ? 12 : hours);
        return `${standardHours}:${minutes} ${meridiem}`;
    }
    //<div className="hf_icon">{hourObject.weather_descriptions}</div>
    const leftHourlyPage = (hourCarousel) => hourCarousel === 0 ? sethourCarousel(2) : sethourCarousel(hourCarousel - 1);
    const rightHourlyPage = (hourCarousel) => hourCarousel === 2 ? sethourCarousel(0) : sethourCarousel(hourCarousel + 1);

    const buttonFillTracker = (hourCarousel) =>{
        const dotArray = [dot, dot, dot];
        dotArray.splice(hourCarousel, 1, dotFilled)
        return (
            <div className="button-dot-wrapper">
                    <img src={dotArray[0]} alt="dot_svg"></img>
                    <img src={dotArray[1]} alt="dot_svg"></img>
                    <img src={dotArray[2]} alt="dot_svg"></img>
            </div>
        )
    }

    const hourlyArrayJSX = liveArray.map((hourObject, index) => {
        return (

          <div className="ha-wrapper" key={index}>
            <div className="hf_time">{standardTime(hourObject.time)}</div>
            <div className="hf_temperature">{hourObject.temperature + ` °${weatherData.request.unit.toUpperCase()}`}</div>

            <img src={weatherDescriptionMap[hourObject.weather_descriptions]} alt={`${hourObject.weather_descriptions}`} />
          </div>
        );
      });

    return(
        <div className="hf-component-wrapper">

            <div className="button-wrapper">
                <button className="previous-button" onClick={() => leftHourlyPage(hourCarousel)}>
                    <img src={rightArrow} alt="right_button_arrow"></img>
                </button>

                {buttonFillTracker(hourCarousel)}

                <button className="next-button" onClick={() => rightHourlyPage(hourCarousel)}>
                    <img src={leftArrow} alt="right_button_arrow" ></img>
                </button>
            </div>

            <div className="live_array">{hourlyArrayJSX}</div>
        </div>


    )
}

export default HourlyForcast;