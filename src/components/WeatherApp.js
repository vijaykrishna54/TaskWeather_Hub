import React, { useState, useEffect } from 'react';

function WeatherApp() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');
  const [apiKey] = useState('117b02e3aaa2af071272a21ccd6818ff');

  useEffect(() => {
    if (city.trim() !== '') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then((response) => response.json())
        .then((data) => setWeather(data));
    }
  }, [city, apiKey]);

  return (
    <div>
      <h2>Weather App</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
      />
      {weather.main && (
        <div>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
