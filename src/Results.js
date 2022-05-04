import React from "react";
import { Carousel, Button } from "react-bootstrap";


class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }



  handleAddButton = (restaurant) => {
    console.log('updated state after add button pressed: ', this.props.savedResturants);
    console.log('restaurant passed in to button: ', restaurant);
    this.props.postRestaurants(restaurant);
}


  render(){
    return(
      <Carousel 
  style={{
  width: '50%',
  margin:'0 auto'
}}

>
{}

{this.props.restaurantsData.length ? (
  this.props.restaurantsData.map((data, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={data.imageUrl}
            alt={data.name}
          />
          <Carousel.Caption>
            <h3>{data.name}</h3>
            <p>{data.rating} ⭐</p>
            <p>{data.price}</p>
            <p>{data.address}</p>
            <p>{data.notes}</p>
            <Button className='button' variant="primary" onClick={() => this.handleAddButton(data)}>Add</Button>
        

          </Carousel.Caption>
        </Carousel.Item>


  ))
) : (
<h4>Hello</h4>
)}
</Carousel>
    )
  }







}
export default Results;
