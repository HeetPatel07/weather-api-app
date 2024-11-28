import React, { useState } from 'react';
import axios from 'axios';

// Helper function to convert text to camel case with first letter capitalized
const toCamelCase = (str) => {
  return str
    .replace(/\w+/g, (match, index) => 
      index === 0 ? match.charAt(0).toUpperCase() + match.slice(1).toLowerCase() 
      : match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
    )
    .replace(/\s+/g, ' '); // Keep spaces between words
};

const WeatherComponent = ({ onWeatherUpdate }) => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  console.log('API key: ' + apiKey);

  const getWeather = () => {
    if (!location) {
      setError('Please enter a location');
      return;
    }

    setLoading(true);
    setError('');

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
        setError('');
        setLoading(false);

        if (onWeatherUpdate) {
          onWeatherUpdate(response.data.weather[0].main);
        }
      })
      .catch((err) => {
        console.error(err); // Log the error details for debugging
        setError('Error fetching weather data. Please try again.');
        setWeather(null);
        setLoading(false);
      });
  };

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
        style={{
          padding: '10px 20px',
          cursor: 'pointer',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
        }}
      >
        Get Weather
      </button>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && !loading && (
        <table className="weather-details" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr>
              <td colSpan="2" className="weather-details-icon">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </td>
            </tr>
            <tr>
              <th>Weather Condition:</th>
              <td>{toCamelCase(weather.weather[0].description)}</td>
            </tr>
            <tr>
              <th>Location:</th>
              <td>{weather.name}, {weather.sys.country}</td>
            </tr>
            <tr>
              <th>Temperature:</th>
              <td>{weather.main.temp}°C</td>
            </tr>
            <tr>
              <th>Feels Like:</th>
              <td>{weather.main.feels_like}°C</td>
            </tr>
            <tr>
              <th>Wind Speed:</th>
              <td>{weather.wind.speed} m/s</td>
            </tr>
            <tr>
              <th>Humidity:</th>
              <td>{weather.main.humidity}%</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WeatherComponent;
