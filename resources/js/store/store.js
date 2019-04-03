import React, {Component} from 'react'

export const Context = React.createContext();


export const Consumer = Context.Consumer

export default class Provider extends Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn : false,
      token:"",
      name : '',
      login: (tokenKey) =>{this.setState({ 
            loggedIn: true,
            token: tokenKey ,
            name:'alex'
          })
          window.localStorage.setItem("token" , JSON.stringify(tokenKey))
          window.localStorage.setItem("loggedIn", JSON.stringify(true))
          window.localStorage.setItem('name', JSON.stringify('alex'))
          console.log(window.localStorage.getItem('token'))
        },
      logout : () =>{this.setState({
            loggedIn : false,
            token: '',
            name:''
          })
          window.localStorage.clear();
          window.localStorage.setItem("loggedIn", JSON.stringify(false));
        }
    }
  }
  componentDidMount(){
    console.log(
      "loggedIn : "+window.localStorage.getItem('loggedIn')
    )
    this.setState({
      token : JSON.parse(window.localStorage.getItem('token')),
      loggedIn : JSON.parse(window.localStorage.getItem('loggedIn')),
      name : JSON.parse(window.localStorage.getItem('name'))
    })
    console.log(this.state)
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
