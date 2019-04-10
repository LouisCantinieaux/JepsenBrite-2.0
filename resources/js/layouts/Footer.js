import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <section id="footer" className="bg-dark bottom">
        <div className="container">
          <h2 className="team text-center mb-3">Team</h2>
          <div className="row mx-auto w-100 flex-nowrap justify-content-around">
            <div className="">
              <h5>Samuel Degueldre</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Github</a></li>
              </ul>
            </div>
            <div className="">
              <h5>Alexandre Bove</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Github</a></li>
              </ul>
            </div>
            <div className="">
              <h5>Jonathan Blavier</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Github</a></li>
              </ul>
            </div>
            <div className="">
              <h5>Joé michel</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Github</a></li>
              </ul>
            </div>            
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
              <ul className="list-unstyled list-inline social text-center">
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
                <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
              </ul>
            </div>
            <hr />
          </div>	
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
              <p><u><a href="/">JepsenBrite</a></u></p>
              <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">becode Liège</a></p>
            </div>
            <hr />
          </div>	
        </div>
	    </section>
    )
  }
}
