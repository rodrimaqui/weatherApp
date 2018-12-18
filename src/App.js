import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
const cities = [
  "Miramar,ar",
  "Mar del Plata,ar",
  "Roma,it",
  "London,uk",
  "kiev,ua"
];
class App extends Component {

  constructor(){
    super();
    this.state = {
      city: null
    }
  }
  handleSelectedLocation = city =>{
    this.setState({
      city
    });
  }
  
  render() {
    const { city } = this.state;
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
            <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={ 12 }  md={ 6 }>
            <div className='forecast'>
                { city ? <ForecastExtended city={ city }/> : null}
            </div>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;
