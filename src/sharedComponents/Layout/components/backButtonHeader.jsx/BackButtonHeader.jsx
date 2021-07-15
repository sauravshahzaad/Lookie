// NPM Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

// Global Component Imports
import SvgIconImage from '../../sharedComponents/SvgIconImage/SvgIconImage'

// Assets Imports
import BackArrow from './backArrow.svg'

export default class BackButtonHeader extends PureComponent {
  render() {
    const { onClick } = this.props
    return (
      <Box
        pt={1.25}
        pl={1.87}
        pb={1.25}
      >
        {onClick &&
          <SvgIconImage
            src={BackArrow}
            alt='Back Icon'
            fontSize='large'
            onClick={() => {
              onClick()
            }}
          />}
        {!onClick && <Box height='35px' />}
      </Box>
    )
  }
}

BackButtonHeader.propTypes = {
  onClick: PropTypes.func
}

BackButtonHeader.propTypes = {
  // backLink: () => undefined
}
