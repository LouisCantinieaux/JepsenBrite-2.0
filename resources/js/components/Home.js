import React, { Component } from 'react'
import CarouselAction from './CarouselAction'
import EventCardHome from './EventCardHome'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      EventsCarousel:[{
        "id": 1,
        "title" : "test event",
        "description" : "test description",
        "begin_time" : "2019-03-28 07:29:54",
        "end_time" : "2019-03-28 07:29:54",
        "location" : "Rue de Mulhouse, 36 - 4000, Liège",
        "image" : "azeaze"
      },{
        "id": 2,
        "title" : "test event 2",
        "description" : "test description",
        "begin_time" : "2019-03-28 07:29:54",
        "end_time" : "2019-03-28 07:29:54",
        "location" : "Rue de Mulhouse, 36 - 4000, Liège",
        "image" : "azeaze"
      }],
      EventsCards:[{
        "id": 1,
        "title" : "test event",
        "description" : "test description",
        "begin_time" : "2019-03-28 07:29:54",
        "end_time" : "2019-03-28 07:29:54",
        "location" : "Rue de Mulhouse, 36 - 4000, Liège",
        "image" : "azeaze"
      },{
        "id": 2,
        "title" : "test event 2",
        "description" : "test description",
        "begin_time" : "2019-03-28 07:29:54",
        "end_time" : "2019-03-28 07:29:54",
        "location" : "Rue de Mulhouse, 36 - 4000, Liège",
        "image" : "azeaze"
      },{
        "id": 3,
        "title" : "test event 3",
        "description" : "test description",
        "begin_time" : "2019-03-28 07:29:54",
        "end_time" : "2019-03-28 07:29:54",
        "location" : "Rue de Mulhouse, 36 - 4000, Liège",
        "image" : "azeaze"
      }],
      Users:[]
    }
    
  }

  render() {
    return (
      <div>
        <CarouselAction events={this.state.EventsCarousel}/>
        <EventCardHome events={this.state.EventsCards} />
      </div>
    )
  }
}
