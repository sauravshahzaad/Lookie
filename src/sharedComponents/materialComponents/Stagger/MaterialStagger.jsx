import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { withStyles, Drawer, Box, Container, Button } from '@material-ui/core'

const styles = theme => ({
  root: {
    zIndex: '1231',
    backdropFilter: 'blur(2px)'
  },
  paper: {
    background: '#FFF',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    margin: '0 auto',
    maxWidth: '630px'
  }
})
class MaterialStagger extends PureComponent {
  render() {
    const { children, staggerHeader, staggerFooterBtn, handleClose, open, stickToBottom, buttonBorderRadiusZero, btnTxt, buttonPadding, ...restProps } = this.props
    return (
      <Drawer open={open} {...restProps}>
        {staggerHeader}
        <Box
          flexGrow={1}
          flexDirection='column'
          justifyContent='flex-end'
          display='flex'
          overflow='scroll'
          bgcolor='background.white'
          maxHeight={stickToBottom ? 'auto' : (staggerHeader ? '65vh' : 'auto')}
          // minHeight='40vh'
          minHeight='min-content'
        >
          {open &&
            <Container xs={12} style={{ maxHeight: (staggerHeader ? '65vh' : '80vh'), bgcolor: 'background.white', height: (stickToBottom ? 'initial' : (staggerHeader ? '65vh' : '80vh')) }}>
              {children}
            </Container>}
        </Box>
        {staggerFooterBtn ||
          <Box p={buttonPadding ? 2 : 0}>
            <Button
              color='primary'
              variant='contained'
              fullWidth
              // borderRadius={buttonBorderRadiusZero ? 0 : 'inherit'}
              style={{ borderRadius: (buttonBorderRadiusZero ? 0 : 8) }}
              onClick={() => { handleClose() }}
            >
              {btnTxt}
            </Button>
          </Box>}
      </Drawer>
    )
  }
}

MaterialStagger.propTypes = {
  open: PropTypes.bool.isRequired,
  anchor: PropTypes.oneOf(['bottom', 'left', 'top', 'right']),
  variant: PropTypes.oneOf(['persistent', 'permanent', 'temporary']),
  elevation: PropTypes.number,
  ModalProps: PropTypes.shape({
    BackdropProps: PropTypes.shape({
      invisible: PropTypes.bool
    }),
    keepMounted: PropTypes.bool,
    onBackdropClick: PropTypes.func
  }),
  SlideProps: PropTypes.shape({
    direction: PropTypes.oneOf(['down', 'up', 'left', 'right']),
    timeout: PropTypes.number
  }),
  transitionDuration: PropTypes.number,
  stickToBottom: PropTypes.bool
}

MaterialStagger.defaultProps = {
  open: false,
  anchor: 'bottom',
  variant: 'temporary',
  elevation: 16,
  ModalProps: {
    BackdropProps: {
      invisible: false
    },
    keepMounted: true,
    onBackdropClick: () => undefined
  },
  SlideProps: {
    direction: 'up',
    timeout: 500
  },
  transitionDuration: 500,
  stickToBottom: false
}
export default withStyles(styles, { withTheme: true })(MaterialStagger)
