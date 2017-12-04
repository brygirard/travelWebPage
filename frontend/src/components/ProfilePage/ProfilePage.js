import React, { Component } from 'react';
import { Grid, Button, List, Header } from 'semantic-ui-react'
import { Card, Icon, Image, Label } from 'semantic-ui-react'

import './ProfilePage.css';

const GridLayout = () => (
  <Grid columns={2} verticalAlign='middle' stretched container stackable >
    <Grid.Row>
      <Grid.Column width={5}>
       <ProfileCard/>
        </Grid.Column>
    <Grid.Column width={11} >
        <Grid columns={1} textAlign='center' verticalAlign='middle'  >
            <Grid.Row>
                    <Header size='huge'>Genres</Header>

            </Grid.Row>
            <Grid.Row>
                <Button color="yellow">Instrumental</Button>
                <Button color="red">Rock</Button>
                <Button color="green">EDM</Button>
                <Button color="blue">Classical</Button>
            </Grid.Row>
             <Grid.Row>
                    <Header size='huge'>Your songs</Header>
            </Grid.Row>
             <Grid.Row  >
                 <ThreadList/>
            </Grid.Row>
            
        </Grid>
    </Grid.Column>

    </Grid.Row>
        
  </Grid>
)

const ThreadList = () => (
  <List divided verticalAlign='middle' size='huge' style={{height:"450px"}} >
    
    <List.Item>
      <Image avatar src='http://www.unpopularlyrics.com/wp-content/uploads/2014/05/phoria-display.jpg' />
      <List.Content>
        <List.Header as='a'>Phoria: Undone</List.Header>
      </List.Content>
        
      <List.Content floated='right' style={{paddingTop:'0.25em'}}>
            <Label >
                <Icon name='arrow up' /> 45
            </Label>
      </List.Content>
        
    </List.Item>
    
    <List.Item>
      <Image avatar src='https://upload.wikimedia.org/wikipedia/en/9/9b/Muse_-_Madness.jpg' />
      <List.Content>
        <List.Header as='a'>Muse: Madness</List.Header>
      </List.Content>
        
      <List.Content floated='right' style={{paddingTop:'0.25em'}}>
            <Label >
                <Icon name='arrow up' /> 34
            </Label>
      </List.Content>
        
    </List.Item>
        
    <List.Item>
      <Image avatar src='https://images.genius.com/84f22a1198c3f2bc7ee2d783a9960b9d.500x500x1.jpg' />
      <List.Content>
        <List.Header as='a'>Twenty One Pilots: Heathens</List.Header>
      </List.Content>
        
      <List.Content floated='right' style={{paddingTop:'0.25em'}}>
            <Label >
                <Icon name='arrow up' /> 33
            </Label>
      </List.Content>
    </List.Item>
        
  </List>
)

const ProfileCard = () => (
  <Card centered style={{height:'500px', textAlign:'center'}}>
    <Image src='https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg' />
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2017
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='log out' />
        Logout
      </a>
    </Card.Content>
  </Card>
)

class ProfilePage extends Component {
  render() {
    return (
        <GridLayout/>
    );
  }
}

export default ProfilePage;
