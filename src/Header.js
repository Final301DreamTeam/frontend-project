import React from 'react';
import {Navbar, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Navbar.Brand>Items</Navbar.Brand>
                <NavItem>Home
                </NavItem>
            </Navbar>
            </>
        );
    }
}

export default Header;