import { urlBase,key,unit } from './../constants/apiUrl';

const getUrlWeatherExtended = (city) => {
    return `${urlBase}forecast?q=${city}&units=${unit}&appid=${key}`;
}

export default getUrlWeatherExtended;