import { Box, Grid, Paper } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import { LOG_IN } from '../../configurations/routing/routeConstants'
import Loading from "../../sharedComponents/Loading/Loading"

export const SuccessPage = (props) => {
    const history = useHistory()
    const { newAppointment, loading, loggedIn } = props
    console.log(newAppointment)
    if (!loggedIn) {
        history.push({
            pathname: LOG_IN
        })
    }
    if (loading) {
        <Loading />
    }
    return (
        <Box color="primary.main" width="100vw" height="100vh">
            <Grid container justify="column" alignItems="center">
                <Grid item xs={12}>
                    <Box color="secondary.main" mt={4} mx={4}>
                        <Paper elevation={3}>
                            <Grid container direction="column" justify="center" alignItems="center">
                                <Grid item>
                                    Name: {newAppointment.Name}
                                </Grid>
                                <Grid item>
                                    Date of Appointment: {newAppointment.date}
                                </Grid>
                                <Grid item>
                                    Time of Appointment: {newAppointment.startTime}
                                </Grid>
                                <Grid item>
                                    Service selected: {newAppointment.services}
                                </Grid>
                                <Grid item>
                                    ShopId: {newAppointment.shopId}
                                </Grid>
                                <Grid item>
                                    Mobile: {newAppointment.mobile}
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    newAppointment: state.application.newAppointments,
    loading: state.application.loading,
    loggedIn: state.application.loggedIn

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessPage)
