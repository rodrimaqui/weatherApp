import React from 'react';
import { string, number, shape} from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({weekDay, hour, data}) => ( 
    <div>
            <h2>
                {weekDay} - {hour}:00 hs
            </h2>
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