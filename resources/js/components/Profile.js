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
    // let request = Axios({
    //   method:'get',
    //   url : '/api/me',
    //   headers: {'Content-Type': 'application/json' }
    // });
    // response = await request;
    console.log(this.context.state.name)
    this.setState({
      image : "https://i2.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png",
    })
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