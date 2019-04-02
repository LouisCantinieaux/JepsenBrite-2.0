import React, { Component } from 'react'

export default class Events extends Component {
  constructor(){
    super()
    this.state= {
      events: [{
        "title" : "test event",
        "description" : "test description",
        "begin_time" : "2019-01-01 07:29:54",
        "end_time" : "2019-01-02 07:29:54",
        "location" : "Rue de Mulhouse, 36 - 4000, Liège",
        "image" : "azeaze"
        },{
          "title" : "test event 2",
          "description" : "test description",
          "begin_time" : "2019-01-01 07:29:54",
          "end_time" : "2019-01-02 07:29:54",
          "location" : "Rue de Mulhouse, 36 - 4000, Liège",
          "image" : "azeaze"
          }]
    }
  }
  // async componentDidMount(){
  //   await axios({
  //         method:'get',
  //         url : '/api/events',
  //         config: { headers: {'Content-Type': 'application/json' }}
  //       })
  //   this.setState({
  //     events: result
  //   })
  // }
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
