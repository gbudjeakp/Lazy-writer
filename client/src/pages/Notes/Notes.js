import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Truncate from 'react-truncate'
import Modal, { closeStyle } from 'simple-react-modal'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    marginTop: '10px',
    paddingTop: '10px',
    marginLeft: '20px'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
})

function Notes ({ note }) {
  const [show, setShow] = useState(null)

  function open () {
    setShow(true)
  }

  function unopen () {
    setShow(false)
  }

  function Ellipsis () {
    return (
      !show ? <span>... <Button variant='contained' color='primary' onClick={open}>Read more</Button></span> : <span>... <Button variant='contained' color='primary' onClick={unopen}>Read Less</Button></span>
    )
  }

  const classes = useStyles()
  return (
    <div>
      <Card className={classes.root} variant='outlined'>
        <CardContent>
          <Typography variant='h5' component='h2'>
          Note Title
          </Typography>
          <Typography className={classes.pos} color='textSecondary'>
          Note Date
          </Typography>
          <Truncate lines={1} trimWhitespace ellipsis={<Ellipsis />}>
            <Typography component='p'>
              {note}
              <br />
            </Typography>
          </Truncate>
          <Modal
            style={{ zIndex: '999' }}
            closeOnOuterClick='true'
            show={show}
            onClose={unopen}
          >
            {note}
          </Modal>
        </CardContent>
        <CardActions>
          <Button size='small'>Edit</Button>
          <Button size='small'>Delete</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Notes
