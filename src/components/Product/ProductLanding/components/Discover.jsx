import { Box, Grid, Typography } from '@material-ui/core'

import CategoryCard from './CategoryCard'
import React from 'react'

function Discover() {
    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Grid container justify="center" alignItems="center">
                <Grid item container justify="center" alignItems="center">
                    <Typography style={{ color: "#fff" }}>Discover & Book beauty appointments 24/7</Typography>
                </Grid>
                <Grid item container justify="center">
                    <CategoryCard/>
                </Grid>
                <Grid item container justify="center"></Grid>
            </Grid>
        </Box>
    )
}


export default Discover
