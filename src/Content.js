import React from "react";
import Home from "./Home";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Results from "./Results";
import Saved from "./Saved";
import { Modal } from "react-bootstrap";
import Update from "./UpdateModal";
import { withAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantsData: [],
      savedResturants: [],
      updateRes : null,
      showModal: false,
      
    };
  }

  getRestaurants = async (city, food) => {
    try {
      let restaurants = await axios.get(
        `${process.env.REACT_APP_SERVER}/restaurants?location=${city}&term=${food}`
      );
      this.setState({
        restaurantsData: restaurants.data,
      });
    } catch (error) {
      console.log(`error message `, error);
    }
  };
  postRestaurants = async (newRestaurant) => {
    try {
      let dataTosave = await axios.post(
        `${process.env.REACT_APP_SERVER}/restaurants`,
        newRestaurant
      );
      this.setState({
        savedResturants: [...this.state.savedResturants, dataTosave.data],
      });
    } catch (error) {
      console.log("we have an error: ", error.response.data);
    }
  };

  deleteRestaurants = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/restaurants/${id}`;
      await axios.delete(url);
      let updatedResturants = this.state.savedResturants.filter(
        (rest) => rest._id !== id
      );
      this.setState({
        savedResturants: updatedResturants,
      });
    } catch (err) {
      console.log("We have an error: ", err.response.data);
    }
  };

  updateRestaurants = async (notes) => {
    try {
      let updateData = await axios.put(`${process.env.REACT_APP_SERVER}/restaurants/${notes._id}`,notes);
      let updatedNotes = this.state.savedResturants.map((rest) => {
        return rest._id === notes._id ? updateData.data : rest;
      });
      this.setState({
        savedResturants: updatedNotes,
      });
    } catch (err) {
      console.log("We have an error: ", err.response.data);
    }
  };

  resturantToUpdate = (res) =>{
    this.setState ({
      updateRes : res
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
        <Home
          getRestaurants={this.getRestaurants}
          restaurantsData={this.state.restaurantsData}
        />
        <Results
          restaurantsData={this.state.restaurantsData}
          savedResturants={this.state.savedResturants}
          postRestaurants={this.postRestaurants}
        />
        <Saved
          deleteRestaurants={this.deleteRestaurants}
          savedResturants={this.state.savedResturants}
          updateRes = {this.resturantToUpdate}
          showModal={this.showModal}
        />

        <Profile/>

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
              savedResturants={this.state.savedResturants}
              updateRes={this.state.updateRes}
              
            />
          </Modal.Body>
        </Modal>
      </>

      
    );
  }
}
export default withAuth0(Content);