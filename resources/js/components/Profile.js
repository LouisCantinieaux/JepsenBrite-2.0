import React, { Component } from 'react'
import {Provider, Context} from '../store/store'
import Axios from 'axios'
import {Link} from 'react-router-dom'

export default class Profile extends Component {
  constructor(context){
    super(context)
    this.state={
      image : '',
      name: ''
    }
  }

  async getProfile(){
    if (!this.state.name){
      let response;
      try {
        let request = Axios({
          method:'get',
          url : '/api/me',
          headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token}
        });
        response = await request;
        this.setState({
          name: response.data.name,
          image : response.data.image ,
        })
      } catch(e) {
        console.log(e);
        console.log(e.response);
      }
    }
  }
  componentDidMount(){
    this.getProfile()
    
    
    
  }
  componentDidUpdate(){
    this.getProfile()
  }

  render() {
    return (
      <div className="container">
        <img src={(this.state.image ? "data:image;base64,"+this.state.image :"https://i2.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png")} className="rounded-circle border border-light shadow ofc text-center mt-3" width="150px" height="150px" />
        <h1>{this.state.name}</h1>
        <Link to="/edit-profile">
          <i className="fa fa-edit"></i>
        </Link>
      </div>
    )
  }
}

Profile.contextType = Context