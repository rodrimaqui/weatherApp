import {
    SUN,
    FOG,
    CLOUD,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
} from './../constants/weathers';

const getIcon = weatherData => {
    const { id } = weatherData;
    if( id <= 299){
        return THUNDER;
    }else if( id <= 399){
        return DRIZZLE;
    }else if(id <= 599){
        return RAIN;
    }else if( id <= 699){
        return SNOW;
    }else if( id <= 799){
        return FOG;
    }else if( id <= 800){
        return SUN
    }else{
        return CLOUD
    }

}

const transformWeather = weatherData => {
    const { humidity, temp } = weatherData.main;
    const weatherState = getIcon(weatherData.weather[0]);
    const data = {
        humidity,
        temperature: temp,
        wind: weatherData.wind.speed,
        weatherState 
    }
    return data;
}
export default transformWeather;