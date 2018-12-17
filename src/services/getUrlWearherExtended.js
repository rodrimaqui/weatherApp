import { urlBase,key,unit } from './../constants/apiUrl';

const getUrlWeatherExtended = (city) => {
    return `${urlBase}forecast?q=${city}&appid=${key}`;
}

export default getUrlWeatherExtended;