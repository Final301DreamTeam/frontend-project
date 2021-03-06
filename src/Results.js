import React from "react";
import { Carousel, Button } from "react-bootstrap";
import './Results.css'


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAddButton = (restaurant) => {
    
    this.props.postRestaurants(restaurant);
  };

  render() {
    return (
      <Carousel
        style={{
          width: "50%",
          margin: "0 auto",
        }}
      >
        {}

        {this.props.restaurantsData.length ? (
          this.props.restaurantsData.map((data, idx) => (
            <Carousel.Item className="carsimg" key={idx}>
              <img
                className="d-block w-100"
                src={data.image_url}
                alt={data.name}
              />
              <Carousel.Caption>
                <h3>{data.name}</h3>
                <p>{data.rating} ⭐</p>
                <p>{data.price}</p>
                <p>{data.address}</p>
                <p>{data.notes}</p>
                <Button
                  className="button"
                  variant="primary"
                  onClick={() => this.handleAddButton(data)}
                >
                  Add
                </Button>


              </Carousel.Caption>
            </Carousel.Item>
          ))
        ) : (
          <></>
        )}
      </Carousel>
    );
  }
}
export default Results;
