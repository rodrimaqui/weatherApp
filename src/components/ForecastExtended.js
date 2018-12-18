import React, { Component } from 'react';
import { string } from 'prop-types';
import ForecastItem from './ForecastItem';
import getUrlWeatherExtended from './../services/getUrlWearherExtended';
import transformForecast from './../services/transformForecast';
import CircularProgress from "@material-ui/core/CircularProgress";
import './styles.css';

class ForecastExtended extends Component{
    constructor(){
        super();
        this.state = {
            forecastData: null
        }
    }
    componentDidMount() {
        this.getForecastExtended(this.props.city);
    }
    componentDidUpdate(prevProps, prevState) {
        if(this.props.city !== prevProps.city){
            this.setState({
                forecastData: null
            })
            this.getForecastExtended(prevProps.city);
        }
    }
    
    
    getForecastExtended(city){
        fetch(getUrlWeatherExtended(city))
            .then(response => {
                return response.json();
            })
            .then(response => {
                const forecastData = transformForecast(response);
                console.log(forecastData);
                this.setState({
                    forecastData
                });
            })
            .catch(error => console.log(error));
    }
    renderForecastItemsDays(forecastData){

        return forecastData.map( (element,index) => 
                    (<ForecastItem 
                        key={ index }
                        weekDay={ element.weekDay }
                        hour={element.hour}
                        data={element.data}
                        />));
    }
    render(){
        const { city } = this.props;
        const { forecastData } = this.state;
        return(
            <div>
                <h2 className='forecastExtended'>
                    {city}
                </h2>
                {forecastData ? this.renderForecastItemsDays(forecastData) : <CircularProgress size={50}/>}
            </div>
        );
    }
}
ForecastExtended.propTypes = {
    city: string.isRequired,
}
export default ForecastExtended;