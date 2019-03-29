import React, { Component } from 'react'
import {Form, Container} from 'react-bootstrap'

export default class Create extends Component {
  render() {
    return (
      <div className="createPage mt-3">
      <h1 className="mb-5">Create your own event</h1>
        <Form>
          <Form.Group className="createForm" controlId="createForm">
            <Form.Label>First, choose an amazing image to represent your event</Form.Label>
            <Form.Control className="fileInput mb-3" type="file" />
            <Form.Label>What's the name of your event ?</Form.Label>
            <Form.Control className="mb-3" type="text" placeholder="Title" />
            <Form.Label>Tell people more about it</Form.Label>
            <Form.Control className="mb-3" as="textarea" rows="3" placeholder="Description" />
            <Form.Label>What's the date of your event ?</Form.Label>
            <Form.Control className="mb-3" type="date" />
          </Form.Group>
        </Form>
      </div>
    )
  }
}
