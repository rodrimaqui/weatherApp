import React, { Component } from 'react';
import { array,string } from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';
import { connect } from 'react-redux';
import { getCity,getForecastData } from './../reducers';
class ForecastExtendedContainer extends Component {
    render() {
        const { city,forecastData } = this.props;
        return (
            city ? <ForecastExtended city={ city } forecastData={ forecastData }/> : null 
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: string,
    forecastData: array
};
const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastData(state) });
export default connect(mapStateToProps,null)(ForecastExtendedContainer);