import React from 'react';
import ChooseState from './ChooseState/index';
import WeekInfo from './WeekInfo/index';
import Humidity from './Humidity/index';
import LeftComponent from './Left/index';
const Home = () => {
  return (
    <>
    <div className='homeWrap'>
        <div className='weatherSection'>
            <LeftComponent/>
      <div className='rightSide'>
        <ChooseState/> <br/>
        <WeekInfo/> <br/>
        <Humidity/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home
