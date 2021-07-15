// NPM Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Divider, Grid, Typography } from '@material-ui/core'

//
import otpConst from './Otp.pageConstants'
import SvgIconImage from '../../sharedComponents/SvgIconImage/SvgIconImage'
import MaterialTypography from '../materialComponents/typography/MaterialTypography'
import MaterialInput from '../materialComponents/MaterialInput/MaterialInput'
// import { _repeat } from 'utils/lodash'
const _ = require('lodash')
const resendTimer = 30000

export default class Otp extends Component {
  constructor (props) {
    super(props)
    const { inputCount } = this.props
    const inputDataset = []
    for (let index = 0; index < inputCount; index++) {
      this[index] = React.createRef()
      inputDataset.push('')
    }

    this.state = {
      inputCollection: inputDataset,
      otpResendText: '',
      isResendClick: true,
      otpResendCount: 0,
      otpResendLimit: 3,
      timerState: null,
      disableResend: true
    }

    this.onTextChange = this.onTextChange.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.checkDisable = this.checkDisable.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.renderTextBoxes = this.renderTextBoxes.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onPaste = this.onPaste.bind(this)

    this.getMobileText = this.getMobileText.bind(this)
    this.getMaskedMobileNumber = this.getMaskedMobileNumber.bind(this)
  }

  componentDidMount () {
    console.log('mounted with params', this.props)
    const { otpCounter, isVerifyOtp, timeRemaining } = this.props
    const { otpResendLimit } = this.state
    if (otpCounter === otpResendLimit) {
      this.setState({ otpResendText: 'OTP Exhausted' })
    } else {
      const startCounter = isVerifyOtp ? (timeRemaining || 0) : 30
      let counter = startCounter
      if (startCounter !== 0) {
        this.setState({ otpResendText: `OTP has been sent, retry in ${counter--}s`, timerState: counter })
        const timer = setInterval(() => this.setState({ otpResendText: `OTP has been sent, retry in ${counter--}s`, timerState: counter }), 1000)
        setTimeout(() => {
          this.setState({ otpResendText: 'Resend OTP' })
          clearInterval(timer)
        }, startCounter * 1000)
      } else {
        this.setState({ otpResendText: 'Resend OTP' })
      }
    }
    // setTimeout(() => {
    //   this.setState({
    //     disableResend: false
    //   })
    // }, resendTimer)
  }

  onTextChange (event, index) {
    const { value } = event.target
    const { inputCollection } = this.state
    let nextFocus, reverseFocus

    const numbers = /^[0-9]+$/
    if (value.length > 0 && (value.length > 10 || !numbers.test(value))) {
      return
    }

    (inputCollection[index] = value)
    if (value) {
      nextFocus = index + 1
      if (this[nextFocus] && this[nextFocus].focus()) { this[nextFocus].focus() }
    } else {
      reverseFocus = index - 1
      if (this[reverseFocus] && this[reverseFocus].focus()) { this[reverseFocus].focus() }
    }
    this.setState({ inputCollection })
  }

  isNumeric (str) {
    if (typeof str !== 'string') return false
    return !isNaN(str) && !isNaN(parseFloat(str))
  }

  onPaste (event) {
    const clipBoardData = event.clipboardData.getData('Text')
    const { inputCollection } = this.state
    let inValidClipBoardData = true
    if (clipBoardData && clipBoardData.length === inputCollection.length) {
      const splitClipBoardValue = clipBoardData.toString().split('')
      for (let index = 0; index < splitClipBoardValue.length; index++) {
        const element = splitClipBoardValue[index]
        if (!this.isNumeric(element)) {
          inValidClipBoardData = false
          break
        }
      }
      if (inValidClipBoardData) {
        this.setState({ inputCollection: splitClipBoardValue })
        this[inputCollection.length - 1].focus()
      }
    }
  }

  onKeyPress (event, index, value) {
    if (event.target.value) {
      if (event.key) {
        const NaNCheck = parseInt(event.key)
        if (NaNCheck.toString() !== 'NaN') {
          const { inputCollection } = this.state;
          (inputCollection[index] = parseInt(event.key))
          this.setState({ inputCollection })
          return
        }
        return
      }

      if (event.keyCode != 8) {
        const nextFocus = index + 1
        if (this[nextFocus] && this[nextFocus].focus()) { this[nextFocus].focus() }
      }
    }

    if (!value) {
      if (event.keyCode === 8) {
        const reverseFocus = index - 1
        if (this[reverseFocus] && this[reverseFocus].focus()) {
          this[reverseFocus].focus()
        }
      }
    }
  }

  onFocus (value, index) { }

  checkDisable () {
    const { inputCount } = this.props
    const { inputCollection } = this.state
    const optNUmber = inputCollection.join().replace(/,/g, '')
    return optNUmber.length === inputCount
  }

  renderTextBoxes () {
    const { handleRetry, isVerifyOtp, otpCounter, pageConst, mobileNo, isReturnJourneyOtp, Group } = this.props
    const { inputCollection, otpResendText } = this.state
    // const { header, subtitle, getSubTitle } = pageConst
    return (
      <>
        {
          (isReturnJourneyOtp)
            ? <Box mt={3}>
              <Box display='flex' alignSelf='center' alignContent='center' alignItems='flex-start' justifyContent='flex-start'>
                <SvgIconImage src={Group} fontSize='custom' h='76' w='76' alt='grp' />
              </Box>
              <Box textAlign='left' pt={3} mb={3} color='extraColors.smoke.main'>
                <Typography variant='overline' color='inherit'>{pageConst?.header}</Typography>
                <Box variant='h5' mt={1} color='typography.dark'>
                  <MaterialTypography variant='h6' color='inherit'>{pageConst?.getSubTitle(mobileNo)}</MaterialTypography>
                </Box>
              </Box>
              </Box>
            : <></>
        }
        <Box display='flex'>
          {
            inputCollection &&
            inputCollection.map((val, ind) => {
              return (
                <Box key={ind} px={0.5}>
                  <MaterialInput
                    label=''
                    id={`otpInput-${ind}`}
                    inputRef={(el) => (this[ind] = el)}
                    name={ind.toString()}
                    onChange={(event) => { this.onTextChange(event, ind) }}
                    type='tel'
                    variant='filled'
                    onKeyDown={(event) => this.onKeyPress(event, ind, val)}
                    onPaste={this.onPaste}
                    value={val}
                    InputProps={{ inputProps: { style: { textAlign: 'center' }, maxLength: '1' } }}
                  />
                </Box>
              )
            })
          }
        </Box>
        <Grid container spacing={3} justify='space-between'>
          <Grid item xs={6}>
            {(isVerifyOtp) &&
              <>
                <Box
                  pt={3} textAlign='left'
                >
                  <MaterialTypography color='secondary' variant='hp2'> OTP entered is incorrect, please retry.</MaterialTypography>
                </Box>
              </>}
          </Grid>

          <Grid item xs={6}>
            {otpResendText === 'Resend OTP'
              ? (
                <Box
                  pt={3} textAlign='right'
                  onClick={() => handleRetry()}
                  style={{ cursor: 'pointer' }}
                >
                  <MaterialTypography color='secondary' variant='hp2'>{otpResendText}</MaterialTypography>
                </Box>
                )
              : (
                <Box pt={3} textAlign='right'>
                  <MaterialTypography color='textSecondary' variant='hp2'>{otpCounter === 1 ? 'Resend OTP' : otpResendText}</MaterialTypography>
                </Box>
                )}
          </Grid>
        </Grid>
      </>
    )
  }

  getMaskedMobileNumber (mobileNumber = '') {
    const xyz = mobileNumber.slice(0, 2) + _.repeat('X', 5) + mobileNumber.slice(-3)
    console.log(xyz)
    return xyz
  }

  getMobileText () {
    const { mobileNumber, mobileText } = this.props
    const mobText = mobileText || otpConst.mobileText
    const maskedMobileNumber = this.getMaskedMobileNumber(mobileNumber)
    const replacedText = mobText.replace('**********', maskedMobileNumber)
    return replacedText
  }

  handleSubmit () {
    const { handleSubmit } = this.props
    const { inputCollection, timerState } = this.state
    const otp = inputCollection.join('')
    handleSubmit({ otp, timerState })
  }

  render () {
    const { cta, title } = otpConst
    const { isReturnJourneyOtp } = this.props
    // console.log(isReturnJourneyOtp, 'isReturnJourneyOtp')
    return (
      <Box
        // flexGrow={1}
        // px={2}
        pt={2}
        borderRadius='16px 16px 0px 0px'
        bgcolor='white'
        display='flex'
        flexDirection='column'
      >

        {
          (isReturnJourneyOtp)
            ? <></>
            : <>
              <Box pl={2} pr={2}>
                <Box color='typography.light'>
                  <MaterialTypography variant='overline' color='textSecondary'>{title}</MaterialTypography>
                </Box>
                <MaterialTypography variant='h6'>{this.getMobileText()}</MaterialTypography>
              </Box>
              <Box ml={2} mr={2} mt={1} bgcolor='background.paper'>
                <Divider />
              </Box>
              </>
        }

        <Box
          flexGrow={1}
          py={2}
          p={2}
          pt={3}
          height={isReturnJourneyOtp ? '74vh' : '50vh'}
        >
          {this.renderTextBoxes()}
        </Box>

        <Box
          position='sticky'
          bottom='0'
        >
          <Button
            disabled={!this.checkDisable()}
            style={{ borderRadius: 0 }}
            fullWidth variant='contained' color='primary' size='large'
            onClick={this.handleSubmit}
          >{isReturnJourneyOtp ? 'Done' : cta}
          </Button>
        </Box>

      </Box>
    )
  }
}

Otp.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  mobileNumber: PropTypes.string.isRequired,
  handleRetry: PropTypes.func,
  inputCount: PropTypes.number,
  otpCounter: PropTypes.number.isRequired
}

Otp.defaultProps = {
  inputCount: 6
}
