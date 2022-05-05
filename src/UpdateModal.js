import React from "react";
import { Form, Button } from "react-bootstrap";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let updateNote = {
      name: this.props.updateRes.name ,
      rating: document.getElementById('rating').value|| this.props.updateRes.rating ,
      address: this.props.updateRes.address,
      city: this.props.updateRes.city,
      image_url: this.props.updateRes.image_url,
      state: this.props.updateRes.state,
      zip_code: this.props.updateRes.zip_code,
      price: this.props.updateRes.price,
      notes: document.getElementById('notes').value || this.props.updateRes.notes,
      _id:this.props.updateRes._id
    }

    this.props.hideUpdateModal()

    this.props.updateRestaurants(updateNote);
  };

  

  render() {

    return (
      
      <Form >
        <h1>{this.props.updateRes.name}</h1>
    
        <Form.Group className='mb-3' controlId='rating'>
          <Form.Label>rating</Form.Label>
          <Form.Control type='text' placeholder={this.props.updateRes.rating}/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='notes'>
          <Form.Label>notes</Form.Label>
          <Form.Control type='text' placeholder={this.props.updateRes.notes}/>
        </Form.Group>
        
        <Button onClick={this.handleSubmit} >Update Restaurant</Button>
      </Form>

    )
  }
}

export default Update;
