import React, { PureComponent } from 'react'
import { Box, Radio, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import checkedRadioSvg from './assets/radio_checked_circle.svg'
import SvgIconImage from '../../SvgIconImage/SvgIconImage'

const styles = theme => ({
  root: {
    // borderRadius: 50,
    // width: '24px',
    // height: '24px',
    // opacity: '0.3',
    // border: 0,
    // backgroundColor: '#979797'
  }
})
class MaterialRadio extends PureComponent {
  render() {
    const { onChange, checked, value, name, ...restProps } = this.props
    // let showIcon = {}
    // if (showTick) {
    //   showIcon = {
    //     icon: <span className={classes.icon} />,
    //     checkedIcon: <span className={classNames(classes.icon, classes.checkedIcon)} />
    //   }
    // }
    return (
      <Radio
        checked={checked}
        onChange={onChange}
        value={value}
        name={name}
        icon={<Box
          borderRadius='50px'
          width='20px'
          height='20px'
          mr='2px'
          opacity='0.3'
          bgcolor='rgb(234,234,234)'
        />}
        checkedIcon={<SvgIconImage src={checkedRadioSvg} fontSize='custom' h='24' w='24' />}
        {...restProps}
      />
    )
  }
}

MaterialRadio.propTypes = {
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}
MaterialRadio.defaultProps = {
}

export default withStyles(styles, { withTheme: true })(MaterialRadio)
