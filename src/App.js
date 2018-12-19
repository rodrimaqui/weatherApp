import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-flexbox-grid';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import './App.css';
const cities = [
  "Miramar,ar",
  "Mar del Plata,ar",
  "Roma,it",
  "London,uk",
  "kiev,ua"
];
class App extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weather Application
                </Typography>
              </Toolbar>
            </AppBar>
        </Row>
        <Row>
          <Col xs={ 12 }  md={ 6 }>
            <LocationListContainer
              cities={cities}
            />
          </Col>
          <Col xs={ 12 }  md={ 6 }>
            <div className='forecast'>
              <ForecastExtendedContainer/>
            </div>
          </Col>
        </Row>
      </Grid>

    );
  }
}
export default App;
