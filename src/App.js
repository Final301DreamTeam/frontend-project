import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
// import Content from "./Content";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Header from './Header';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';


import Home from "./Home";
import axios from "axios";
import Results from "./Results";
import Saved from "./Saved";
import { Modal } from "react-bootstrap";
import Update from "./UpdateModal";
import Profile from "./Profile";


// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { withAuth0 } from "@auth0/auth0-react";




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsData: [],
      savedRestaurants: [],
      updateRes: null,
      showModal: false,

    };
  }

  getRestaurants = async (city, food) => {
    if (this.props.auth0.isAuthenticated) {
      // get a token
      // JSON Web Token _ (pronounced JOT)
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw; 
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/restaurants?location=${city}&term=${food}`,
        headers: {'Authorization': `Bearer ${jwt}`}

      }
    
      let restaurants = await axios (config);
      this.setState({
        restaurantsData: restaurants.data,
      });
    }
  }
  postRestaurants = async (newRestaurant) => {
    try {
      let dataTosave = await axios.post(
        `${process.env.REACT_APP_SERVER}/restaurants`,
        newRestaurant
      );
      this.setState({
        savedRestaurants: [...this.state.savedRestaurants, dataTosave.data],

      });
    } catch (error) {
      console.log("we have an error: ", error.response.data);
    }
  };

  deleteRestaurants = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/restaurants/${id}`;
      await axios.delete(url);
      let updatedRestaurants = this.state.savedRestaurants.filter(
        (rest) => rest._id !== id
      );
      this.setState({
        savedRestaurants: updatedRestaurants,
      });
    } catch (err) {
      console.log("We have an error: ", err.response.data);
    }
  };

  updateRestaurants = async (notes) => {
    try {
      let updateData = await axios.put(`${process.env.REACT_APP_SERVER}/restaurants/${notes._id}`, notes);
      let updatedNotes = this.state.savedRestaurants.map((rest) => {
        return rest._id === notes._id ? updateData.data : rest;
      });
      this.setState({
        savedRestaurants: updatedNotes,
      });
    } catch (err) {
      console.log("We have an error: ", err.response.data);
    }
  };

  restaurantToUpdate = (res) => {
    this.setState({
      updateRes: res
    })
  }

  showModal = () => {
    this.setState({
      showModal: true
    })
  }

  hideModalHandler = () => {
    this.setState({
      showModal: false
    })
  }

  render() {

    return (
      <>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated ? <><Router>
          <Header />
          <Routes>
            <Route exact path='/' element={<>
              <Home
                getRestaurants={this.getRestaurants}
                restaurantsData={this.state.restaurantsData} />
              <Results
                restaurantsData={this.state.restaurantsData}
                savedRestaurants={this.state.savedRestaurants}
                postRestaurants={this.postRestaurants} />
            </>} />

            <Route path='/about' element={<About />} />

            {/* <Route path='/saved' element={ } /> */}

            <Route path='/Profile' element={<Profile />} />


          </Routes>

        </Router>
        
        <Saved
            deleteRestaurants={this.deleteRestaurants}
            savedRestaurants={this.state.savedRestaurants}
            updateRes={this.restaurantToUpdate}
            showModal={this.showModal} /> </> : <h2>Please login</h2>}





        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Restaurant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Update
              updateRestaurants={this.updateRestaurants}
              hideUpdateModal={() => this.setState({ showModal: false })}
              savedRestaurants={this.state.savedRestaurants}
              updateRes={this.state.updateRes}

            />
          </Modal.Body>
        </Modal>
      </>


    );
  }
}
export default withAuth0(App);
