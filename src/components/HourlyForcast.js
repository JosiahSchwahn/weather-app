import React,{useState} from "react";
import '../styles/hourlyforcast.css'

import lightRainShower from '../assets/svgs/hourlySVGs/LIGHT RAIN SHOWER.svg'
import mist from '../assets/svgs/hourlySVGs/MIST.svg'
import overcast from '../assets/svgs/hourlySVGs/OVERCAST.svg'
import partlyCloudly from '../assets/svgs/hourlySVGs/PARTLY CLOUDY.svg'
import patchRainPossible from '../assets/svgs/hourlySVGs/PATCHY RAIN POSSIBLE.svg'
import sunny from '../assets/svgs/hourlySVGs/SUNNY.svg'
import thunderyOutbreaksPossible from '../assets/svgs/hourlySVGs/THUNDERY OUTBREAKS POSSIBLE.svg'



const HourlyForcast = ({weatherData, currentDate}) => {

    const [hourCarousel, sethourCarousel] = React.useState(0);

    const weatherDescriptionMap = {
        'Partly cloudy': partlyCloudly, 'Light rain shower': lightRainShower, 'Clear': sunny, 'Sunny': sunny,
        'Mist': mist, 'cloudy': overcast, 'Overcast': overcast, 'Patchy rain possible': patchRainPossible,
        'Thundery outbreaks possible': thunderyOutbreaksPossible
    };

    //finds the first hour to display inside the hourlyArray depending on local time
    const hourlyArray = weatherData.historical[currentDate].hourly;
    const localTimeHour = parseInt((weatherData.location.localtime).slice(11,13));
   // console.log([hourlyArray, localTimeHour]);
                                                                                          //19

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

    let liveArray = arraySections(hourlyArray, localTimeHour)[hourCarousel];


    const standardTime = (militaryTime) =>{
        const hours = parseInt(militaryTime.slice(0, 2));
        const minutes = militaryTime.slice(2, 4);
        const meridiem = hours >= 12 ? 'PM' : 'AM';
        const standardHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
        return `${standardHours}:${minutes} ${meridiem}`;
    }

    const hourlyArrayJSX = liveArray.map((hourObject, index) => {
        return (
          <div className="ha-wrapper" key={index}>
            <div className="hf_time">{standardTime(hourObject.time)}</div>
            <div className="hf_temperature">{hourObject.temperature}</div>
            <div className="hf_icon">{hourObject.weather_descriptions}</div>
            <img src={weatherDescriptionMap[hourObject.weather_descriptions]} alt={`${hourObject.weather_descriptions}`} />


          </div>
        );
      });

    return(

        <div className="live_array">{hourlyArrayJSX}</div>

    )
}

export default HourlyForcast;