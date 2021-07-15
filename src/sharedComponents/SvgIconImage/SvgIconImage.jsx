import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class SvgIconImage extends PureComponent {
  render () {
    const { src, alt, fontSize, onClick, w, h, ...otherProps } = this.props
    const width = fontSize === 'small' ? '16px' : (fontSize === 'large' ? '24px' : w)
    const height = fontSize === 'small' ? '16px' : (fontSize === 'large' ? '24px' : h)
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        onClick={onClick}
        {...otherProps}
      />
    )
  }
}

SvgIconImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOf(['small', 'large', 'custom'])
}

SvgIconImage.defaultProps = {
  fontSize: 'small'
}
