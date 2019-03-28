import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EventCardHome extends Component {
  render() {
    return (
      <div className="container-card">
      <div className="row">

        
          <div className="col-md-4 mt-5 ml-3">
            <div className="card text-center">
            <Link to="/event">
              <img className="card-img-top" src="https://ds1.static.rtbf.be/image/media/object/default/16x9/1248x702/1/e/5/1e5bfc34bbdb4bd522525e5d65bfe5fc.jpg" alt="Card image cap" />
            </Link>
              <div className="card-body">
                <h5 className="card-title">Title</h5>

                <hr/>
                <p>
                  <button className="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <i className="fa fa-map"></i> Maps
                  </button>
                </p>
                <div className="collapse" id="collapseExample">
                  <div className="card card-body">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11880.492291371422!2d12.4922309!3d41.8902102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1524815927977" width="100%" height="200" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        

      </div>
      </div>
    )
  }
}
