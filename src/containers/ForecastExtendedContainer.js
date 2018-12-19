import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from './../components/ForecastExtended';
import { connect } from 'react-redux';
class ForecastExtendedContainer extends Component {
    render() {
        return (
            this.props.city ? <ForecastExtended city={ this.props.city } /> : null 
        );
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string
};
const mapStateToProps = ({ city }) => ({ city });
export default connect(mapStateToProps,null)(ForecastExtendedContainer);