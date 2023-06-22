import React, {useEffect, useState} from "react";

export default function Weather(){

    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        //not a real api key
        fetch('http://api.weatherstack.com/current?access_key=d6731c7ad46fa65a1c5a830d19c672cb&query=Bozeman')
            .then((resonse) => resonse.json())
            .then((data) => {
                console.log(data);
                console.log("hi");
                
                setWeatherData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });  
    }, [])


    return(
        <div>
            The Weather iasasdasddasds {}
        </div> 
    );
}