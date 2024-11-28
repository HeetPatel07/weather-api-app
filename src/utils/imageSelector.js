import React from 'react';


const weatherBackgrounds = {
    Clear: '/images/sunny.png',
    Clouds: '/images/cloudy.png',
    Rain: '/images/rainy.png',
    Snow: '/images/snowy.png',
    Thunderstorm: '/images/thunderstorm.png',
    Drizzle: '/images/drizzle.png',
  };
  
  export function getBackgroundImage(weatherCondition) {
    // Normalize to lowercase for easier comparison
    const condition = weatherCondition.toLowerCase();
  
    // Define background images based on weather conditions
    if (condition.includes('snow')) {
      return '/images/snowy.png'; // Path to snowy image
    } else if (condition.includes('clear')) {
      return '/images/sunny.png'; // Path to clear skies image
    } else if (condition.includes('mist')) {
      return '/images/mist.png'; // Path to clear skies image
    } 
    else if (condition.includes('smoke')) {
      return '/images/smoke.png'; // Path to clear skies image
    } else if (condition.includes('cloud')) {
      return '/images/cloudy.png'; // Path to cloudy image
    } else if (condition.includes('rain')) {
      return '/images/rainy.png'; // Path to rainy image
    } else if (condition.includes('fog')) {
      return '/images/foggy.png'; // Path to foggy image
    } else if (condition.includes('storm')) {
      return '/images/stormy.png'; // Path to stormy image
    } else {
      return '/images/default.png'; // Default background
    }
  }
  
  