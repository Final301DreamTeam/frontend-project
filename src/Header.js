import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <Navbar className="navBar" bg="dark" variant="dark">
                    <Container className="container">
                        <Navbar.Brand className="brandNav" href="#home">FindMyMeal</Navbar.Brand>
                        <Nav className="navLinks">
                            <Nav.Link className="homeNav" href="/">Home</Nav.Link>
                            <Nav.Link className="savedNav" href="#home">Saved</Nav.Link>
                            <Nav.Link className="aboutNav" href="/About">About</Nav.Link>
                            <Nav.Link className="membershipNav" href="#pricing">Membership</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;