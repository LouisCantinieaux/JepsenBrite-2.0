import React, { Component } from 'react'
import { Link } from 'react-router-dom'


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
    let events = this.state.events;
    return (
      <React.Fragment>
        <h1 className="text-center mt-3">All events</h1>
        <hr/>
        <div className="cards row mx-auto pb-4">

            {events.map(events => (
              <div className="col-md-3 mt-2" key={events.title}>
                <div className="card text-center mt-3">
                  <Link to={"/event/"+events.id}>
                    <img className="card-img-top ofc" src={"data:image;base64,"+events.image} alt={events.title} />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{events.title}</h5>
                    <hr />
                    <p>{events.location} - <b>From</b> {events.begin_time} <b>To</b> {events.end_time}</p>
                    <p>
                      <a className="mapsBtn btn btn-primary" data-toggle="collapse" href={"#collapse" + events.id} role="button" aria-expanded="false" aria-controls={"collapse" + events.id}>
                        <i className="fa fa-map"></i> Show on map
                      </a>
                    </p>
                    <div className="collapse" id={"collapse" + events.id}>
                      <div className="card card-body">
                        <iframe src={"test"}></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                ))}
          </div>
        </React.Fragment>
    )
  }
}
