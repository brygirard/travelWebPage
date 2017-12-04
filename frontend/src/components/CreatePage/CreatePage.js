import React, { Component } from 'react';
import { Button, Checkbox, Form, Grid} from 'semantic-ui-react'
import './CreatePage.css';

const CreateForm = () => (
 <div className="form_container">
  <Grid columns={2} stretched container stackable >
    <Grid.Column width={5}>
       <Form>
           <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name and Last Name...' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='User Name...' />
            </Form.Field>
            <Form.Field>
              <label>User Name</label>
              <input placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <label>Email Adress</label>
              <input placeholder='Password' />
            </Form.Field>
      </Form>
    </Grid.Column>
    <Grid.Column width={5}>
       <Form>
           <Form.Field>
              <label>Password</label>
              <input placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <label>Origin Airpot</label>
              <input placeholder='Password' />
            </Form.Field>
            <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' />
            </Form.Field>
      </Form>
      <Button className="submit" type='submit' href="/">Submit</Button>
    </Grid.Column>
  </Grid>
      
  </div>
)



class CreatePage extends Component {
  render() {
    return (
      <CreateForm/>
    );
  }
}

export default CreatePage;