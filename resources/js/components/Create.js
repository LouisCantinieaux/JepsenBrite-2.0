import 'flatpickr/dist/themes/material_blue.css'
import "simplemde/dist/simplemde.min.css";

import React, { Component } from 'react'
import {Form, Container} from 'react-bootstrap'
import Flatpickr from 'react-flatpickr'

import SimpleMDE from 'react-simplemde-editor';


export default class Create extends Component {
  constructor() {
    super();

    this.state = {
      description:"",
      start: "",
      end: ""
    };
  }

  onSubmit(e){
    data.preventDefault();

    const obj={
      "title" : "test event 5",
      "description" : "test description",
      "begin_time" : "2019-01-01 07:29:54",
      "end_time" : "2019-01-02 07:29:54",
      "location" : "Rue de Mulhouse, 36 - 4000, Liège",
      "image" : "azeaze"
    }
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

  handleChangeDescription(e){
    this.setState({
      description : e.target.value
    });
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
          <Form.Label htmlFor="image">First, choose an amazing image to represent your event</Form.Label>
          <Form.Control className="fileInput mb-3" type="file" name="image"/>
          <Form.Label htmlFor="title">What's the name of your event ?</Form.Label>
          <Form.Control className="mb-3" type="text" placeholder="Title"/>
          <Form.Label htmlFor="description" >Tell people more about it</Form.Label>
          <SimpleMDE
            defaultValue={this.state.description}
            onChange={this.handleChangeDescription}
          >Description</SimpleMDE>
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
