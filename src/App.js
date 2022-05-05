import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
import Content from "./Content";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import Header from './Header';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';


class App extends React.Component {
  return (
   
    <>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated ? <Content /> : <h2>Please login</h2>}
      </>
    
     <>

      <Router>
      <Header />
        <Routes>
          <Route exact path='/' element={<h1>This is the Top of the Body</h1>}/>

          <Route path='/about' element={<About />}/>


        </Routes>

      </Router>
    </>
  );


export default withAuth0(App);
