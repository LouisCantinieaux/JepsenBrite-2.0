import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Provider, Context} from '../store/store'

class Navigationbar extends Component {
  constructor(context){
    super(context)
  }
  componentDidUpdate(){
    this.context
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="sticky-top">
        <Link className="navbar-brand" to="/">JepsenBrite</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/events">Events</Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
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
                  case false || null : return <Nav>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </Nav>
                  case true: return <Nav>
                    <div className="nav-link">Welcome, {context.state.name}</div>
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