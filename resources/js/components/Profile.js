import React, { Component } from 'react'
import {Provider, Context} from '../store/store'
import Axios from 'axios'

export default class Profile extends Component {
  constructor(context){
    super(context)
    this.state={
      image : '',
      name: ''
    }
  }
  async componentDidMount(){
    let response;
    try {
      let request = Axios({
        method:'post',
        url : '/api/me',
        headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token}
      });
      response = await request;
      this.setState({
        name: response.data.name,
        image : "https://i2.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png",
      })
    } catch(e) {
      console.log(e);
      console.log(e.response);
    }
    
    
    
  }
  componentDidUpdate(){
    this.context
  }

  render() {
    return (
      <div className="container">
        <img src={this.state.image} className="rounded-circle border border-light shadow ofc text-center mt-3" width="150px" height="150px" />
        <h1>{this.state.name}</h1>
      </div>
    )
  }
}

Profile.contextType = Context