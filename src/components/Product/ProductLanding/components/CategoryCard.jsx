import { Box, Button, Grid, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

import CATEGORY from "../../../../CATEGORY"

const defaultState = CATEGORY.map((cat) => {
    return {
        name: cat,
        selected: false
    }
})

const useStyles = makeStyles((theme) => ({
    unSelectedButton: {
        color: "#263238",
        backgroundColor: "#ffeb3b"
    },
    SelectedButton: {
        color: "#ff4",
        backgroundColor: "#00227b"
    }
}))
function CategoryCard() {
    const [selectedCategory, setSelectedCategory] = useState(defaultState)
    const classes = useStyles()

    const handleSelect = (cat) => {
        // console.log(cat, "cat")
        defaultState.forEach((element) => {
            if (element.name === cat.name) {
                element.selected = !cat.selected
                // console.log(element, "element")
            }
        });
        // console.log(defaultState, "defaultState1")
        setSelectedCategory(preState => ([...defaultState]))
    }
    // console.log(defaultState, "defaultState2")
    // console.log(selectedCategory, "selectedCategory")
    return (
        <Box mt={2}>
            <Grid container justify="center" direction="column" alignItems="center" spacing={2}>
                <Grid container justify="center" alignItems="center" spacing={2}>
                    {selectedCategory.map((cat) => {
                        return <Grid item key={cat.name}>
                            <Box>
                                <Button
                                    className={cat.selected ? classes.SelectedButton : classes.unSelectedButton}
                                    onClick={() => { handleSelect(cat) }}
                                // variant="contained" 
                                // variant={cat.selected ? "outlined" : "contained"}
                                >
                                    {cat.name}
                                </Button>
                            </Box>
                        </Grid>
                    })}
                </Grid>
                <Grid item>
                    <Button variant="contained">Find</Button>
                </Grid>
            </Grid>

        </Box>
    )
}

export default CategoryCard
