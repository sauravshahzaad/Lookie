import { Box, Container, Grid, Typography, makeStyles, Button } from "@material-ui/core"

import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router";
import { PRODUCTS_ROUTE } from "../../../../configurations/routing/routeConstants";
import SHOPS from "../../../../SHOP_CONSTANTS"
import ShpCard from "./ShpCard"
import { connect } from 'react-redux'
import { applicationActions } from '../../../../actions/application';

import CATEGORY from "../../../../CATEGORY";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    card: {
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "20px",
    }
}));
function Shops(props) {
    const classes = useStyles();
    const history = useHistory()
    const [selectedServices, setSelectedServices] = useState([])
    useEffect(() => {
        const services = []
        CATEGORY.forEach((e) => {
            // console.log(e)
            services.push({ name: e.categoryName, selected: true })
        })
        setSelectedServices(services)
    }, [])
    return (
        <Box my={2} mx={9} mt={5}>
            <Container maxWidth="md">
                <Grid item container direction="column" justify="center" alignItems="center" >
                    <Grid item><Typography variant="h4">Our Selected Picks</Typography></Grid>
                    <Grid item><Typography>Explore Premium Salons and Spas</Typography></Grid>
                </Grid>
                <Grid
                    container
                    className={classes.root}>
                    {SHOPS.map((shp, index) => {
                        return <Grid item xs={12} sm={6} md={4} key={index} className={classes.card} >
                            <ShpCard shop={shp} />
                        </Grid>
                    })}
                </Grid>
                <Grid item container justify="flex-end">
                    <Grid item></Grid>
                    <Grid item>
                        <Box mb={2}>
                            <Button onClick={() => {
                                props.actions.servicesSelect(selectedServices)
                                history.push(PRODUCTS_ROUTE)
                            }} variant="contained">View All</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
const mapStateToProps = (state) => ({
    loggedIn: state.application.loggedIn,
    user: state.application.user,
    loading: state.application.loading,
    services: state.application.services,
    // shop: state.application.shop

})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        servicesSelect: (services) => {
            return dispatch(applicationActions.servicesSelect(services))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Shops)

