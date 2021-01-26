import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AuthOptions from '../Auth/AuthOptions/AuthOptions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ backgroundColor: '#E1D329', textDecoration: 'none' }}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link to='/'>Lazy Writer</Link>
          </Typography>
          <AuthOptions />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
