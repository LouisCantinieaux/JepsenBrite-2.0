import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Error extends Component {
  
  render() {



    return (
      <div className="errorPage">
        <p className="oops">Oops...</p>
        <p className="error">Error 404</p>
        <p className="errorText mt-4">Page not found</p>
        <img className="john mx-auto" src="https://media1.tenor.com/images/a828888852e708d9afaaad06c7f9513f/tenor.gif?itemid=10251428" />
      </div>
    )
  }
}