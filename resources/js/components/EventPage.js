import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import ReactMarkdown from 'react-markdown'

export default class EventPage extends Component {
  constructor(){
    super()
    this.state={
      title: '',
      description:'',
      begin_time : '',
      end_time : '',
      location : '',
      image : '',
      participants: []
    }
  }
  async componentDidMount(){
    let response = await Axios({
      method:'get',
      url : '/api/events/'+this.props.match.params.id,
      headers: {'Content-Type': 'application/json' }
    })
    this.setState({
      title: response.data.title,
      description: response.data.description,
      begin_time : response.data.begin_time,
      end_time : response.data.end_time,
      location : response.data.location,
      image : response.data.image,
      participants: response.data.participants
    })
  }

  participate(){
    
  }
  render() {
    return (
      <div className="eventPage mt-3">
        <div className="coverImage">
          <div className="box6">
              <img src={"data:image;base64,"+this.state.image} alt={this.state.title}/>
              <div className="box-content">
                  <h2 className="title">{this.state.title}</h2>
                  <span className="post">José Legrand</span>
                  <ul className="icon">
                    <li><p className="date">{this.state.begin_time}</p></li>
                    <li><p className="hours">{this.state.end_time}</p></li>
                  </ul>
              </div>
            </div>
        </div>
        <div className="eventContent mt-2 ml-3">
          <p className="eventTitle">{this.state.title}</p><span className="eventAuthor" > By José Legrand </span>
          <h2 className="descriptionTitle mt-5">Event description:</h2>
          <ReactMarkdown source={this.state.description}/>

          <Button className="participateBtn">I want to participate</Button>

          <h3 className="mt-3">Participants (5):</h3>
          <div className="participants">
            <div className="participant text-center">
              <img className="ofc rotate" src="https://specials-images.forbesimg.com/imageserve/5c76b4b84bbe6f24ad99c370/416x416.jpg?background=000000&cropX1=0&cropX2=4000&cropY1=0&cropY2=4000" />
              <p>Bill</p>
            </div>
            <div className="participant text-center">
              <img className="ofc rotate" src="http://jactiv.ouest-france.fr/sites/default/files/imagecache/article-detail/images/2018/04/11/SI_6185723_1.jpg" />
              <p>Angèle</p>
            </div>
            <div className="participant text-center">
              <img className="ofc rotate" src="https://www.ballecourbe.ca/wp-content/uploads/2015/10/jcv-960x540.png" />
              <p>Jean-Claude</p>
            </div>
            <div className="participant text-center">
              <img className="ofc rotate" src="https://www.nouvelordremondial.cc/wp-content/uploads/2018/07/durif-pas-mort.jpg" />
              <p>Sylvain</p>
            </div>
            <div className="participant text-center">
              <img className="ofc rotate" src="https://basketswag.files.wordpress.com/2016/03/eddy-malou-generator.jpg?w=200" />
              <p>Eddy</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
