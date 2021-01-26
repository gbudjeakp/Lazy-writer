import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './pages/Home/Home'
import Signup from './components/Auth/Signup/Signup'
import Login from './components/Auth/Login/Login'
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver'
import { Button } from '@material-ui/core'
import Dashboard from './components/Voice/Voice'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

function App () {
  const commands = [
    {
      command: ['Go to *', 'Open *'],
      callback: (redirectPage) => setRedirectUrl(redirectPage)
    }
  ]
  const { transcript } = useSpeechRecognition({ commands })

  const [redirectUrl, setRedirectUrl] = useState()

  const pages = ['home', 'sign up', 'login', 'news', 'notes', 'dashboard']
  const urls = {
    home: '/',
    'sign up': '/signup',
    login: '/login',
    news: '/news',
    notes: '/notes',
    dashboard: '/dashboard'
  }

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  let redirect = ''

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>
    }
  }

  return (
    <div>
      <Router>
        <div style={{ backgroundColor: '#E1D329' }}>
          <p> Transcript: {transcript}</p>
          <Button
            variant='contained'
            color='primary'
            size='small'
            startIcon={<RecordVoiceOverIcon />}
            onClick={SpeechRecognition.startListening}
          >
        Voice Navigation
          </Button>
          {redirect}
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
