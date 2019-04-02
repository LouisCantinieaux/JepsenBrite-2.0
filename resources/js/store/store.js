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
      login: (token) =>{this.setState({ 
        loggedIn: true,
        token: token ,
        name:'alex'
        })},
      logout : () =>{this.setState({
        loggedIn : false,
        token: '',
        name:''
        })}
    }
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
