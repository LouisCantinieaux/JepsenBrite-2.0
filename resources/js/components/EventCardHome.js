import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventCardHome extends Component {

  render() {

    const { events } = this.props
    return (
      <React.Fragment>
        <div className="futurEvents pt-4 pb-3">
          <h2 className="text-center">Future events</h2>
        </div>
        <div className="cards row mx-auto pb-4">

          {events.map(events => (
            <div className="col-md-4 mt-2" key={events.title}>
              <div className="card text-center">
                <Link to={"/event/"+events.id}>
                  <img className="card-img-top ofc" src={"data:image;base64,"+events.image} alt={events.title} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{events.title}</h5>
                  <hr />
                  <p>
                    <a className="mapsBtn btn btn-primary" data-toggle="collapse" href={"#collapse" + events.id} role="button" aria-expanded="false" aria-controls={"collapse" + events.id}>
                      <i className="fa fa-map"></i> {events.location}
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
