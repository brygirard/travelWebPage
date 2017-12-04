import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './LoginPage.css';

const LoginForm = () => (
  <div className="form_container">
    <Form>
      <Form.Field>
        <label>Email</label>
        <input placeholder='example@example.com' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input placeholder='Password' />
      </Form.Field>
       <Button type='submit' href="/">Log In</Button>
      <p className="register">Need an account? Register</p>
    </Form>
  </div>
)



class LoginPage extends Component {
  render() {
    return (
      <LoginForm/>
    );
  }
}

export default LoginPage;
