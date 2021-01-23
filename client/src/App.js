import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Signup from './components/Auth/Signup/Signup'
import Login from './components/Auth/Login/Login'
import News from './pages/News/News'
import Notes from './pages/Notes/Notes'
import Dashboard from './components/Voice/Voice'

function App () {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/news' component={News} />
          <Route exact path='/notes' component={Notes} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
