import React from 'react'
import Header from '../Header/Header'
import Button from '@material-ui/core/Button'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice'
import SaveIcon from '@material-ui/icons/Save'
import './style.css'

function Voice () {
  return (
    <div>
      <Header />
      <div className='voice-control'>
        <Button
          variant='contained'
          color='secondary'
          startIcon={<KeyboardVoiceIcon />}
        >
        Talk
        </Button>
        <Button
          variant='contained'
          color='primary'
          startIcon={<SaveIcon />}
        >
        Save
        </Button>
      </div>
    </div>
  )
}

export default Voice
