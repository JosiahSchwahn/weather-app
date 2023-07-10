import React,{useState} from "react";

import '../styles/hourlyforcast.css'
import LinkedList from '../circularLinkedList'


const HourlyForcast = ({weatherData, currentDate}) => {

    const [hourCarousel, sethourCarousel] = React.useState(0);

    //finds the first hour to display inside the hourlyArray depending on local time
    const hourlyArray = weatherData.historical[currentDate].hourly;
    const localTimeHour = parseInt((weatherData.location.localtime).slice(11,13));
    //console.log([hourlyArray, localTimeHour]);
                                                                                          //19
    const randomArray = [5, 17, 9, 12, 22, 3, 19, 8, 1, 15, 10, 20, 14, 2, 7, 23, 11, 6, 4, 16, 18, 13, 21, 24];

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

    const hourlyArrayJSX = liveArray.map((hourObject, index) => {
        return (
          <div className="ha-wrapper" key={index}>
            <div className="hf_time">{hourObject.time}</div>
            <div className="hf_temperature">{hourObject.temperature}</div>
            <div className="hf_icon">{hourObject.weather_descriptions}</div>
          </div>
        );
      });

    return(

        <div className="live_array">{hourlyArrayJSX}</div>

    )
}

export default HourlyForcast;