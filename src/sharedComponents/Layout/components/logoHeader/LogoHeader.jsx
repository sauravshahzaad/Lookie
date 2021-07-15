// Node Modules Import
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

// Assets Import
import AxisLogo from './logo.svg'

export default class LogoHeader extends PureComponent {
  render () {
    const { onClick, sticky } = this.props
    const position = (sticky && 'sticky') || 'relative'
    return (
      <Box width='100%' onClick={onClick} position={position} top='0' mb={2}>
        <img src={AxisLogo} style={{ width: '100%' }} alt='Axis Logo' />
      </Box>
    )
  }
}

LogoHeader.propTypes = {
  onClick: PropTypes.func,
  sticky: PropTypes.bool
}

LogoHeader.defaultProps = {
  onClick: () => undefined,
  sticky: false
}
