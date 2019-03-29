import React, { Component } from 'react'
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Navigationbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Link className="navbar-brand" to="/">JepsenBrite</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
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
          <Nav>
            <Link className="nav-link" to="/create">Create an article</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
