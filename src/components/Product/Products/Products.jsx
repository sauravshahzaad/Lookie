import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import SHOP_CONSTANTS from "../../../SHOP_CONSTANTS"
import ShpCard from "../../../components/Product/ProductLanding/components/ShpCard"
import { connect } from 'react-redux'
import { applicationActions } from '../../../actions/application';
import Loading from "../../../sharedComponents/Loading/Loading"
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

function Products(props) {
    const classes = useStyles()
    const { services, loading } = props
    const [allShops, setAllShops] = useState([])
    useEffect(() => {
        const shops = []
        SHOP_CONSTANTS.forEach((e) => {
            e.Services.forEach((ele) => {
                console.log(ele)
                services.forEach(ser => {
                    if (ser.name === ele.name) {
                        shops.push(e)
                    }
                })
            })
        })
        setAllShops(shops)
    }, [services])

    console.log(allShops, "allShops")
    console.log(services, "services")
    if (loading) {
        console.log(loading)
        return (<Loading />)
    }

    return (
        <Box my={2} mx={9} mt={5}>
            <Container maxWidth="md">
                <Grid container spacing={2} className={classes.root}>
                    {allShops.length > 0 ?
                        allShops.map((shop, index) => {
                            return <Grid item xs={12} sm={6} md={4} key={index} className={classes.card}>
                                <Box><ShpCard shop={shop} /></Box>
                            </Grid>
                        })
                        :
                        <><p>No shops Found related to your selected services</p></>
                    }

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

export default connect(mapStateToProps, mapDispatchToProps)(Products)


