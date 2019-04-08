import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventCardHome extends Component {

  render() {

    const { events } = this.props
    return (
      <React.Fragment>
        <div className="futurEvents pt-4 pb-3">
          <h2 className="text-center">Future events</h2>
          <hr className="mt-4"/>
        </div>
        <div className="cards row mx-auto pb-4">

          {events.map(events => (
            <div className="col-md-4 mt-2" key={events.title}>
              <div className="card text-center mt-5">
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
          <Link to="/events" className="viewMore mx-auto mt-5">View more events</Link>
        </div>

      </React.Fragment>
                    )
                  }
                }
