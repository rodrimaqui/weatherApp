import React, { Component } from 'react';
import { Grid,Row,Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';
import LocationList from './components/LocationList';
const cities = [
  "Miramar,ar",
  "Mar del Plata,ar",
  "Roma,it",
  "London,uk",
  "kiev,ua"
];
class App extends Component {
  handleSelectedLocation = city =>{
    console.log(`handleSelectedLocation(App) ${city}`);
  }

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
          <Col xs={ 12 } mdOffset={ 4 } md={ 6 }>
            <LocationList 
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={ 12 } md={ 6 }>

          </Col>
        </Row>
      </Grid>

    );
  }
}

export default App;
