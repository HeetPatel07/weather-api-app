import React, { useState } from 'react';
import axios from 'axios';

const WeatherComponent = ({ onWeatherUpdate }) => { // Add onWeatherUpdate prop
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); 

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  console.log('API key: ' + apiKey);
    
  function getWeather() {
    if (!location) {
      setError('Please enter a location');
      return;
    }

    setLoading(true); // Set loading to true when fetching data
    setError(''); // Reset any previous errors

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then((response) => {
        console.log(response.data); // Log the entire API response
        setWeather(response.data);
        setError('');
        setLoading(false);

        // Trigger the parent function to update the background based on weather condition
        if (onWeatherUpdate) {
          onWeatherUpdate(response.data.weather[0].main); // Pass weather condition to App
        }
      })
      .catch((err) => {
        setError('Error fetching weather data. Please try again.');
        setWeather(null);
        setLoading(false);
      });
  }

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)} 
      />

      <button 
        onClick={getWeather} 
        style={{ padding: '10px 20px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '50px' }}
      >
        Get Weather
      </button>

      {loading && <p>Loading...</p>} {/* Show loading indicator */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display errors */}

      {weather && !loading && (

          <div className="weather-details">
            <h4><img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            /></h4>
            <div className = "items-container">
            <h3>{weather.weather[0].description} </h3> {/* Weather condition*/}
            <h3>{weather.name}, {weather.sys.country}</h3>  {/* Location name */}
            <p>Weather : {weather.main.temp}°C</p>  {/* Temperature */}
            <p>Feels Like : {weather.main.feels_like}°C </p>
            <p>Wind Speed : {weather.wind.speed} m/s</p>  {/* Wind speed */}
            <p>Humidity: {weather.main.humidity}%</p>  {/* Humidity */}
          </div>
      </div>
      )}
    </div>
  );
};

export default WeatherComponent;
