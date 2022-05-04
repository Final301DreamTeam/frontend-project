import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Saved.css';
class Saved extends React.Component {

  render() {
    console.log(this.props.savedResturants);
    return(
      <>
      {
        this.props.savedResturants.map((restaurant,idx) => (

         
          <Card className="cards" key={restaurant._id}>
            <Card.Body>
              <Card.Img id="Saved" src={restaurant.image_url} alt={restaurant.name}/> 
              <Card.Title>{restaurant.name}</Card.Title>
              <Card.Text>
              {restaurant.rating}
              </Card.Text>
              <Card.Text>
             {restaurant.price}
              </Card.Text>
              <Card.Text>
              {restaurant.address}
              </Card.Text>
              <Card.Text>
              Notes:{restaurant.notes}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>


    )
  }
}
export default Saved;