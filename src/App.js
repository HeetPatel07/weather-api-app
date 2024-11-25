import React, { useState } from 'react'; 
import './App.css';
import WeatherComponent from './component/WeatherComponent';
import { getBackgroundImage } from './utils/imageSelector'; // Import function

function App() {
  const [weatherCondition, setWeatherCondition] = useState(''); // Store weather condition

  // Callback function to update weather condition from WeatherComponent
  const handleWeatherUpdate = (condition) => {
    setWeatherCondition(condition);
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${getBackgroundImage(weatherCondition)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        color: 'white',
      }}
    >
      <h1 className = "App-header">Weather App</h1>
      <WeatherComponent onWeatherUpdate={handleWeatherUpdate} />
    </div>
  );
}

export default App;
