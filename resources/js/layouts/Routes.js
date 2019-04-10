import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Content from './establishments/Content';

import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Create from '../components/Create'
import EventPage from '../components/EventPage'
import Events from '../components/Events'
import Profile from '../components/Profile'
import EditProfile from '../components/EditProfile'
import EditEvent from '../components/EditEvent'
<<<<<<< HEAD
import AllEvents from '../components/AllEvents'
=======
import Error from '../components/Error'
>>>>>>> e518af268a49cf8ad303b6f46d012d6516503dc7

const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/event/:id" component={EventPage} />
      <Route exact path="/events/future" component={Events} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/edit/event/:id" component={EditEvent} />
<<<<<<< HEAD
      <Route exact path="/events" component={AllEvents} />
=======
      <Route exact path="/error" component={Error} />
>>>>>>> e518af268a49cf8ad303b6f46d012d6516503dc7
    </Switch>)

export default Routes