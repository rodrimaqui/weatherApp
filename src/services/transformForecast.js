import moment from 'moment';
import transformWeather from './transformWeather';
const transformForecast = (data) => (
    data.list.filter( element => (
        moment.unix(element.dt).hour() === 6 ||
        moment.unix(element.dt).hour() === 12 ||
        moment.unix(element.dt).hour() === 18
    )).map( element => ({
        weekDay: moment.unix(element.dt).format('ddd'),
        hour: moment.unix(element.dt).hour(),
        data: transformWeather(element)
    }))
);

export default transformForecast;