import React, { Component } from 'react';
import { string } from 'prop-types';
import ForecastItem from './ForecastItem';
import getUrlWeatherExtended from './../services/getUrlWearherExtended';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
]

const data = {
    temperature: 15,
    weatherState: 'sun',
    humidity: 80,
    wind: 150
}*/
class ForecastExtended extends Component{
    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }
    componentDidMount() {
        this.getForecastExtended();
    }
    
    getForecastExtended(){
        console.log(getUrlWeatherExtended(this.props.city));
        fetch(getUrlWeatherExtended(this.props.city))
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
                this.setState({
                    forecastData: transformForecast(response)
                })
            })
            .catch(error => console.log(error));
    }
    renderForecastItemsDays(){
        return 'Render Items';
        //return days.map( day => <ForecastItem key={ day } weekDay={ day }  hour={14} data={data}/>)
    }
    renderProgress(){
        return 'Waiting the information';
    }
    render(){
        const { city, hour } = this.props;
        const { forecastData } = this.state;
        return(
            <div>
                <h2 className='forecastExtended'>
                    {city}
                </h2>
                {forecastData ? this.renderForecastItemsDays() : this.renderProgress()}
            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: string.isRequired,
}
export default ForecastExtended;