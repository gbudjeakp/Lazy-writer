import React, { useState } from 'react'
import Header from '../Header/Header'
import { Button, Paper } from '@material-ui/core'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice'
import SaveIcon from '@material-ui/icons/Save'
import MicOffIcon from '@material-ui/icons/MicOff'
import Notes from '../../pages/Notes/Notes'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import './style.css'

function Voice () {
  const { transcript } = useSpeechRecognition()
  const [savedNotes, setSavedNotes] = useState([])

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  function startListening () {
    SpeechRecognition.startListening({ continuous: true })
  }

  function stopListening () {
    SpeechRecognition.abortListening()
  }

  return (
    <div>
      <Header />
      <div className='voice-control'>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<KeyboardVoiceIcon />}
          onClick={startListening}
        >
        Talk
        </Button>

        <Button
          variant='contained'
          color='secondary'
          startIcon={<MicOffIcon />}
          onClick={stopListening}
        >
        Micoff
        </Button>

        <Button
          variant='contained'
          color='primary'
          startIcon={<SaveIcon />}
          // onClick={handleSave}
        >
        Save
        </Button>
      </div>
      <Paper elevation={3} className='note-container'>
        <p className='note'>
          {transcript}
        </p>
      </Paper>

      {savedNotes.map((savedNote, index) => (
        <Notes key={index} savedNote={savedNote} setSavedNotes={setSavedNotes} />
      ))}
    </div>
  )
}

export default Voice
