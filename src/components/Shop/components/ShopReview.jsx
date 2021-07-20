import { Box, Grid } from '@material-ui/core'
import React from 'react'
import ReviewCard from "../../../sharedComponents/ReviewCard"
function ShopReview() {
    return (
        <Box>
            <Grid container justify="center" alignItems="center">
                <ReviewCard />
            </Grid>
        </Box>
    )
}

export default ShopReview
