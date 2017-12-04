import React, { Component } from 'react';
import { Search, Card, Dropdown, Container} from 'semantic-ui-react'
import src from './default.jpg';
import './BrowsePage.css';



const Filter = () => (

    <Dropdown text='Sort Destinations' icon='filter' floating labeled button className='icon'>
    <Dropdown.Menu>
      <Dropdown.Header icon='tags' content='Sort Destinations' />
      <Dropdown.Item>Cost</Dropdown.Item>
      <Dropdown.Item>Distance</Dropdown.Item>
      <Dropdown.Item>Name</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
)


class BrowsePage extends Component {

  
  render() {
    return (
 <Container>
 <div className="App">
   <div className="searchBar">
      <Search className="seachField" />
      <Filter className="genreFilter"/>
   </div>
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

	</div>
</Container>

    );
  }
}

export default BrowsePage;