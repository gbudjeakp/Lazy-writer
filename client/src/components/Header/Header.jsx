import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AuthOptions from '../Auth/AuthOptions/AuthOptions'

function Header () {
  return (
    <div>
      <AppBar position='static' style={{ backgroundColor: '#E1D329' }}>
        <Toolbar>
          <Typography variant='h6'>
            <Link to='/'>Lazy Writer</Link>
          </Typography>

          <div style={{ display: 'flex', justifyContent: 'space-around' }}>

            <Link to='/notes'>Notes</Link>

            <Link to='/news'>News</Link>

            <Link to='/dashboard'>Create Note</Link>

          </div>
          <AuthOptions />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
