import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  userSearch = (e) => {
    e.preventDefault();
    const city = e.target.City.value;
    const food = e.target.Food.value;
    this.props.getRestaurants(city, food);
  };
  render() {
    
    return (
      <>
        <Form onSubmit={this.userSearch}>
          <Form.Group controlId="City">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="Food">
            <Form.Label>What GoodTime are you looking for ?</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </>

 
    );
  }
}

export default Home;
