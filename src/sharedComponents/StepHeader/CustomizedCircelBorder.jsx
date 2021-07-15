import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyle = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700]
  },
  top: {
    color: '#ED1164',
    animationDuration: '550ms',
    position: 'absolute',
    left: 0,
    top: 0
  },
  circle: {
    strokeLinecap: 'round'
  }
}))

function ProgressBorderRadius (props) {
  const { value } = props
  const classes = useStyle()
  console.log(props)

  return (
    <div className={classes.root}>
      <CircularProgress
        variant='determinate'
        className={classes.bottom}
        size={56}
        value={100}
        thickness={2}
        color='primary'
      />
      <CircularProgress
        variant='determinate'
        color='primary'
        className={classes.top}
        classes={{
          circle: classes.circle
        }}
        size={56}
        thickness={2}
        value={value}
      />
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
})

export default function CustomizedCircelBorder (props) {
  const { value } = props
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ProgressBorderRadius value={parseInt(value)} />
    </div>
  )
}
