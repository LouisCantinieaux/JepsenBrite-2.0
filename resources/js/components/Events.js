import React, { Component } from 'react'


export default class Events extends Component {
  constructor(){
    super()
    this.state= {
      events: []
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
    let result = await axios({
          method:'get',
          url : '/api/events?from='+dateNow(new Date),
          config: { headers: {'Content-Type': 'application/json' }}
        })
    this.setState({
      events: result.data
    })
  }
  render() {
    return (
      <div>
        {this.state.events.map(events => (
          <div>{events.title}</div>
        ))}
      </div>
    )
  }
}
