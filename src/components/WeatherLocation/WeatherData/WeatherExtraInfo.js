import React from 'react';
import PropType from 'prop-types';
import './style.css';
const WeatherExtraInfo = ({humidity,wind}) => (
    <div className='weatherExtraInfoConteiner'>
        <span className='extraInfoText'>
            {` Humidity: ${humidity} %`}
        </span>
        <br/>
        <span className='extraInfoText'>
            {`Wind:  ${wind} km/h`}
        </span>
    </div>
);

WeatherExtraInfo.propTypes = {
        humidity: PropType.number.isRequired,
        wind: PropType.number.isRequired
}
export default WeatherExtraInfo;