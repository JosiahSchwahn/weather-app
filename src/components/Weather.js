import React from "react";

export default function Weather(){

    //const [weatherData, setWeatherData] = useState(null);


     const testData = async () => {
        try {
            const response = await fetch('http://api.weatherstack.com/current?access_key=2295f4a6ab5c0563e7994f2d72620085&query=Bozeman');
            const data = await response.json();
            console.log(data);

          } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
          }

     };

     testData();
     /*
    useEffect(() => {
        //not a real api key
        fetch('http://api.weatherstack.com/current?access_key=2295f4a6ab5c0563e7994f2d72620085&query=Bozeman')
            .then((resonse) => resonse.json())
            .then((data) => {
                console.log(data);
                setWeatherData(data);
            })
            .catch((err) => {
                console.log(err.message);
            });  
    }, [])
    */

    return(
        <div>
            Somethinssg E1{}
            I dont know 
        </div> 
    );
}