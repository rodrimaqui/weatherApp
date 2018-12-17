import React from 'react';
import { string, number, shape} from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({weekDay, hour, data}) => ( 
    <div>
            <div>
                {weekDay}:{hour}
            </div>
            <WeatherData data={data}/>
    </div>
    );
ForecastItem.propTypes = {
    weekDay: string.isRequired,
    hour: number.isRequired,
    data: shape({
        temperature: number.isRequired,
        weatherState: string.isRequired,
        humidity: number.isRequired,
        wind: number.isRequired
    })
}
export default ForecastItem;