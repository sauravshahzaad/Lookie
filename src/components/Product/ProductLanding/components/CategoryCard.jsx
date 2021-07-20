import { Box, Button, Grid, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'
import { applicationActions } from '../../../../actions/application';
import CATEGORY from "../../../../CATEGORY"
import { PRODUCTS_ROUTE } from '../../../../configurations/routing/routeConstants'

const defaultState = CATEGORY.map((cat) => {
    return {
        name: cat.categoryName,
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
function CategoryCard(props) {
    const [selectedCategory, setSelectedCategory] = useState(defaultState)
    const [selectedServices, setSelectedServices] = useState([])
    const classes = useStyles()
    const history = useHistory()
    const { actions } = props

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
    useEffect(() => {
        changeSelectedServices(selectedCategory)

    }, [selectedCategory])
    const changeSelectedServices = (selectedServices) => {
        const services = []
        selectedServices.forEach((e) => {
            if (e.selected) {
                services.push(e)
            }
        })
        setSelectedServices(services)
    }
    // console.log(defaultState, "defaultState2")
    console.log(selectedCategory, "selectedCategory")
    console.log(selectedServices, "selectedServices")
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
                    <Button onClick={() => {
                        actions.servicesSelect([...selectedServices])
                        history.push({
                            pathname: PRODUCTS_ROUTE,
                        })
                    }} variant="contained">Find</Button>
                </Grid>
            </Grid>

        </Box>
    )
}

const mapStateToProps = (state) => ({
    loggedIn: state.application.loggedIn,
    user: state.application.user,
    loading: state.application.loading,
    services: state.application.services,
    shop: state.application.shop

})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        servicesSelect: (services) => {
            return dispatch(applicationActions.servicesSelect(services))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCard)

