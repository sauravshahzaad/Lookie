import React, { PureComponent } from 'react'
import { Slide, Dialog, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const styles = theme => ({
  root: {
    backdropFilter: 'blur(2px)'
  },
  paper: {
    width: 'calc(100% - 32px)',
    margin: '32px 16px',
    borderRadius: '8px'
  }
})
class MaterialPopup extends PureComponent {
  render() {
    const { children, ...restProps } = this.props
    return (
      <Dialog
        {...restProps}
        maxWidth='xs'
        transitionDuration={{
          exit: 500,
          enter: 500
        }}
        TransitionComponent={Transition}
      >{children}
      </Dialog>
    )
  }
}

MaterialPopup.propTypes = {
  open: PropTypes.bool,
  fullWidth: PropTypes.bool
}
MaterialPopup.defaultProps = {
  open: false,
  fullWidth: true
}

export default withStyles(styles, { withTheme: true })(MaterialPopup)
