import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import "./About.css";

class About extends Component {
  render() {
    return (
      <>
        <div class="wrap">
          <br />
          <h1>Welcome to our site!</h1>
          <section class="bl">
            <p>
              We'd like to introduce you to the software developers that gave a
              lot to bring this application together!
            </p>
          </section>
        </div>
        <Accordion className="accordion" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="accHeader">
              Abdulahi Mohamud
            </Accordion.Header>
            <Accordion.Body>
              Full stack developer Background in cyber security I have acquired
              many skills and experiences such as critical thinking, and
              self-learning, and implemented those in projects and code
              challenges. I am in love with coding and I would like to encourage
              others who have an interest in software development and be not
              only a mentor but also a symbol of hard work and dedication pays
              off.
              <a href="https://github.com/AbdulahiMohamud" URL> GitHub </a>
              <br></br><a href="https://www.linkedin.com/in/abdulahimmohamud/" URL> linkedin </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="accHeader">
              Raul Zarate
            </Accordion.Header>
            <Accordion.Body>
            I love the problem solving aspect in tech. No puzzle can't be solved without a team and willingness to fail 10,000 times!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="accHeader">
              Scott Evans
            </Accordion.Header>
            <Accordion.Body>
            Hello, Im Scott. A software developer currently in the Army National Guard. I also do photography and videography as a side job. Ive always been passionate about IT and I have experience building computers. I have had experience in construction for most of my jobs, and also with customer service so i feel that i will be a great team player when it comes down to having to share my ideas and also see the value in the ideas of others.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="accHeader">
              Darius Owens
            </Accordion.Header>
            <Accordion.Body>
              Hello my name is Darius Owens. Software Developer and Im navy
              veteran with a diverse work background ranging from
              meteorology/oceanography , car and insurance sales, USPS, and a
              security supervisor. With a well rounded skill set I decided to
              learn Software development because I feel with my skill of being
              motivated, great team player, and a passion to help people. I know
              I will have a great career In tech.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}
export default About;
