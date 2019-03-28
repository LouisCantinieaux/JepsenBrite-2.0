import React, { Component } from 'react'
import CarouselAction from './CarouselAction'
import EventCardHome from './EventCardHome'

export default class Home extends Component {
  render() {
    return (
      <div>
        <CarouselAction/>
        <EventCardHome />
      </div>
    )
  }
}
