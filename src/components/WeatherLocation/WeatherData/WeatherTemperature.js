import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './style.css';
import {
    SUN,
    FOG,
    CLOUD,
    RAIN,
    SNOW,
    ECLIPSE,
    THUNDER,
    DRIZZLE
} from './../../../constants/weathers';

const icons = {
    [SUN]: 'day-sunny',
    [FOG]: 'day-fog',
    [CLOUD]: 'cloud',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'thunder',
    [DRIZZLE]: 'drizzle',
    [ECLIPSE]: 'solar-eclipse',
};
const sizeIcon = "4x";
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon){
        return <WeatherIcons name={icon} size={sizeIcon}/>
    }else{
        return <WeatherIcons name={'day-sleet'} size={sizeIcon}/>
    }    

}
const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className='weatherTemperatureConteiner'>
        <span className='wicon'>
        {
            getWeatherIcon(weatherState)
        }
        </span>
        <span className="temperature">
            {`${temperature}`}
        </span>
        <span className="temperatureType">
            °C
        </span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}
export default WeatherTemperature;