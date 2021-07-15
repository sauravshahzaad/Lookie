import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid } from '@material-ui/core';


import MaterialStagger from '../../sharedComponents/materialComponents/Stagger/MaterialStagger'
import MaterialTypography from '../../sharedComponents/materialComponents/typography/MaterialTypography'
import { tnc } from "./Stagger.pageConstants"
import cancelLogo from "./assets/cancel.svg"



class TncStagger extends Component {

  constructor(props) {
    super(props);
    this.staggerHeader = this.staggerHeader.bind(this)
  }

  staggerHeader = () => {
    const { setOtpConcern } = this.props

    return <Grid item xs={12} style={{ padding: '15px 1rem 12px' }}>
      <Grid container justify="space-between" direction="row">
        <MaterialTypography varint='h6' align='left'>{tnc.header}</MaterialTypography>
        <img onClick={() => { setOtpConcern(false) }} src={cancelLogo} alt="logo" />
      </Grid>
    </Grid>
  }

  staggerFooterBtn = () => {
    const { setOtpConcern, iAgreeConcern } = this.props

    return <Box display="flex" flexDirection="row" justifyContent="space-between" pr={2} pl={2} pt={1} pb={1}>
      <Grid container spacing={2}>
        <Grid item xs={6} container>
          <Button onClick={() => { setOtpConcern(false) }} fullWidth variant='outlined' color='primary' size='large'>{tnc.ctaCancel}</Button>
        </Grid>
        <Grid item xs={6} container>
          <Button onClick={() => iAgreeConcern(true)} fullWidth variant='contained' color='primary' size='large'>{tnc.ctaAgree}</Button>
        </Grid>
      </Grid>
    </Box>
  }


  render() {
    const { showOtpConcernModal } = this.props

    return (
      <Box>
        <MaterialStagger
          staggerHeader={this.staggerHeader()}
          open={showOtpConcernModal}
          handleClose={() => { }}
          staggerFooterBtn={this.staggerFooterBtn()}
          stickToBottom
        >
          <Box p={2} pt={0}>
            <Box p={2} pt={1} bgcolor="background.paper" borderRadius={5}>
              <MaterialTypography variant="hp2" color='textSecondary'>{tnc.description}</MaterialTypography>
            </Box>
          </Box>

        </MaterialStagger>
      </Box>
    );
  }
}

TncStagger.propTypes = {

};

export default TncStagger;
