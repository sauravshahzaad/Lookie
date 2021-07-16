import { Box, Container, Grid, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import CATEGORY from '../../../CATEGORY';
import SHOP_CONSTANTS from "../../../SHOP_CONSTANTS"
import ShpCard from "../../../components/Product/ProductLanding/components/ShpCard"

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
    const location = useLocation();
    const classes = useStyles()
    // console.log(location)
    const [selectedCategory, setSelectedCategory] = useState([])
    const [allShops, setAllShops] = useState([])

    useEffect(() => {
        let catArray = [];
        if (location && location.state && location.state.category) {

            location.state.category.forEach(element => {
                if (element.selected) {
                    console.log(element)
                    catArray.push(element)
                }
            });
            // console.log(catArray)
        }
        else {
            CATEGORY.forEach((element) => {
                // console.log(element)
                catArray.push({
                    name: element,
                    selected: true
                })
            })
        }
        setSelectedCategory(pre => [...catArray])
    }, [])
    function findCommonElements(arr1, arr2) {
        console.log(arr1, "arr1")
        console.log(arr2, "arr2")
        return arr1.some(item => arr2.includes(item))
    }
    useEffect(() => {
        const shops = [];
        SHOP_CONSTANTS.forEach((shop) => {
            console.log(shop.Services)
            console.log(findCommonElements(shop.Services, selectedCategory))
            if (findCommonElements(shop.Services, selectedCategory)) {
                shops.push(shop)
                console.log(shops)
            }
        })
    }, [selectedCategory])

    console.log(selectedCategory, "selectedCategory")

    return (
        <Box my={2} mx={9} mt={5}>
            <Container maxWidth="md">
                <Grid container spacing={2} className={classes.root}>
                    {SHOP_CONSTANTS.map((shop, index) => {
                        return <Grid item xs={12} sm={6} md={4} key={index} className={classes.card}>
                            <Box><ShpCard shop={shop} /></Box>
                        </Grid>
                    })}

                </Grid>
            </Container>
        </Box>
    )
}

export default Products

