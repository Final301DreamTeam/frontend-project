import React from 'react';
import Home from './Home';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Results from './Results';



class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurantsData: [],
      savedResturants: []
    }
  }

  getRestaurants = async (city, food) => {
    try {
      let restaurants = await axios.get(`${process.env.REACT_APP_SERVER}/restaurants?location=${city}&term=${food}`);
      this.setState({
        restaurantsData: restaurants.data
      })
    } catch (error) {
      console.log(`error message `, error);
    }
  }
  postRestaurants = async (newRestaurant) => {
    try {
      let dataTosave = await axios.post(`${process.env.REACT_APP_SERVER}/restaurants`, newRestaurant);
      console.log(dataTosave.data, 'dataTosave');
      this.setState({
        savedResturants: [...this.state.savedResturants, dataTosave.data]
      })
      console.log(`${newRestaurant.name} added to yelpDataForProfile`);
    } catch (error) {
      console.log('we have an error: ', error.response.data)
    }
  }
  render() {
    console.log(this.state.savedResturants);
    return (
      <>
        <Home
        getRestaurants={this.getRestaurants}
        restaurantsData={this.state.restaurantsData}
        />
        <Results
        restaurantsData={this.state.restaurantsData}
        savedResturants={this.state.savedResturants}
        postRestaurants={this.postRestaurants}
        />
      </>
    )
  }
}
export default App;
