import React, { PureComponent } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    margin: theme.spacing(2, 0),
    marginLeft: 'auto',
    width: 'fit-content',
    '& .MuiToggleButton-root': {
      // height: '35px',
      color: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      fontSize: '0.75rem',
      padding: 8
    },
    '& .MuiToggleButton-root.Mui-selected': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.extraColors.white.main
    }
  }
})

class MaterialToggle extends PureComponent {
  render() {
    const { children, toggleButtonValue1, toggleButtonLabel1, toggleButtonValue2, toggleButtonLabel2, disabled, ...restProps } = this.props
    return (
      <ToggleButtonGroup {...restProps}>
        <ToggleButton disabled={disabled} value={toggleButtonValue1}> {toggleButtonLabel1 || toggleButtonValue1}</ToggleButton>
        <ToggleButton disabled={disabled} value={toggleButtonValue2}>{toggleButtonLabel2 || toggleButtonValue2}</ToggleButton>
      </ToggleButtonGroup>
    )
  }
}
MaterialToggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  toggleButtonValue1: PropTypes.string.isRequired,
  toggleButtonValue2: PropTypes.string.isRequired,
  exclusive: PropTypes.bool
}
MaterialToggle.defaultProps = {
  exclusive: true,
  value: ''
}

export default withStyles(styles, { withTheme: true })(MaterialToggle)
