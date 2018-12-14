import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
/*const Location = (props) => {
    //Destructuring: Cuando una constante tiene el mismo nombre que la variable que viene. En la const se pone entre {}
    const { city } = props;
    return (    <div>
                    <h1>{city}</h1>
                </div>
            );
};

export default Location;*/

//Destructuring 2: Lo puedo pasar en el primer parametro del arrow Function

const Location = ({ city }) => (
    <div className='locationCont'>
        <h1>
            {city}
        </h1>
    </div>
);

Location.propTypes = {
    city: PropTypes.string.isRequired
}
export default Location;