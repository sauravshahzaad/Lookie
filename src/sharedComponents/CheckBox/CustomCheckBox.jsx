import React, { PureComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Checkbox } from '@material-ui/core'
import CheckBoxIcon from '@material-ui/icons/CheckBox'

const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&$checked': {
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  },
  icon: {
    borderRadius: 3,
    width: 24,
    height: 24,
    backgroundColor: 'rgba(237,17,100,0.1)'

  },
  checkedIcon: {
    borderRadius: 3,
    backgroundColor: '#ED1164',
    '&:before': {
      display: 'block',
      width: 24,
      height: 24,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 15'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""'
    }
  }
})

function StyledCheckbox (props) {
  const classes = useStyles()

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      checkedIcon={<Box component='span' className={classes.icon, classes.checkedIcon} />}
      // checkedIcon={<CheckBoxIcon fontSize='medium' />}
      icon={<Box component='span' className={classes.icon} />}
      inputProps={{ 'aria-label': 'primary checkbox' }}
      {...props}
    />
  )
}

class CustomCheckBox extends PureComponent {
  render () {
    const { setCheckBox } = this.props
    return (
      <Box>
        <StyledCheckbox
          onChange={setCheckBox}
        />
      </Box>
    )
  }
}
export default CustomCheckBox
