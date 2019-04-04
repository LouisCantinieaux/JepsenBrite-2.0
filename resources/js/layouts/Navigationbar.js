import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Provider, Context} from '../store/store'
import logo from '../layouts/logo.png'

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
        <img src={logo} height="50px" width="50px"/>
        <Link className="navbar-brand" to="/">JepsenBrite</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/events">Events</Link>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
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
                    <NavDropdown title={"Welcome, "+context.state.name} >
                      <Link to ="/user" className="dropdown-item">Your profile</Link>
                      <Link to ="/events" className="dropdown-item">Your events</Link>
                    </NavDropdown>
                    <Link className="nav-link" to="/create">Create an article</Link>
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