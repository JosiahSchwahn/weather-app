import React from "react";

export default function Weather(){

    const fetchWeatherData = async ()  => {
        try{
            const response = await fetch(`http://api.weatherstack.com/current?access_key=17aa6c651ed4132ecb3e45b49aaa5cce&query=Bozeman`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log("hi");
        
        
        }catch (error){
            console.log(`Fetch error: ${error}`); 
        }  
    };

    return(
        <div>
            The Weather is {data}
        </div>
    );
}