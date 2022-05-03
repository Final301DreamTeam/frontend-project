import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import './Header.css';
// import { Link } from 'react-router-dom';


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
                        <Navbar.Brand className="brandNav" href="#home">PetMate</Navbar.Brand>
                        <Nav class="navLinks">
                            <Nav.Link className="homeNav" href="#home">Home</Nav.Link>
                            <Nav.Link className="aboutNav" href="#about">About</Nav.Link>
                            <Nav.Link className="membershipNav" href="#pricing">Membership</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        );
    }
}

export default Header;