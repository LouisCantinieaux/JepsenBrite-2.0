import React, { Component } from 'react'
import {Form, Container} from 'react-bootstrap'

export default class Create extends Component {
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>
        </Form>
      </Container>
    )
  }
}
