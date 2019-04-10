import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventCardHome extends Component {

  render() {

    const { events } = this.props
    return (
      <React.Fragment>
        <div className="futurEvents pt-4 pb-3">
          <h2 className="text-center"><i className="fa fa-bookmark mr-5"></i>Future events<i className="fa fa-bookmark ml-5"></i></h2>
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
                  <p className="location"><i className="fa fa-map-marker"></i> {events.location}</p> 
                  <p className="date"><b>From</b> {events.begin_time} <b>To</b> {events.end_time}</p>
                  <p>
                    <a className="mapsBtn btn btn-primary" data-toggle="collapse" href={"#collapse" + events.id} role="button" aria-expanded="false" aria-controls={"collapse" + events.id}>
                      <i className="fa fa-map"></i> Show on map
                </a>
                  </p>
                  <div className="collapse" id={"collapse" + events.id}>
                    <div className="card card-body">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.709461360282!2d5.584393415925285!3d50.63251388211017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f0ab95698caf%3A0xe21d0fe0a5856527!2sRue+de+Mulhouse%2C+4020+Li%C3%A8ge!5e0!3m2!1sfr!2sbe!4v1554793465934!5m2!1sfr!2sbe" width="100%" height="300" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              ))}
          <Link to="/events" className="viewMore mx-auto mt-5 text-center">View more events</Link>
        </div>

      </React.Fragment>
                    )
                  }
                }
