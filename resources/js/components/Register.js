import React, { Component } from 'react'
import {Container, Form, Button} from 'react-bootstrap'


export default class Register extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicUser">
            <Form.Label>User</Form.Label>
            <Form.Control type="text" placeholder="User" required/>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"  required/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Password confirmation</Form.Label>
            <Form.Control type="password" placeholder="PasswordConfirmation" required/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>


      </Container>
    )
  }
}
