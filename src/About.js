import React, { Component } from 'react';
// import './About.css';

class About extends Component {
  render() {
    return (
      <div className='about-root'>
        <div className='about-us-container'>
          <h2>Welcome to our site!</h2>
          <hr />
          <p>We'd like to introduce you to the software developers that gave a lot to bring this application together!
          </p>
          <hr />
          <h3>Abdulahi Mohamud</h3>
          <ul className='ul-item'>Pitch</ul>
          <h3>Raul Zarate</h3>
          <ul className='ul-item'>Pitch</ul>
          <h3>Scott Evans</h3>
          <ul className='ul-item'>Pitch</ul>
          <h3>Darius Owens</h3>
          <ul className='ul-item'>Pitch</ul>
        </div>
      </div>
    );
  }
}
export default About;

