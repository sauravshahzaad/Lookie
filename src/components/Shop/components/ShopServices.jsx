import { Box, Chip, Grid } from '@material-ui/core'

import MaterialTypography from '../../../sharedComponents/materialComponents/typography/MaterialTypography'
import React from 'react'

function ShopServices({ shop }) {
    return (
        <Box>
            <Grid container justify="center" direction="column">
                <Grid item>
                    <MaterialTypography align="center" variant="h2">
                        Our Services
                    </MaterialTypography>
                </Grid>
                <Grid item container justify="center" direction="column" alignItems="center">
                    {shop && shop.Services.map((service) => {
                        return <Grid item key={service.name}>
                            <Box mt={2}>
                                <Chip color="secondary" label={service.name} />
                            </Box>
                        </Grid>
                    })}
                </Grid>
            </Grid>
        </Box>
    )
}

export default ShopServices
