import React, { useEffect } from 'react';
import cities from '../../data/in.json';
import axios from 'axios';
import { UseWeatherAppContext } from '../../context/Context'

const ChooseState = () => {

  const { state: { city }, dispatch } = UseWeatherAppContext();
  // console.log('UseWeatherAppContext',UseWeatherAppContext(),city)
  const handleChange = (e) => {
    const selectedCity = cities.filter((item) => {
      return item.city === e.target.value
    })[0]
    // console.log(selectedCity)
    dispatch({
      type: "SET_CITY",
      payload: selectedCity
    })
  }

  //API call
  const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';
  let lat = city && city.lat ? city.lat : '';
  let long = city && city.lng ? city.lng : '';
  let exclude = 'hourly,minutely';
  const ULR = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`

  const fetchData = () => {
    axios(ULR).then((data) => {
      let _daily = data.data.daily
      dispatch({
        type: 'SET_DAILY',
        payload: _daily
      })

      // console.log('data',data.data.daily)
    })
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line 
  }, [city])

  return (
    <>
      <div className='stateWrap'>
        <select className='stateMenu' defaultValue={city} onChange={handleChange}>
          {cities && cities.length > 0 && cities.map((item) => {
            return (
              <option key={`${item.population}${item.lat}`} value={item.city}>
                {item.city}-{item.admin_name}
              </option>
            )
          })}
        </select>
      </div>
    </>
  )
}

export default ChooseState;
