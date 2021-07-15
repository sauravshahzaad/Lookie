// Node Modules Import
import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'
import CustomizedCircelBorder from './CustomizedCircelBorder'
import theme from '../../configurations/materialUI/theme'
import MaterialTypography from '../materialComponents/typography/MaterialTypography'

export default class StepHeader extends PureComponent {
  render () {
    const { stepName, rightHeader, rightSubHeader, value } = this.props
    console.log(parseInt(value))
    return (
      <Box bgcolor={theme.palette.common.white} p={1}>
        <Grid container item xs={12}>
          {/* <Grid container item xs={12}>
                    <Box height={45} p={1}><KeyboardBackspaceIcon /></Box>
                </Grid> */}
          <Grid item xs={3}>
            <Box p={1}>
              <Box position='relative'>
                <Box
                  position='absolute'
                  top={20}
                  left={10}
                >
                  <MaterialTypography variant='hp2' color='secondary'>
                    {stepName}
                  </MaterialTypography>
                </Box>
                <CustomizedCircelBorder value={value} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={9}>
            <Box p={1} textAlign='right'>
              <Box>
                <MaterialTypography variant='body2' color='secondary' style={{ fontWeight: '300' }}>
                  {rightHeader}
                </MaterialTypography>
              </Box>

              <Box color='extraColors.steel.main'>
                <MaterialTypography variant='overline' color='inherit'>
                  {rightSubHeader}
                </MaterialTypography>
              </Box>
            </Box>

          </Grid>
        </Grid>
      </Box>
    )
  }
}

StepHeader.propTypes = {
  // prop: PropTypes
  stepName: PropTypes.string.isRequired,
  rightHeader: PropTypes.string.isRequired,
  rightSubHeader: PropTypes.string.isRequired
  // value: PropTypes.number.isRequired
}

// Layout.defaultProps = {
//     backgroundColor: theme.palette.extraColors.white.main,
//     disableGutters: false,
//     xHeader: ''
//   }
