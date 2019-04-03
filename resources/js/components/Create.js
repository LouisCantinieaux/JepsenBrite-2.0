import 'flatpickr/dist/themes/material_blue.css'
import "easymde/dist/easymde.min.css";

import React, { Component } from 'react'
import {Form, Container} from 'react-bootstrap'
import Flatpickr from 'react-flatpickr'
import {Provider, Context} from '../store/store'
import Axios from "axios"

import SimpleMDE from 'react-simplemde-editor';


class Create extends Component {
  constructor(props, context){
    super(props, context)
    this.onChangeTitle=this.onChangeTitle.bind(this)
    this.handleOnChange=this.handleOnChange.bind(this)
    this.handleChangeDescription= this.handleChangeDescription.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
    this.state = {
      title:"",
      description:"",
      begin_time: "",
      end_time: "",
      location : "",
      image:"",
      file: '',
      imagePreviewUrl: '',
      start: "",
      end: ""
    }
  }

  componentDidUpdate(){
    this.state
  }

  async onSubmit(data){
    data.preventDefault();

    const obj={
      "title" : this.state.title,
      "description" : this.state.description,
      "begin_time" : this.state.start,
      "end_time" : this.state.end,
      "location" : "Rue de Mulhouse, 36 - 4000, Liège",
      "image" : this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1)
    }
    let response;
    try {
      let request = Axios({
        method:'post',
        url : '/api/events',
        config: { },
        headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token},
        data : obj
      });
      response = await request;
    } catch(e) {
      console.log(e);
      console.log(e.response);
    }
    console.log('ceci est une réponse', response);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
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
      description : e
    })
  }

  onChangeTitle(e){
    this.setState({
      title : e.target.value
    })
  }
// toMysqlFormat(date){
//   return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
// }
  render() {
    
  return (
    <div className="createPage mt-3">
    <h1 className="mb-5">Create your own event</h1>
      <Form onSubmit={this.onSubmit}>
        <Form.Group className="createForm">
          <Form.Label>First, choose an amazing image to represent your event</Form.Label>
          <div className="preview text-center">
                {this.state.imagePreview}
                  <div className="browse-button">
                      <i className="fa fa-pencil-alt"></i>
                      <input className="browse-input" type="file" name="image" id="UploadedFile" onChange={(e)=>this.handleImageChange(e)} />
                  </div>
                  <span className="Error"></span>
              </div>
          <Form.Label>What's the name of your event ?</Form.Label>
          <Form.Control className="mb-3" type="text" placeholder="Title" defaultValue={this.state.title} onChange={this.onChangeTitle} />
          <Form.Label >Tell people more about it</Form.Label>
          <SimpleMDE
            defaultValue={this.state.description}
            onChange={this.handleChangeDescription}
          >Description</SimpleMDE>
          <Form.Label htmlFor="eventStart" >When's the start of your event ?</Form.Label>
          <Flatpickr
          name={"start"}
          data-enable-time
          value={this.state.start}
          options={{
            altInput: true,
            time_24hr: true,
            minDate: "today"
          }}
          onChange={e => this.handleOnChange(e, "start")}
          className="mb-3"
          />
          <Form.Label>When's the end of your event ?</Form.Label>

          <Flatpickr
          name={"end"}
          data-enable-time
          value={this.state.end}
          options={{
            altInput: true,
            minDate:this.state.start,
            time_24hr: true
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
Create.contextType = Context

export default Create