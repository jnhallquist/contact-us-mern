import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Home = () => (
  <div>
    <Jumbotron>
      <h1>Hello, world!</h1>
      <p>
        This is a sample application featuring a functional Contact Us form and Message History table.
        Created with MERN technologies:
      </p>
      <ul>
        <li>MongoDB</li>
        <li>Express</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </Jumbotron>
  </div>
);

export default Home;
