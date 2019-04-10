import React, {Component} from 'react'
import Axios from 'axios'

export const Context = React.createContext();


export const Consumer = Context.Consumer

export default class Provider extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn : false,
      token:"",
      name : '',
      login: async (tokenKey) =>{
        let request = Axios({
          method:'get',
          url : '/api/me',
          headers: {'Content-Type': 'application/json', 'Authorization' : 'Bearer '+tokenKey}
        });
        let response = await request;
        this.setState({
            loggedIn: true,
            token: tokenKey ,
            id: response.data.id,
            name:response.data.name
          })
          window.sessionStorage.setItem("token" , tokenKey)
          window.sessionStorage.setItem("loggedIn", this.state.loggedIn)
          window.sessionStorage.setItem('name', this.state.name)
          window.sessionStorage.setItem('id', this.state.id)
        },
      logout : () =>{this.setState({
            loggedIn : false,
            token: '',
            name:'',
            id: ''
          })
          window.sessionStorage.clear();
        },
      refresh : async (token)=>{
        let response;
        try {
          response = await Axios({
            method:'post',
            url : '/api/refresh',
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization' : 'Bearer '+token }
          })
          this.setState({
            token: response.data.access_token
          })
          console.log(response.data.access_token)
        } catch(e) {console.log(e.response);}

      }
    }
  }
  componentDidMount(){
    // this.state.refresh(window.sessionStorage.getItem('token'))
    this.setState({
      token : window.sessionStorage.getItem('token'),
      loggedIn : JSON.parse(window.sessionStorage.getItem('loggedIn')),
      name : window.sessionStorage.getItem('name'),
      id: window.sessionStorage.getItem('id')
    })

  }
  componentDidUpdate(){
    this.state
  }

  render(){
    return(
      <Context.Provider value={{
        state : this.state
        }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}
