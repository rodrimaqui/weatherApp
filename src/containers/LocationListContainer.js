import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array,func } from 'prop-types';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {

    handleSelectedLocation = city =>{
        this.props.setCity(city);
      }

    render() {
        return (
            <LocationList 
              cities={this.props.cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
        );
    }
}

LocationListContainer.propTypes = {
    setCity: func.isRequired,
    cities: array.isRequired
};
const mapDispatchToPropsActions = dispatch => ({setCity: value => dispatch(setCity(value))});
export default connect(null,mapDispatchToPropsActions)(LocationListContainer);