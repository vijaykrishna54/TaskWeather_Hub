import React, { useState, useEffect } from 'react';
import './component_styles/WeatherApp.css'; 
function WeatherApp() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const [apiKey] = useState('117b02e3aaa2af071272a21ccd6818ff');
  const [weatherCondition, setWeatherCondition] = useState('default');

  useEffect(() => {
    if (city.trim() !== '') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          // Determine the weather condition based on the description
          const description = data.weather[0].description.toLowerCase();
          if (description.includes('cloud')) {
            setWeatherCondition('cloudy');
          } 
          
          else if (description.includes('clear')) {
            setWeatherCondition('sunny');
          } 
          else if (description.includes('rain')) {
            setWeatherCondition('rainy');
          } 

          else if (description.includes('drizzle')) {
            setWeatherCondition('drizzle');
          } 

          
          else if (description.includes('snow')) {
            setWeatherCondition('snowy');
          } 
          else {
            setWeatherCondition('default'); // Handle other conditions as needed
          }
        });
    }
  }, [city, apiKey]);

  return (
    <div className={`weather-container ${weatherCondition}-bg`}>
      <h2 className="text-center">Weather App</h2>
      <div className="form-group">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter a city"
          className="form-control"
        />
      </div>
      {weather.main && (
        <div className="mt-4">
          <p>
            <strong>Temperature:</strong> {weather.main.temp}°C
          </p>
          <p>
            <strong>Weather:</strong> {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
