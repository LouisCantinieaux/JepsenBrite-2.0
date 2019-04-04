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
          method:'post',
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
          window.localStorage.setItem("token" , JSON.stringify(tokenKey))
          window.localStorage.setItem("loggedIn", JSON.stringify(true))
          window.localStorage.setItem('name', JSON.stringify('alex'))
        },
      logout : () =>{this.setState({
            loggedIn : false,
            token: '',
            name:''
          })
          window.localStorage.clear();
        },
      refresh : async ()=>{ 
        let response = await Axios({
          method:'post',
          url : '/api/refresh',
          headers: {'Content-Type': 'application/json', 'Accept' : 'application/json' }
        })
        response = await request;
        this.setState({
          token: response.data.token
        })
    }
    }
  }
  componentDidMount(){
    this.state.refresh
    this.setState({
      loggedIn : JSON.parse(window.localStorage.getItem('loggedIn')),
      name : JSON.parse(window.localStorage.getItem('name'))
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
