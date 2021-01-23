import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function AuthOptions () {
  return (
    <div>
      <Button>Signup</Button>
      <Button>Login</Button>
    </div>
  )
}

export default AuthOptions
