// NPM Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, withTheme } from '@material-ui/core'

class MaterialTypography extends Component {
  constructor (props) {
    super(props)

    this.renderTypography = this.renderTypography.bind(this)
    this.getWrapperStyles = this.getWrapperStyles.bind(this)
  }

  getWrapperStyles () {
    const { theme, variant, style, align } = this.props
    const { typography } = theme
    const themeVariantStyle = typography[variant] || {}
    const variantStyle = { ...themeVariantStyle, textAlign: align, ...style }

    return variantStyle
  }

  renderTypography () {
    const { children, variant, component, style, color, theme, ...typographyProps } = this.props

    const { typography, props } = theme
    const { MuiTypography } = props
    const { variantMapping } = MuiTypography
    const { customVariants } = typography

    const isCustomVariant = customVariants.includes(variant)

    if (isCustomVariant) {
      const wrapperStyles = this.getWrapperStyles()
      const mappedVariant = variantMapping[variant]
      return (
        <Box
          component={(component && (component === 'p' && 'div')) || component || ((mappedVariant === 'span' && 'span') || 'div')}
          {...wrapperStyles}
        >
          <Typography component={component} {...typographyProps} color={color || 'textPrimary'} variant='inherit' style={style}>
            {children}
          </Typography>
        </Box>
      )
    }

    return (
      <Typography component={component} variant={variant} {...typographyProps} color={color || 'textPrimary'} style={style}>
        {children}
      </Typography>
    )
  }

  render () {
    return this.renderTypography()
  }
}

MaterialTypography.propTypes = {
  theme: PropTypes.object.isRequired
}

export default withTheme(MaterialTypography)
