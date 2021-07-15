// Node Modules Import
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'

export default class MaterialContainer extends PureComponent {
  render () {
    const { children, ...containerProps } = this.props
    return (
      <Container {...containerProps}>
        {children}
      </Container>
    )
  }
}

MaterialContainer.propTypes = {
  classes: PropTypes.objectOf(PropTypes.shape),
  component: PropTypes.string,
  disableGutters: PropTypes.bool,
  fixed: PropTypes.bool,
  maxWidth: PropTypes.string
}

MaterialContainer.defaultProps = {
  classes: {},
  component: 'div',
  disableGutters: false,
  fixed: false,
  maxWidth: 'lg'
}
