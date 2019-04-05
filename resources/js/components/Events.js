import React, { Component } from 'react'

export default class Events extends Component {
  constructor(){
    super()
    this.state= {
      events: []
    }
  }
  async componentDidMount(){
    await axios({
          method:'get',
          url : '/api/events',
          config: { headers: {'Content-Type': 'application/json' }}
        })
    this.setState({
      events: result
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
