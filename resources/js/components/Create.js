import 'flatpickr/dist/themes/material_blue.css'

import React, { Component } from 'react'
import {Form, Container} from 'react-bootstrap'
import Flatpickr from 'react-flatpickr'

export default class Create extends Component {
  constructor() {
    super();

    this.state = {
      start: "",
      end: ""
    };
  }


handleOnChange(e, from) {
    const state = {};
    switch (from) {
      case "start":
        if (this.state.start) {
          if (this.state.end >= e[0]) {
            state[from] = e[0];
          }
        } else {
          state[from] = e[0];
        }
        break;
      case "end":
        if (this.state.end) {
          if (this.state.start <= e[0]) {
            state[from] = e[0];
          }
        } else {
          state[from] = e[0];
        }
        break;
      default:
    }
    this.setState(state);
  }
// toMysqlFormat(date){
//   return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
// }
  render() {
    
  return (
    <div className="createPage mt-3">
    <h1 className="mb-5">Create your own event</h1>
      <Form>
        <Form.Group className="createForm" controlId="createForm">
          <Form.Label for="image">First, choose an amazing image to represent your event</Form.Label>
          <Form.Control className="fileInput mb-3" type="file" name="image"/>
          <Form.Label htmlFor="title">What's the name of your event ?</Form.Label>
          <Form.Control className="mb-3" type="text" placeholder="Title"/>
          <Form.Label htmlFor="description" >Tell people more about it</Form.Label>
          <Form.Control className="mb-3" as="textarea" rows="3" placeholder="Description" />
          <Form.Label htmlFor="eventStart" >When's the start of your event ?</Form.Label>
          <Flatpickr
          name={"start"}
          data-enable-time
          value={this.state.start}
          options={{
            altInput: true
          }}
          onChange={e => this.handleOnChange(e, "start")}
          className="mb-3"
          />
          <Form.Label htmlFor="eventEnd">When's the end of your event ?</Form.Label>

          <Flatpickr
          name={"end"}
          data-enable-time
          value={this.state.end}
          options={{
            altInput: true
          }}
          onChange={e => this.handleOnChange(e, "end")}
          className="mb-3"
          />
          <Form.Control className="btn btn-primary" type="submit" value="Create this event" />
        </Form.Group>
      </Form>
    </div>
    )
  }
}
