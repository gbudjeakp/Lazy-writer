import React from 'react'
import { Paper } from '@material-ui/core'
function Notes ({ note }) {
  console.log(note)
  return (
    <div>
      <Paper elevation={3} className='note-container'>
        <p className='note'>{note}</p>
      </Paper>
    </div>
  )
}

export default Notes
