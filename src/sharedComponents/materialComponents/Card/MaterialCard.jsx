import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Box, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {}
})

class MaterialCard extends PureComponent {
  render () {
    const { children, backgroundColor, borderRadius, boxShadow, ...restProps } = this.props
    return (
      <Box
        bgcolor={backgroundColor}
        borderRadius={borderRadius}
        boxShadow={boxShadow}
        {...restProps}
      >
        {children}
      </Box>
    )
  }
}

MaterialCard.propTypes = {
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.number,
  boxShadow: PropTypes.string
}

MaterialCard.defaultProps = {
  backgroundColor: 'background.default',
  borderRadius: 8,
  boxShadow: '2px 0px 2px 0px rgba(202,202,202,0.1), 0 0 8px 0px rgba(0,0,0,0.05);'
}

export default withStyles(styles, { withTheme: true })(MaterialCard)
