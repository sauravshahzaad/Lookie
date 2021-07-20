import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

import Footer from "../../sharedComponents/Footer/Footer"
import ShopDetail from "./components/ShopDetail"
import ShopTab from "./components/ShopTab"
import { connect } from 'react-redux'
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyle = makeStyles(theme => ({
    img: {
        height: "50vh",
        width: "70vw"
    },
    fullWidth: {
        width: "100%"
    },
    halfWidth: {
        width: "75%"
    },
    footerWidth: {
        width: "100vw"
    }
}))
function Shop(props) {
    const classes = useStyle()
    const history = useHistory()
    const location = useLocation();
    const { loggedIn, selectedShop } = props
    console.log(selectedShop, loggedIn, "redux data")

    const [shop, setShop] = useState({
        img: "",
        name: "",
        address: {
            name: ""
        }
    })
    useEffect(() => {
        console.log(location, "in uSeEffect");
        setShop(location.state)
        if (location && location.state) {
            setShop(location.state)
        }
        else if (selectedShop) {
            setShop(selectedShop)
        }
        else {
            history.push('/')
        }
    },[location, selectedShop, history]);
    return (
        <Box>
            <Grid container direction="column" alignItems="center" >
                <Grid item>
                    <Box mt={1}>
                        <img src={shop.img} alt="img" className={classes.img} />
                    </Box>
                </Grid>
                <Grid item>
                    <Box mt={2}>
                        <ShopDetail shop={shop} />
                    </Box>
                </Grid>
                <Grid item className={classes.fullWidth}>
                    <Box mt={4} mx={2} px={2}>
                        <ShopTab shop={shop} />
                    </Box>
                </Grid>
                <Grid item className={classes.fullWidth}>
                    <Box mx={0} mt={2}>
                        <Footer />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
const mapStateToProps = (state) => ({
    loggedIn: state.application.loggedIn,
    selectedShop: state.application.shop

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)


