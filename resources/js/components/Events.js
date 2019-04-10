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
    let result = await axios({
          method:'get',
          url : '/api/events?from='+encodeURIComponent((new Date(Date.now())).toISOString()),
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
              <div className="col-md-3 mt-2" key={events.id}>
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
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center mt-5">
              <li className="page-item"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
        </React.Fragment>
    )
  }
}
