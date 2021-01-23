import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Signup from './components/Auth/Signup'
import Login from './components/Auth/Login'
import News from './pages/News/News'
import Notes from './pages/Notes/Notes'

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
        </Switch>
      </Router>
    </div>
  )
}

export default App
