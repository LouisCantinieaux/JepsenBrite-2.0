import React, { Component } from 'react'

export default class Events extends Component {
  constructor(){
    super()
    this.state= {
      events: []
    }
  }
  async componentDidMount(){
    let result = await axios({
          method:'get',
          url : '/api/events',
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
