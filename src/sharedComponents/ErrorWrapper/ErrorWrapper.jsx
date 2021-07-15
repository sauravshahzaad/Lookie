// NPM Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Layout from '../../sharedComponents/Layout/Layout'
import { Box, Button } from '@material-ui/core'

// Assets Imports
// import exclaimationImage from './assets/exclaimation.svg'

// Config Imports
import MaterialTypography from '../../sharedComponents/materialComponents/typography/MaterialTypography'

export default class ErrorWrapper extends PureComponent {
  render() {
    const { title, paragraph, icon, primaryButton, secondaryButton, handleRedirection, subTitle, caption, captionButton, handleLogout, isLogout, greetText } = this.props
    return (
      <Layout
        headerPresent
      >
        <Box
          flexGrow={1}
          px={2}
          pt={2}
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Box>
            <Box pt={10} justifyContent='center' display='flex'>
              <img src={icon} />
            </Box>
            <Box pt={2} textAlign='center' mr={4.1} ml={4.1}>
              <MaterialTypography variant='h5' gutterBottom>{title}</MaterialTypography>
              <MaterialTypography variant='overline' component='div'>{subTitle}</MaterialTypography>
              {greetText && <Box mt={2}><MaterialTypography color='textSecondary' variant='hp1' component='div'>{greetText}</MaterialTypography></Box>}
              <MaterialTypography color='textSecondary' variant='hp1'>{paragraph}</MaterialTypography>
            </Box>
          </Box>
        </Box>
        {caption &&
          <Box textAlign='center' mx={2.25} mt={20}>
            <MaterialTypography variant='caption1' color='inherit' style={{ color: 'typography.light' }} component='div'>
              {caption}&nbsp;
              <Box component='span'>
                <MaterialTypography
                  variant='caption1'
                  color='secondary'
                  component='span'
                >
                  {captionButton.text}
                </MaterialTypography>
              </Box>

            </MaterialTypography>
          </Box>}
        <Box
          position='sticky'
          bottom='0'
          pb={4}
          p={2}
          bgcolor='background.default'
          direction='row' display='flex'
        >
          {primaryButton && primaryButton.text &&
            <Box m={0.5} width='100%'>
              <Button
                onClick={() => {
                  if (isLogout) {
                    handleLogout()
                  }
                  primaryButton.onClick()
                  handleRedirection()
                }}
                fullWidth variant='contained'
                color='primary'
                size='large'
              >{primaryButton.text}
              </Button>
            </Box>}
          {secondaryButton && secondaryButton.text &&
            <Box m={0.5} width='100%'>
              <Button
                onClick={() => secondaryButton.onClick()}
                fullWidth
                variant='outlined'
                color='primary'
                size='large'
              >{secondaryButton.text}
              </Button>
            </Box>}
        </Box>
      </Layout>
    )
  }
}

ErrorWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  }),
  icon: PropTypes.elementType.isRequired
}

ErrorWrapper.defaultProps = {
  paragraph: '',
  primaryButton: {
    text: '',
    onClick: () => undefined
  },
  secondaryButton: {
    text: '',
    onClick: () => undefined
  }
}
