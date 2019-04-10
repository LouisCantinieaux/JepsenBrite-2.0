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
                <li><a href="https://github.com/sdegueldre"><i className="fa fa-angle-double-right"></i> <i class="fa fa-github-square"></i> Github</a></li>
                <li><a href="https://www.linkedin.com/in/samuel-degueldre-60507842/"><i className="fa fa-angle-double-right"></i> <i class="fa fa-linkedin"></i> Linkedin</a></li>
              </ul>
            </div>
            <div className="">
              <h5>Alexandre Bove</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="https://github.com/bovealexandre"><i className="fa fa-angle-double-right"></i> <i class="fa fa-github-square"></i> Github</a></li>
                <li><a href="https://www.linkedin.com/in/alexandre-bove-177a00178/"><i className="fa fa-angle-double-right"></i> <i class="fa fa-linkedin"></i> Linkedin</a></li>
              </ul>
            </div>
            <div className="">
              <h5>Jonathan Blavier</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="https://github.com/odaeyes"><i className="fa fa-angle-double-right"></i> <i class="fa fa-github-square"></i> Github</a></li>
                <li><a href="https://www.linkedin.com/in/jonathan-blavier-795a00178/"><i className="fa fa-angle-double-right"></i> <i class="fa fa-linkedin"></i> Linkedin</a></li>
              </ul>
            </div>
            <div className="">
              <h5>Joé michel</h5>
              <ul className="list-unstyled quick-links">
                <li><a href="https://github.com/joe-michel"><i className="fa fa-angle-double-right"></i> <i class="fa fa-github-square"></i> Github</a></li>
                <li><a href="https://www.linkedin.com/in/jo%C3%A9-michel-b3713b178/"><i className="fa fa-angle-double-right"></i> <i class="fa fa-linkedin"></i> Linkedin</a></li>
              </ul>
            </div>            
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
