import React, { Component } from 'react'
import Navigationbar from './Navigationbar'
import Routes from './Routes'
import Footer from './Footer'

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigationbar/>
        <main>

        <Routes/>
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}
