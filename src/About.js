import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';
import './About.css';

class About extends Component {
  render() {
    return (
      <>
        <div class="wrap">
          <br />
          <h1>Welcome to our site!</h1>
          <section class="bl">
            <p>We'd like to introduce you to the software developers that gave a lot to bring this application together!</p>
          </section>
        </div>
        <Accordion className="accordion" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accHeader">Abdulahi Mohamud</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="accHeader">Raul Zarate</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="accHeader">Scott Evans</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="accHeader">Darius Owens</Accordion.Header>
            <Accordion.Body>
            Hello my name is Darius Owens. Software Developer and I’m navy veteran with a diverse work background ranging from meteorology/oceanography , car and insurance sales, USPS, and a security supervisor. With a well rounded skill set  I decided to learn Software development because I feel with my skill of being motivated, great team player, and a passion to help people. I know I will have a great career In tech.

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}
export default About;

