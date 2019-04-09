import React, { Component } from 'react'
import {Provider, Context} from '../store/store'
import Axios from 'axios'
import {Form, Container} from 'react-bootstrap'

export default class EditProfile extends Component {
  constructor(context){
    super(context)
    this.onChangePseudo=this.onChangePseudo.bind(this)
    this.handleImageChange=this.handleImageChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
    this.state={
      image : '',
      file:'',
      pseudo: ''
    }
  }

  async getProfile(){
    if (!this.state.name){
      let response;
      try {
        let request = Axios({
          method:'get',
          url : '/api/me',
          headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token}
        });
        response = await request;
        this.setState({
          pseudo: response.data.name,
          image : response.data.image ,
        })
      } catch(e) {
        console.log(e);
        console.log(e.response);
      }
    }
  }
  componentDidMount(){
    this.getProfile()
    
    
    
  }

  async onSubmit(data){
    data.preventDefault();

    const obj={
      "name" : this.state.pseudo,
      "avata" : this.state.image.substr(this.state.image.indexOf(',') + 1)
    }
    console.log(obj)
    let response;
    
    try {
      let request = Axios({
        method:'post',
        url : '/api/events',
        config: { },
        headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+this.context.state.token},
        data : obj
      });
      response = await request;
    } catch(e) {
      console.log(e);
      console.log(e.response);
    }
    console.log('ceci est une réponse', response);
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        image: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  onChangePseudo(e){
    this.setState({
      pseudo : e.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.onSubmit}>
          <Form.Group>
          <Form.Label>Avatar :</Form.Label><br/>
            <img src={(this.state.image ? "data:image;base64,"+this.state.image :"https://i2.wp.com/rouelibrenmaine.fr/wp-content/uploads/2018/10/empty-avatar.png")} className="rounded-circle border border-light shadow ofc text-center mt-3" width="150px" height="150px" />
            <div className="preview text-center">
                <div className="browse-button">
                    <i className="fa fa-pencil-alt"></i>
                    <input className="browse-input" type="file" name="image" id="UploadedFile" onChange={(e)=>this.handleImageChange(e)} />
                </div>
                <span className="Error"></span>
            </div>
            <Form.Label>Pseudo :</Form.Label>
            <Form.Control className="mb-3" type="text" placeholder="Pseudo" defaultValue={this.state.pseudo} onChange={this.onChangePseudo} />

            <Form.Control className="btn btn-primary" type="submit" value="Edit your profile" />
          </Form.Group>
        </Form>

      </div>
    )
  }
}

EditProfile.contextType = Context