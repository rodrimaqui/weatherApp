import { urlBase,unit,key } from './../constants/apiUrl';

const getUrlWeatherByCity = city => {
    return `${urlBase}?q=${city}&units=${unit}&appid=${key}`;
}
export default getUrlWeatherByCity;