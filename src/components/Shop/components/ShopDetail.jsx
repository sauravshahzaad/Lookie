import { Box, Grid } from '@material-ui/core'

import MaterialTypography from "../../../sharedComponents/materialComponents/typography/MaterialTypography"
import React from 'react'

function ShopDetail({ shop }) {
    // console.log(shop)
    return (
        <Box>
            <Grid container direction="column" spacing={2}>
                <Grid item container direction="row" justify="flex-end" alignItems="baseline" spacing={2}>
                    <Grid item>
                        <MaterialTypography variant="h1" color="textPrimary">{shop.name}</MaterialTypography>
                    </Grid>
                    <Grid item>
                        <MaterialTypography variant="h6" color="textSecondary">{shop.address.name}</MaterialTypography>
                    </Grid>
                </Grid>
                <Grid item container direction="row" spacing={4}>
                    <Grid item>
                        <MaterialTypography variant="caption" color="textPrimary">5 start</MaterialTypography>
                    </Grid>
                    <Grid item>
                        <MaterialTypography variant="caption" color="textSecondary">004 7875 5655</MaterialTypography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ShopDetail
