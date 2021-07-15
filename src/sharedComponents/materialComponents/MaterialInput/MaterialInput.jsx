// NPM Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Box, TextField, Typography, withStyles } from '@material-ui/core'
// Components Import
import MaterialTypography from '../typography/MaterialTypography'


// const useStyles = makeStyles(theme => {

const styles = theme => ({
  root: {
    // border: '1px solid #D1E8FF',
    borderRadiusTopLeft: '4px',
    borderRadiusTopRight: '4px',
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.secondary.main
    },
    "& .MuiFilledInput-adornedEnd": {
      paddingRight: 0
    },
    "& .MuiInputBase-root": {
      paddingRight: 0,
      backgroundColor: "white"
    },
    "& .MuiIconButton-root": {
      backgroundColor: theme.palette.extraColors.textInputBackGroundColor.main,
      borderRadius: 0,
      height: 56
    },
    "& .MuiFormHelperText-root": {
      backgroundColor: 'transparent'
    },
    "& .MuiFormHelperText-marginDense": {
      marginTop: 0,
      fontSize: 12
    },
    "& .MuiInputBase-input": {
      paddingBottom: 15
    },
    error: {
      "&.MuiFormHelperText-root.Mui-error": {
        color: theme.palette.common.white,
      },
    },
  }
})

class MaterialInput extends PureComponent {

  getLabelText = (label) => {
    return (

      <MaterialTypography variant='body2' color='inherit'>
        {label}
      </MaterialTypography>
    )
  }

  getHelperText = (helperText) => {
    let helperTextChildren = helperText
    if (helperText === ' ') {
      helperTextChildren = <Typography variant='caption' dangerouslySetInnerHTML={{ __html: '&#8203;' }} />
    }
    return helperTextChildren
  }

  render() {
    const {
      id,
      name,
      label,
      value,
      onChange,
      onBlur,
      helperText,
      error,
      autoComplete,
      color,
      variant,
      fullWidth,
      margin,
      ...restTextFieldProps
    } = this.props
    return (
      <TextField
        id={id}
        label={this.getLabelText(label)}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        helperText={this.getHelperText(helperText)}
        error={error}
        autoComplete={autoComplete}
        color={color}
        variant={variant}
        fullWidth={fullWidth}
        margin={margin}
        {...restTextFieldProps}
      />
    )
  }
}
MaterialInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  autoComplete: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(['dense', 'none', 'normal']),
}
MaterialInput.defaultProps = {
  value: '',
  onChange: () => { },
  onBlur: () => { },
  helperText: ' ',
  error: false,
  autoComplete: 'off',
  color: 'primary',
  variant: 'filled',
  fullWidth: true,
  margin: 'dense'
}
export default withStyles(styles, { withTheme: true })(MaterialInput)




