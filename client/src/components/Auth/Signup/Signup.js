import React from 'react'
import { FormControl, InputLabel, FormHelperText, Input, Paper, TextField, Button } from '@material-ui/core'

function Signup () {
  return (
    <div>
      <Paper style={{ width: '50%', marginTop: '50px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <form noValidate style={{ width: '100%', marginTop: '70px'}}>
          <TextField
            autoComplete='uname'
            name='username'
            variant='outlined'
            required
            fullWidth
            id='firstName'
            label='Username'
            autoFocus
          />

          <TextField
            variant='outlined'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />

          <TextField
            variant='outlined'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
          >
            Sign Up
          </Button>
        </form>
      </Paper>
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

export default Signup
