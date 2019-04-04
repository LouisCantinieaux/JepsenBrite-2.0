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
    function dateNow(date){
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();

      var hours = date.getHours();
      var min = date.getMinutes();
      var sec = date.getSeconds();

      return year + '-' +(month < 10 ? "0" + month : month) + '-' + (day < 10 ? "0" + day : day) + '%20' + (hours < 10 ? "0" + hours : hours) +'%3'+ (min < 10 ? "0" + min : min)+ '%3' + (sec < 10 ? "0" + sec : sec)
    }
    let response = await Axios({
      method:'get',
      url : '/api/events?from='+dateNow(new Date),
      headers: {'Content-Type': 'application/json' }
    })
    let resCarous=response.data.slice(0,3)
    let resCard = response.data.slice(0,6)

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

    shuffle(resCarous)

    this.setState({
      EventsCarousel:resCarous,
      EventsCards:resCard
    })
    console.log(resCarous)
    console.log(resCard)

  
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
