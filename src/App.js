import React from 'react'; // Add this line
import './App.css';
import WeatherComponent  from './component/WeatherComponent';




function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherComponent />
    </div>
  );
}

export default App;
