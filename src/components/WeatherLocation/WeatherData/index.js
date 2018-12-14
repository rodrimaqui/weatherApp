import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './style.css';
import {
    SUN,
    FOG,
    CLOUD,
    RAIN,
    SNOW,
    WINDY,
    ECLIPSE
} from './../../../constants/weathers';
const WeatherData = ( {data: {temperature,weatherState,humidity,wind}} ) => {
   return (
        <div className='weatherDataConteiner'>
             <WeatherTemperature temperature={temperature} weatherState={weatherState}/>
             <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
    )
};
WeatherData.propType = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired
    })
}
export default WeatherData;