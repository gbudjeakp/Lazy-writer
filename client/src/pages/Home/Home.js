import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.css'

function Home () {
  return (
    <div>
      <div className='description'>
        <Typography variant='h2' component='h3'>Lazywriter</Typography>

        <div className='content' gutterBottom>
          <Typography variant='h6' component='body2'>
          Lazywriter is a simple speech to text application that lets you move around the apps pages using only your voice.
          </Typography>
        </div>

        <div className='btnseperator'>
          <Button component={Link} to='/signup' variant='contained' color='primary' style={{ backgroundColor: '#E1D329', marginRight: '10px' }}>Signup</Button>

          <Button component={Link} to='/login' variant='contained' color='primary'>Login</Button>
        </div>

      </div>
      <section>
        <div className='custom-shape-divider-bottom-1611428761'>
          <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
            <path d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' class='shape-fill' />
          </svg>
        </div>
      </section>
    </div>
  )
}

export default Home
