import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap'

import Axios from 'axios'

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordConfirmation = this.onChangePasswordConfirmation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: '',
      email: '',
      password: '',
      PasswordConfirmation: '',

    }
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangePasswordConfirmation(e) {
    this.setState({
      passwordConfirmation: e.target.value
    });
  }

  async onSubmit(data) {
    data.preventDefault();

    const obj = {
      name: this.state.name,
      email: this.state.email,
      password: ''
    }
    let response;
    try {
      //console.log(obj)
      let request = Axios({
        method: 'post',
        url: '/api/register',
        config: { headers: { 'Content-Type': 'application/json' } },
        data: obj
      });
      response = await request;
    } catch (e) {
      console.log(e.response);
    }
    (response) => { console.log(response) }

  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicUser">
            <Form.Label>User</Form.Label>
            <Form.Control type="text" placeholder="User" defaultValue={this.state.name} onChange={this.onChangeName} required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" defaultValue={this.state.email} onChange={this.onChangeEmail} required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" defaultValue={this.state.password} onChange={this.onChangePassword} required />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirm">
            <Form.Label>Password confirmation</Form.Label>
            <Form.Control type="password" placeholder="PasswordConfirmation" defaultValue={this.state.PasswordConfirmation} onChange={this.onChangePasswordConfirmation} required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>


      </Container>
    )
  }
}
