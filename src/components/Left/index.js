import React from 'react';
import { UseWeatherAppContext } from '../../context/Context'
import dayjs from 'dayjs';


const LeftComponent = () => {
  let { state: { city, current } } = UseWeatherAppContext();
  // console.log(city,current)
  const WEEKDAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if(!current) return <div>Loading...</div>
  const weekdayIndex = dayjs.unix(current.dt).day();
  return (
    <div className='leftWrap'>
      <div className='dateWrap'>
        <h2>{WEEKDAYS[weekdayIndex]}</h2>
        <span className='dateDay'>
          {dayjs.unix(current.dt).format("DD MM YYYY")}
        </span>
       <span className='locationName'>{city.city}-{city.admin_name}-{city.country}</span>
      </div>
      <div className='weatherContainer'>
      <img className="weatherIcon"  alt="rohit"
                src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                        />
        <h1 className='weatherTemp'>{Math.round(current.temp.max)}<sup>o</sup>C</h1>
        <h3 className='weatherDesc'>{current.weather[0].main}</h3>
      </div>
    </div>
  )
}

export default LeftComponent
