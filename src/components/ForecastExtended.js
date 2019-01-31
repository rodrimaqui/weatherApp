import React from 'react';
import { array,string } from 'prop-types';
import ForecastItem from './ForecastItem';

import CircularProgress from "@material-ui/core/CircularProgress";
import './styles.css';


    const renderForecastItemsDays = (forecastData) => {

        return forecastData.map( (element,index) => 
                    (<ForecastItem 
                        key={ index }
                        weekDay={ element.weekDay }
                        hour={element.hour}
                        data={element.data}
                        />));
    }
    const ForecastExtended = ({ city,forecastData }) => (
            <div>
                <h2 className='forecastExtended'>
                    {city}
                </h2>
                {forecastData ? renderForecastItemsDays(forecastData) : <CircularProgress size={50}/>}
            </div>
        );
    
ForecastExtended.propTypes = {
    city: string.isRequired,
    forecastData: array
}
export default ForecastExtended;