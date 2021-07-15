import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid } from '@material-ui/core';

import MaterialStagger from '../materialComponents/Stagger/MaterialStagger'
import tnc from "./Stagger.pageConstants"
import Otp from "../Otp/Otp"
import Application from "reducers/Application/Application.class"


class OtpStagger extends Component {
  constructor(props) {
    super(props);
  }

  staggerFooterBtn = () => {
    const { setOtpConcern } = this.props

    return <Box display="flex" flexDirection="row" justifyContent="space-between" pr={2} pl={2} pt={1} pb={1}>
      <Grid container spacing={2}>
        <Grid item xs={5} container>
          <Button onClick={() => { setOtpConcern(false) }} fullWidth variant='outlined' color='primary' size='large'>{tnc.ctaCancel}</Button>
        </Grid>
        <Grid item xs={7} container>
          <Button onClick={() => { setOtpConcern(false, true) }} fullWidth variant='contained' color='primary' size='large'>{tnc.ctaAgree}</Button>
        </Grid>
      </Grid>
    </Box>
  }


  render() {
    const { setOtpConcern, verifyOtp, showOtpModal, reSendOtp, application, mobileNumber, mobileText, limitOtp, otpCounter, isVerifyOtp, timeRemaining } = this.props

    return (
      <Box>
        <MaterialStagger
          open={showOtpModal}
          handleClose={() => { setOtpConcern(false, false) }}
          staggerFooterBtn={[]}
        >
          <Box pt={0}>
            <Otp
              handleRetry={() => { reSendOtp() }}
              mobileNumber={mobileNumber}
              handleSubmit={verifyOtp}
              mobileText={mobileText}
              limitOtp={limitOtp}
              otpCounter={otpCounter}
              isVerifyOtp={isVerifyOtp}
              timeRemaining={timeRemaining}
            />
          </Box>

        </MaterialStagger>
      </Box>
    );
  }
}

OtpStagger.propTypes = {};

export default OtpStagger;
