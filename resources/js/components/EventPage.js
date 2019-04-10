import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Axios from 'axios'
import ReactMarkdown from 'react-markdown'
import {Provider, Context} from '../store/store'
import { request } from 'http';

export default class EventPage extends Component {
  constructor(context){
    super(context)
    this.participate=this.participate.bind(this)
    this.unparticipate=this.unparticipate.bind(this)
    this.state={
      title: '',
      description:'',
      creator:'',
      begin_time : '',
      end_time : '',
      location : '',
      image : '',
      participants: [],
      participation:false
    }
  }
  componentDidUpdate(){
  }
  async componentDidMount(){
    const userID = window.sessionStorage.getItem('id');
    console.log('userID', userID);

    let response = await Axios({
      method:'get',
      url : '/api/events/'+this.props.match.params.id,
      headers: {'Content-Type': 'application/json' }
    })
    console.log(response.data.participants);
    this.setState({
      title: response.data.title,
      description: response.data.description,
      begin_time : response.data.begin_time,
      end_time : response.data.end_time,
      location : response.data.location,
      image : response.data.image,
      creator: response.data.creator[0].name,
      participants: response.data.participants,
      participation: response.data.participants.reduce((v, acc) => userID == v.id || acc, false)
    })
  }

  parseDBDateTime(datetime){
    console.log('datetime:', datetime);
    if(datetime == '')
      return new Date(Date.now());
    let [date, time] = datetime.split(' ');
    let [Y,M,D] = date.split('-');
    time = time.slice(0, -3);
    let [h,m,s] = time.split(':');
    return new Date(Date.UTC(Y,M-1,D,h,m,s));
  }

  async participate(){
    // let date_reminder = new Date(this.state.begin_time.substring(0,19))
    const dateReminder = (begin) => {
      let beginDateTime = this.parseDBDateTime(begin);
      let reminder_date = new Date(beginDateTime - (1000*60*60*24));
      return reminder_date.toISOString();
    }
    const obj = {
      reminder_date : dateReminder(this.state.begin_time)
    }
    let axiosConfig = {
      method:'post',
      url : '/api/events/'+this.props.match.params.id+'/register',

      headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token },
      data:obj
    };
    let request = Axios(axiosConfig);
    let response = await request;
    let res = await Axios({
      method:'get',
      url : '/api/events/'+this.props.match.params.id,
      headers: {'Content-Type': 'application/json' }
    })
    this.setState({
      participation:true,
      participants: res.data.participants
    })
  }
  async unparticipate(){
    let axiosConfig = {
      method:'delete',
      url : '/api/events/'+this.props.match.params.id+'/register',

      headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token },
    };
    let request = Axios(axiosConfig);
    let response = await request;
    let res = await Axios({
      method:'get',
      url : '/api/events/'+this.props.match.params.id,
      headers: {'Content-Type': 'application/json' }
    })
    this.setState({
      participation:false,
      participants: res.data.participants
    })
  }
  render() {
    return (
      <div className="eventPage mt-3 mb-5">
        <div className="coverImage">
          <div className="box6">
              <img src={"data:image;base64,"+this.state.image} alt={this.state.title}/>
              <div className="box-content">
                  <h2 className="title">{this.state.title}</h2>
                  <span className="post">{this.state.creator}</span>
                  <ul className="icon">
                    <li><p className="date">{this.parseDBDateTime(this.state.begin_time).toLocaleString()}</p></li>
                    <li><p className="hours">{this.parseDBDateTime(this.state.end_time).toLocaleString()}</p></li>
                  </ul>
              </div>
            </div>
        </div>
        <div className="eventContent mt-2 ml-3">
          <p className="eventTitle">{this.state.title}</p><span className="eventAuthor" > By {this.state.creator} </span>
          <h2 className="descriptionTitle mt-5">Event description:</h2>
          <ReactMarkdown source={this.state.description}/>

          {((this.state.participation === false) ? <a href="javascript:void(0)" onClick={this.participate}><Button className="participateBtn">I want to participate</Button></a> : <a href="javascript:void(0)" onClick={this.unparticipate}><Button className="btn-danger">Finally I won't come</Button></a>)}

          <h3 className="mt-3">Participants ({this.state.participants.length}):</h3>
          <div className="participants">
            {this.state.participants.map(participants => (
              <div className="participant text-center"  key={participants.name}>
                <img className="ofc rotate" src={(participants.avatar ?"data:image;base64,"+participants.avatar :"https://i2.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png")} />
                <p>{participants.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

EventPage.contextType = Context
