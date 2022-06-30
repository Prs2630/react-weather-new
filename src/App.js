import React, { useState } from 'react'
import './App.css';

import CityComponent from './components/CityComponent';
import WeatherComponent from './components/WeatherComponent';
import Axios from "axios";
export const WeatherIcons = {
  "01d": "/icons/sunny.jpg",
  "01n": "/icons/night.jpg",
  "02d": "/icons/day.jpg",
  "02n": "/icons/cloudy-night.jpg",
  "03d": "/icons/cloudy.jpg",
  "03n": "/icons/cloudy.jpg",
  "04d": "/icons/perfect-day (1).jpg",
  "04n": "/icons/cloudy-night.jpg",
  "09d": "/icons/rain.jpg",
  "09n": "/icons/rain-night.jpg",
  "10d": "/icons/rain.jpg",
  "10n": "/icons/rain-night.jpg",
  "11d": "/icons/storm.jpg",
  "11n": "/icons/storm.jpg",
};


function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState()
  const fetchWeather = async (e) => {
    e.preventDefault()
    const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=909e41b461625fe32cd43fcfa10a8e45`)
    console.log(response)
    setWeather(response.data)
  }
  return (
    <div className="Container">
      <span className='applabel'><label >React Weather App</label></span>
      {city && weather ? <WeatherComponent weather={weather} city={city} /> : <CityComponent setCity={setCity} fetchWeather={fetchWeather} />}


    </div>
  );
}

export default App;
