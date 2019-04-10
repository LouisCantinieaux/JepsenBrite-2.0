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
      password : '',
      error:""
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
          headers: {'Content-Type': 'application/json' },
          data : obj
        });
        response = await request;
        console.log('login success', response)
    } catch(e) {
      console.log('login error', e.response);
      this.setState({
        error: 'You have an error in your email or password'
      })
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

      <Container className='my-3'>
        {(this.state.error ? <div className="w-100 bg-danger text-center text-light font-weight-bold" style={{height:"100px", lineHeight:"100px"}}>{this.state.error}</div> : <div></div>)}
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