import { Box, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'

import MaterialTypography from '../../../sharedComponents/materialComponents/typography/MaterialTypography'

function ShopAbout({ shop }) {
    // console.log(shop["About"].OpeningHours)
    const [OpeningHours, setOpeningHours] = useState([])
    useEffect(() => {
        if (shop && shop["About"]) {
            setOpeningHours(shop["About"].OpeningHours)
        } else {

        }

    }, [shop])
    return (
        <Box>
            <Grid container justify="center" alignItems="center" direction="column">
                <Grid item container direction="column" spacing={1}>
                    <Grid item>
                        <MaterialTypography variant="h4">Location</MaterialTypography>
                    </Grid>
                    <Grid item>
                        <MaterialTypography>{shop.address.name}</MaterialTypography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" spacing={1}>
                    <Grid item>
                        <MaterialTypography variant="h4">Opening Hour</MaterialTypography>
                    </Grid>
                    <Grid item container direction="column" spacing={1}>
                        {OpeningHours && OpeningHours.map((time) => {
                            return <Grid item container direction="row" key={time.day} >
                                <Grid item>
                                    <MaterialTypography>{time.day}</MaterialTypography>
                                </Grid>
                                <Grid item>
                                    <Box mx={4}>
                                        <MaterialTypography>{time.open} to {time.close}</MaterialTypography>
                                    </Box>
                                </Grid>
                            </Grid>
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default ShopAbout
