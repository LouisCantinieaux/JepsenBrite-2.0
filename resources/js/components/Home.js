import React, { Component } from 'react'
import CarouselAction from './CarouselAction'
import EventCardHome from './EventCardHome'
import Axios from 'axios';

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      EventsCarousel:[],
      EventsCards:[]
    }

  }
  async componentDidMount(){
    let response = await Axios({
      method:'get',
      url : '/api/events?from='+encodeURIComponent((new Date(Date.now())).toISOString()),
      headers: {'Content-Type': 'application/json' }
    })

    function shuffle(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {


        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    this.setState({
      EventsCards:response.data.slice(0,6),
      EventsCarousel:(shuffle(response.data)).slice(0,3)
    })
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
