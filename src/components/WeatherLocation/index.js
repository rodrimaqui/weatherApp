import React,{ Component } from 'react';
import { PropTypes } from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import CircularProgress from "@material-ui/core/CircularProgress";
import './styles.css';

class WeatherLocation extends Component{
    constructor(props){
        super(props);
        const { city } = props;
        this.state = {
            city,
            data: null,
            spinner: false
        }
    }
    //cdm
    componentDidMount() {
        this.getWeather()
    }
    //cdu
    componentDidUpdate(prevProps, prevState) {

    }
    //DESACONSEJADOS

    //cwm
    componentWillMount() {

    }
    //cwup
    componentWillUpdate(nextProps, nextState) {

    }
    getWeather = () => {
        const url = getUrlWeatherByCity(this.state.city);
        fetch(url)
            .then(response => {
                return response.json();
            }).then(response => {
                const data = transformWeather(response);
                this.setState({
                    city: response.name,
                    data 
                })  
            })
            .catch(error => {
                console.log(error);
            });
    }
    handleUpdateClick = () => {
        let aux = this.state.city;
        if( aux === 'Miramar'){
            aux = 'Mar del Plata'
        }else{
            aux = 'Miramar'
        }
        this.setState({
            city: aux
        });
    }
    render(){
        const { city,data } = this.state;
        const { onWeatherLocationClick } = this.props;
        return (
            <div className='weatherLocationCont' onClick={ onWeatherLocationClick }>
                {data ? <div>
                            <Location city={city}/>
                            <WeatherData data={data}/>
                        </div>
                    : <CircularProgress size={50}/>
                }
            </div>
        );
    }
}
WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;