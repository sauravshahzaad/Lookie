// Node Modules Import
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'

// Component Imports
import LogoHeader from './components/logoHeader/LogoHeader'
import BackButtonHeader from './components/backButtonHeader.jsx/BackButtonHeader'

const HEADER_TYPES = ['Logo', 'BackButton']

export default class Layout extends PureComponent {
  constructor (props) {
    super(props)

    this.renderLogoHeader = this.renderLogoHeader.bind(this)
  }

  renderLogoHeader (headerPresent, stickyHeader, headerType, onClick) {
    let logoHeader = null

    if (headerPresent) {
      logoHeader = <LogoHeader sticky={stickyHeader} onClick={() => window.open('https://www.axisbank.com', '_blank')} />

      if (headerType === HEADER_TYPES[1]) {
        logoHeader = <BackButtonHeader sticky={stickyHeader} onClick={onClick} />
      }
    }

    return logoHeader
  }

  render () {
    const {
      children,
      passiveAreaBackGroundColor,
      activeAreaBackgroundColor,
      raisedActiveArea,
      headerPresent,
      stickyHeader,
      headerType,
      onClick,
      height
    } = this.props
    const boxShadow = (raisedActiveArea && 2) || 0
    return (
      <Box
        bgcolor={passiveAreaBackGroundColor}
        overflow='hidden'
      >
        <Grid
          container
          alignContent='center'
          alignItems='center'
          justify='center'
          spacing={4}
          wrap='wrap'
          direction='row'
        >
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            lg={4}
            xl={4}
          >
            <Box
              height={height}
              bgcolor={activeAreaBackgroundColor}
              boxShadow={boxShadow}
              overflow='auto'
              display='flex'
              flexDirection='column'
            >
              {this.renderLogoHeader(headerPresent, stickyHeader, headerType, onClick)}
              {children}
            </Box>
          </Grid>
        </Grid>
      </Box>
    )
  }
}
Layout.propTypes = {
  passiveBackGroundColor: PropTypes.string,
  activeAreaBackgroundColor: PropTypes.string,
  raisedActiveArea: PropTypes.bool,
  headerPresent: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  headerType: PropTypes.oneOf(HEADER_TYPES),
  onClick: PropTypes.func,
  height: PropTypes.string
}

Layout.defaultProps = {
  passiveAreaBackGroundColor: 'background.default',
  activeAreaBackgroundColor: 'background.default',
  raisedActiveArea: true,
  headerPresent: false,
  stickyHeader: false,
  headerType: HEADER_TYPES[0],
  height: '100vh'
}
