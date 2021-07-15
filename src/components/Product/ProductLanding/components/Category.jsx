import { Box, Button, Grid, Paper, Typography, makeStyles } from '@material-ui/core'

import MaterialTypography from '../../../../sharedComponents/materialComponents/typography/MaterialTypography';
import React from 'react'

const CATEGORY = [
    {
        id: "1",
        img: "https://www.bewtifly.com/local/assets/site/images/services/hair_cutting.jpg",
        categoryName: "Hair Cut"
    },
    {
        id: "2",
        img: "https://www.bewtifly.com/local/assets/site/images/services/beard_styling.jpg",
        categoryName: "Beard Styling"
    },
    {
        id: "3",
        img: "https://www.bewtifly.com/local/assets/site/images/services/nail_art.jpg",
        categoryName: "Nail Art"
    },
    {
        id: "4",
        img: "https://www.bewtifly.com/local/assets/site/images/services/massage.jpg",
        categoryName: "Massage"
    },
]
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(25),
            height: theme.spacing(25),
        },
    },
}));
function Category() {
    const classes = useStyles();
    return (
        <Box my={4}>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item container direction="column" justify="center" alignItems="center" >
                    <Grid item><Typography variant="h4">Find What You Want</Typography></Grid>
                    <Grid item><Typography>Explore some of the most searched services</Typography></Grid>
                </Grid>
                <Grid item container className={classes.root} justify="center" alignItems="center">
                    {CATEGORY.map((cat) => {
                        return <Grid item key={cat.id}>
                            <Box height={4}>
                                <Paper elevation={3} style={{
                                    background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${cat.img}) center center no-repeat`,
                                    backgroundSize: "cover",
                                    height: "222px"
                                }} >
                                    <Grid container direction="column" justify="center" alignItems="center">
                                        <Grid item style={{
                                            marginTop: "90px"
                                        }}><MaterialTypography variant="h5" style={{ color: "#fff" }} >{cat.categoryName}</MaterialTypography></Grid>
                                        <Grid item>
                                            <Button variant="outlined" style={{ color: "#fff", marginTop: "5px" }}>View </Button></Grid>
                                    </Grid>
                                </Paper>
                            </Box>
                        </Grid>
                    })}
                </Grid>
            </Grid>
        </Box>
    )
}

export default Category
