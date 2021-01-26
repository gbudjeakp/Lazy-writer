import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import { Button, Paper } from '@material-ui/core'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice'
import SaveIcon from '@material-ui/icons/Save'
import Notes from '../../pages/Notes/Notes'
import './style.css'

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function Voice () {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState('')
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      setNote(transcript)
      mic.onerror = event => {
      }
    }
  }

  const handleSaveNote = () => {
    setSavedNotes([...savedNotes, note])
    setNote('')
  }

  return (
    <div>
      <Header />
      <div className='note-container'>

        <div classname='voice-control'>
          <Button
            variant='contained'
            color='secondary'
            startIcon={<KeyboardVoiceIcon />}
            onClick={() => setIsListening(prevState => !prevState)}
          >
        Talk
          </Button>

          <Button
            variant='contained'
            color='primary'
            startIcon={<SaveIcon />}
            onClick={handleSaveNote} disabled={!note}
          >
        Save
          </Button>
        </div>

        {isListening ? <span>🎙️</span> : <span>🛑</span>}
        <p className='note'>
          {note}
        </p>
      </div>
      <div className='savednotescontainer'>
        <h1 className='insidesavednotescontainer'>Saved Notes</h1>
        {savedNotes.map((note, index) => {
          return (
            <Notes note={note} key={index} />
          )
        })}
      </div>

    </div>
  )
}

export default Voice
