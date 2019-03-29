import axios from 'axios'

export const GetEvents = () => {
  await axios.get('/api/events')
  this.setState({
    isEventLoaded: true,
    Events: result
  })
}

export const GetEvent = (id) => {
  await axios.get('/api/events/'+id)
  this.setState({
    isEventLoaded: true,
    Events: result
  })
}


export const GetUser = (id) => {
  await axios.get('/api/users/'+id)
  this.setState({
    isUserLoaded: true,
    Users: result
  })
}

export const GetUsers = () => {
  await axios.get('/api/users/')
  this.setState({
    isUserLoaded: true,
    Users: result
  })
}
