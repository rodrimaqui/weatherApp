import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

const LocationList = ({ cities, onSelectedLocation }) => {
    const handlerWeatherLocationClick = city => {
        console.log("handlerWeatherLocationClick (LocationList)");
        onSelectedLocation(city);
    }
    const weatherLocationArray = (cities) => (
        cities.map( city => (
            <WeatherLocation 
                key={city} 
                city={city}
                onWeatherLocationClick={ 
                    () => {
                        handlerWeatherLocationClick(city);
                    } 
                }/>
            ))
    );
    return(
        <div className='locationList'>
            {
                weatherLocationArray(cities)
            }
        </div>
    );
}
LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}
export default LocationList;