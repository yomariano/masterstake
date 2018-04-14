import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/Login'

export default () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />
    </Switch>
  </Router>
)
