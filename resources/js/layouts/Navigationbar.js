import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Provider, Context} from '../store/store'
import logo from '../assets/Jepsen-brite.svg'

class Navigationbar extends Component {
  constructor(context){
    super(context)
  }
  componentDidUpdate(){
    this.context
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="navBar sticky-top">
        <Link className="navbar-brand" to="/"><img src={logo} height="30px" /></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link ml-5" to="/events">All events</Link>
          </Nav>
          <Context.Consumer>
            {(context) => (
              (() => {
                switch (context.state.loggedIn) {
                  case false : return <Nav>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </Nav>
                  case null : return <Nav>
                  <Link className="nav-link" to="/login">Login</Link>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </Nav>
                  case true: return <Nav>
                    <Link className="nav-link" to ="/profile"><i className="fa fa-user-circle mr-2"></i>Welcome, {context.state.name}</Link>
                    <Link className="nav-link" to="/create">Create an event</Link>
                    <Link className="nav-link" to="/" onClick={context.state.logout} >
                      logout
                    </Link>
                  </Nav>
                }
              })()
              )}
          </Context.Consumer>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

Navigationbar.contextType = Context

export default Navigationbar