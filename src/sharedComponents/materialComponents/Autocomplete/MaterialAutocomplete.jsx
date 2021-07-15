import React, { PureComponent } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { withStyles, TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import MaterialTypography from '../typography/MaterialTypography'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const styles = theme => ({
  root: {
    paddingTop: '0.5rem',
    '& .MuiFormLabel-root.Mui-focused': {
      color: theme.palette.secondary.main
    },
    '& .MuiFormLabel-root.Mui-error': {
      color: theme.palette.error.main
    },
    '& .MuiFormLabel-root.Mui-error.Mui-focused': {
      color: theme.palette.error.main
    },
    '& .MuiFilledInput-adornedEnd': {
      top: '0px',
      paddingRight: '0'
    },
    '& .MuiAutocomplete-inputRoot': {
      border: `1px solid ${theme.palette.extraColors.inputBorder.main}`,
      backgroundColor: theme.palette.extraColors.textInputBackGroundColor.main
    },
    '& .MuiInputBase-input': {
      paddingBottom: '0px'
    },
    '& .MuiFilledInput-underline:before': {
      border: '0',
      borderBottomColor: 'none'
    },
    '& .MuiFilledInput-underline.Mui-focused:before': {
      borderBottom: `2px solid ${theme.palette.secondary.main}`
    },
    '& .MuiFilledInput-underline.Mui-error:after': {
      transform: 'scaleX(1)',
      borderBottom: `2px solid ${theme.palette.error.main}`
    },
    '& .MuiFilledInput-root': {
      border: `1px solid ${theme.palette.extraColors.inputBorder.main}`,
      background: theme.palette.extraColors.inputBackground.main
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: '0',
      marginTop: '17.2px !important',
      '& .MuiTypography-colorTextSecondary': {
        color: theme.palette.extraColors.charcoal.main
      }
    },
    '& .Mui-disabled': {
      color: '#B8BBBD'
    }

  }
})

class MaterialAutocomplete extends PureComponent {
  // componentDidUpdate () {
  //   const { error, errorText, name } = this.props
  //   if (name === 'personal.occupation') console.log(error, errorText, name, 'errrrrr')
  // }

  render () {
    const { options, error, disabled, errorText, helperText, label, defaultValue, ...restProps } = this.props

    return (
      <>
        {disabled
          ? <Autocomplete
              {...restProps}
              clearOnBlur
              openOnFocus
              defaultValue
              popupIcon={<ArrowDropDownIcon style={{ display: 'none' }} />}
              options={options}
              disabled
              getOptionLabel={(option) => option.label || ''}
              renderInput={(params) => <TextField {...params} label={label} variant='filled' defaultValue={defaultValue} />}
            />
          : <Autocomplete
              {...restProps}
              clearOnBlur
              openOnFocus
              defaultValue
              options={options}
              style={error ? { borderBottom: '2px solid red' } : {}}
              getOptionLabel={(option) => option.label || ''}
              renderInput={(params) => <TextField {...params} label={label} variant='filled' defaultValue={defaultValue} InputProps={{ ...params.InputProps, disableUnderline: error }} />}
            />}
        {error && errorText && <MaterialTypography color='error' variant='hp2' id='component-error-text' style={{ position: 'relative', left: '6px' }}>{errorText}</MaterialTypography>}
        {!error && helperText && <MaterialTypography color='textSecondary' variant='hp2' id='component-error-text' style={{ position: 'relative', left: '6px' }}>{helperText}</MaterialTypography>}

      </>
    )
  }
}

MaterialAutocomplete.propTypes = {
  label: PropTypes.string.isRequired
}

MaterialAutocomplete.defaultProps = {
  clearOnBlur: true,
  error: true,
  options: []
}

export default withStyles(styles, { withTheme: true })(MaterialAutocomplete)
