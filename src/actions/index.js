import getUrlWeatherExtended from './../services/getUrlWearherExtended';
import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const setCity = payload => ({
         type: SET_CITY,
          payload
        }
);
export const setForecastData = payload => ({
    type: SET_FORECAST_DATA,
    payload
});

export const setSelectedCity = payload => {
    return dispatch => {

        dispatch(setCity(payload));

        return fetch(getUrlWeatherExtended(payload))
            .then(response => {
                return response.json();
            })
            .then(response => {
                const forecastData = transformForecast(response);
                console.log(forecastData);
                dispatch(setForecastData({city:payload, forecastData}));
            })
            .catch(error => (
                console.log(error)
                )
            );
    }
}