import { Box, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

import Footer from "../../sharedComponents/Footer/Footer"
import ShopDetail from "./components/ShopDetail"
import ShopTab from "./components/ShopTab"
import { useEffect } from "react";
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
function Shop() {
    const classes = useStyle()
    const location = useLocation();
    const [shop, setShop] = useState({
        img: "",
        name: "",
        address: {
            name: ""
        }
    })
    useEffect(() => {
        console.log(location.state);
        setShop(location.state)
    }, [location]);
    return (
        <Box>
            <Grid container direction="column" alignItems="center" >
                <Grid item>
                    <Box mt={1}>
                        <img src={shop.img} alt="img" className={classes.img}>

                        </img>
                    </Box>

                </Grid>
                <Grid item>
                    <Box mt={2}>
                        <ShopDetail shop={shop} />
                    </Box>
                </Grid>
                <Grid item className={classes.halfWidth}>
                    <Box mt={4}>
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

export default Shop
