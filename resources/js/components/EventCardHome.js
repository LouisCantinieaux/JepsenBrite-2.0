import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventCardHome extends Component {
  render() {

    const { events } = this.props
    return (
      <React.Fragment>
        <h2 className="text-center mt-4">Future events</h2>
        <hr />
        <div className="row mx-auto">

          {events.map(events => (
            <div className="col-md-4 mt-2" key={events.title}>
              <div className="card text-center">
                <Link to="/event">
                  <img className="card-img-top" src="https://picsum.photos/1900/1080?image=235" alt={events.title} />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{events.title}</h5>
                  <hr />
                  <p>
                    <a className="btn btn-primary" data-toggle="collapse" href={"#collapse" + events.id} role="button" aria-expanded="false" aria-controls={"collapse" + events.id}>
                      <i className="fa fa-map"></i> Maps
                </a>
                  </p>
                  <div className="collapse" id={"collapse" + events.id}>
                    <div className="card card-body">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" width="100%" height="200" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
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
