import React, { Component } from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import Axios from 'axios'

import {Provider, Context} from '../store/store'
class Login extends Component { 
  constructor(props, context){
    super(props, context)
    this.onChangeName=this.onChangeName.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state ={
      email : '',
      password : ''
    }
  }

  onChangeName(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password : e.target.value
    });
  }

  async onSubmit(data){    
    data.preventDefault();

    const obj={
      email : this.state.email,
      password : this.state.password
    }
    let response;
    try {
        let request = Axios({
          method:'post',
          url : '/api/login',
          config: { headers: {'Content-Type': 'application/json' }},
          data : obj
        });
        response = await request;
    } catch(e) {
      console.log(e.response);
    }
    (response) => { console.log(response) }
    this.context.state.login(response.data.access_token)
    // global.token= response.data.access_token
    // global.pseudo= this.state.name
    // console.log(global.token)
    this.props.history.push('/')
  }
  render() {
    return (

      <Container>
        <Form  onSubmit={this.onSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" defaultValue={this.state.email} onChange={this.onChangeName}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" defaultValue={this.state.password} onChange={this.onChangePassword} />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>


      </Container>
    )
  }
}

Login.contextType = Context

export default Login