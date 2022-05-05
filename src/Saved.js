import React from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Saved.css";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  handleClick = (res) => {
    this.props.updateRes(res)
    this.props.showModal()
  }

  

  

  render() {
    return (
      <>
        {this.props.savedResturants.map((restaurant, idx) => (
          <Card className="cards" key={restaurant._id}>
            <Card.Body>
              <Card.Img
                id="Saved"
                src={restaurant.image_url}
                alt={restaurant.name}
              />
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>{restaurant.rating} ⭐</Card.Text>
              <Card.Text>{restaurant.price}</Card.Text>
              <Card.Text>{restaurant.address}</Card.Text>
              <Card.Text>Notes:{restaurant.notes}</Card.Text>
              <Button
                onClick={() => this.props.deleteRestaurants(restaurant._id)}
                variant="danger"
              >
                Delete
              </Button>

              <Button
                  className="button"
                  variant="primary"
                  onClick={() => this.handleClick(restaurant)}
                  
                >
                  Update
                </Button>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}
export default Saved;
