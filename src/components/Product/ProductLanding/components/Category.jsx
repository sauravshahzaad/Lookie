import { Box, Button, Grid, Paper, Typography, makeStyles } from '@material-ui/core'

import MaterialTypography from '../../../../sharedComponents/materialComponents/typography/MaterialTypography';
import React from 'react'
import CATEGORY from '../../../../CATEGORY';
import { PRODUCTS_ROUTE } from '../../../../configurations/routing/routeConstants';
import { useHistory } from 'react-router';
import { connect } from 'react-redux'
import { applicationActions } from '../../../../actions/application';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(25),
            height: theme.spacing(25),
        },
    },
}));
function Category(props) {
    const classes = useStyles();
    const history = useHistory();
    return (
        <Box my={4}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item container direction="column" justify="center" alignItems="center" >
                    <Grid item><Typography variant="h4">Find What You Want</Typography></Grid>
                    <Grid item><Typography>Explore some of the most searched services</Typography></Grid>
                </Grid>
                <Grid item container className={classes.root} justify="center" alignItems="center">
                    {CATEGORY.slice(0, 4).map((cat) => {
                        return <Grid item key={cat.id}>
                            <Box height={4} my={2}>
                                <Paper elevation={3} style={{
                                    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${cat.img}) center center no-repeat`,
                                    backgroundSize: "cover",
                                    height: "222px",
                                    marginBottom: "5px"
                                }} >
                                    <Grid container direction="column" justify="center" alignItems="center">
                                        <Grid item style={{
                                            marginTop: "90px"
                                        }}><MaterialTypography variant="h5" style={{ color: "#fff" }} >{cat.categoryName}</MaterialTypography></Grid>
                                        <Grid item>
                                            <Button onClick={() => {
                                                props.actions.servicesSelect([{ name: cat.categoryName, selected: true }])
                                                history.push({
                                                    pathname: PRODUCTS_ROUTE,
                                                }
                                                )
                                            }} variant="outlined" style={{ color: "#fff", marginTop: "5px" }}>View </Button></Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                    })}
                </Grid>
            </Grid>
        </Box>
    )
}


const mapStateToProps = (state) => ({
    loggedIn: state.application.loggedIn,
    user: state.application.user

})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        servicesSelect: (services) => {
            return dispatch(applicationActions.servicesSelect(services))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Category)

