import { Box, Container, Grid, Typography, makeStyles } from "@material-ui/core"

import React from 'react'
import SHOPS from "../../../../SHOP_CONSTANTS"
import ShpCard from "./ShpCard"

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
function Shops() {
    const classes = useStyles();
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
            </Container>
        </Box>
    )
}

export default Shops
