import 'flatpickr/dist/themes/material_blue.css'
import "easymde/dist/easymde.min.css";

import { French } from "flatpickr/dist/l10n/fr.js"

import React, { Component } from 'react'
import {Form, Container} from 'react-bootstrap'
import Flatpickr from 'react-flatpickr'
import {Provider, Context} from '../store/store'
import Axios from "axios"

import SimpleMDE from 'react-simplemde-editor';

export default class EditEvent extends Component {
  constructor(context){
    super(context)
    this.onChangeTitle=this.onChangeTitle.bind(this)
    this.handleOnChange=this.handleOnChange.bind(this)
    this.handleChangeDescription= this.handleChangeDescription.bind(this)
    this.onChangeLocation= this.onChangeLocation.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
    this.state={
      title: '',
      description:'',
      begin_time : '',
      end_time : '',
      location : '',
      image : ''
    }
  }
  async componentDidMount(){
    let response = await Axios({
      method:'get',
      url : '/api/events/'+this.props.match.params.id,
      headers: {'Content-Type': 'application/json' }
    })
    this.setState({
      title: response.data.title,
      description: response.data.description,
      begin_time : response.data.begin_time,
      end_time : response.data.end_time,
      location : response.data.location,
      image : response.data.image
    })
  }
  async onSubmit(data){
    data.preventDefault();
    function dateFormatting(date){
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      var hours = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();

      return year + '-' +(month < 10 ? "0" + month : month) + '-' + (day < 10 ? "0" + day : day) + ' ' + (hours < 10 ? "0" + hours : hours) +':'+ (min < 10 ? "0" + min : min)+ ':' + (sec < 10 ? "0" + sec : sec)
    }
    const obj={
      "title" : this.state.title,
      "description" : this.state.description,
      "begin_time" : (this.state.start ? dateFormatting(this.state.start) : this.state.begin_time),
      "end_time" :(this.state.end? dateFormatting(this.state.end): this.state.end_time),
      "location" : this.state.location,
      "image" : (this.state.imagePreviewUrl ? this.state.imagePreviewUrl.substr(this.state.imagePreviewUrl.indexOf(',') + 1) : this.state.image)
    }
    let response;
    
    try {
      let request = Axios({
        method:'patch',
        url : '/api/events/'+this.props.match.params.id,
        config: { },
        headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token},
        data : obj
      });
      response = await request;
    } catch(e) {
      console.log(e);
      console.log(e.response);
    }
    this.props.history.push('/event/'+this.props.match.params.id)
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
        console.log(this.state.end)
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

  onChangeLocation(e){
    this.setState({
      location : e.target.value
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
          <Form.Label>Where's your event gonna happen ?</Form.Label>
          <Form.Control className="mb-3" type="text" placeholder="Location" defaultValue={this.state.location} onChange={this.onChangeLocation} />
          <Form.Label >Tell people more about it</Form.Label>
          <SimpleMDE
            value={this.state.description}
            onChange={this.handleChangeDescription}
          >Description</SimpleMDE>
          <Form.Label htmlFor="eventStart" >When's the start of your event ?</Form.Label>
          <Flatpickr
          name={"start"}
          data-enable-time
          value={this.state.begin_time}
          defaultValue={this.state.begin_time}
          options={{
            altInput: true,
            time_24hr: true,
            locale: French,
            altFormat: "D j F Y H:i"
          }}
          onChange={e => this.handleOnChange(e, "start")}
          className="mb-3"
          />
          <Form.Label>When's the end of your event ?</Form.Label>

          <Flatpickr
          name={"end"}
          data-enable-time
          value={this.state.end_time}
          defaultValue={this.state.end_time}
          options={{
            altInput: true,
            minDate:this.state.start,
            locale: French,
            altFormat: "D j F Y H:i",
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

EditEvent.contextType = Context