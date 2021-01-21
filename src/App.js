import React, { useState} from 'react';
import WeatherCard from './components/WeatherCard';
import Input from './components/Input';
import './App.css';


function App() {
    const [weatherData,setWeatherData]=useState({});
     
    async function fetchData(e) {
    const city=e.target.elements.city.value;
    
    console.log(city);
    e.preventDefault()

    const mainData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3d2f4c3e045a04ae5225d66f3a134015`)
    .then( res => res.json())
    .then(data => data)

    if(mainData.message!=="city not found"){
    setWeatherData({
      data: mainData,
      city: mainData.name,
      country: mainData.sys.country,
      description: mainData.weather[0].description,
      temperature: mainData.main.temp,
      error:""
    }
    )}
    else{
      setWeatherData({
        data: '',
          city: '',
          country: '',
          description: '',
          temperature: '',
          error:"Please Type Correctly"
      })
    }
    
   

}

return (
    <div>
          <div className="heading">
            <h1>Weather</h1>
          </div>

          <Input getData={fetchData} />

        <main id="app-container">

          < WeatherCard 
          err={weatherData.error}
           city={weatherData.city} 
           temperature={weatherData.temperature} 
           description={weatherData.description}
            country={weatherData.country} 
            />
        </main> 
    </div>


  );
}

export default App;
