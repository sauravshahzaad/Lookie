import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Box, Modal, Backdrop } from '@material-ui/core'

const styles = theme => ({
  root: {
  }

})

class CustomModal extends Component {
  render () {
    const { children, ...restProps } = this.props
    return (
      <Modal
        closeAfterTransition
        disableAutoFocus
        disableEnforceFocus
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10 }}
        {...restProps}
        BackdropComponent={Backdrop}
      >
        <Box
          bgcolor='white'
          width='95%'
          borderRadius={5}
          padding={1}
        >
          {children}
        </Box>
      </Modal>

    )
  }
}

CustomModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onBackdropClick: PropTypes.func.isRequired

}

CustomModal.defaultProps = {
  onClose: () => undefined,
  onBackdropClick: () => undefined
}

export default withStyles(styles, { withTheme: true })(CustomModal)
