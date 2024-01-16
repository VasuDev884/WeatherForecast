import React from 'react';
import './App.css';
import Weather from './components/weather/index';
import SearchCity from './components/SearchCity/index';
import HourlyData from './components/hourlyData';
import AirConditions from './components/Air/index';
import DaysWeather from './components/Days';

function App() {
  return (
    <>
     <SearchCity/>
    <div className="grid">
      <div >
      <Weather/>
      <HourlyData/>
      <AirConditions/>
      </div>
      <div className='DayWeather'>
        <DaysWeather/>
      </div>
    </div>
    </>
  );
}

export default App;
