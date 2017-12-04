import React, { Component } from 'react';
import { Card, Container} from 'semantic-ui-react'

import './RecPage.css';
import src from './default.jpg';


class RecPage extends Component {
  render() {
    return (
    	<Container>
    <Card.Group className="cards" itemsPerRow={4}>
    <Card color='red' image={src} />
    <Card color='orange' image={src} />
    <Card color='yellow' image={src} />
    <Card color='olive' image={src} />
    <Card color='green' image={src} />
    <Card color='teal' image={src} />
    <Card color='blue' image={src} />
    <Card color='violet' image={src} />
    <Card color='purple' image={src} />
    <Card color='pink' image={src} />
    <Card color='brown' image={src} />
    <Card color='grey' image={src} />
  </Card.Group>
  </Container>

    );
  }
}

export default RecPage;
