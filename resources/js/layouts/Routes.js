import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import Content from './establishments/Content';

import Home from '../components/Home'
import Login from '../components/Login'
import Register from '../components/Register'
import Create from '../components/Create'
import EventPage from '../components/EventPage'
import Events from '../components/Events'



const Routes = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/event" component={EventPage} />
      <Route exact path="/events" component={Events} />
    </Switch>)

export default Routes