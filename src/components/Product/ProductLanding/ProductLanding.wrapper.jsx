import React, { Component } from 'react'

import {
    Box
} from '@material-ui/core'
import Category from './components/Category'
import Discover from './components/Discover'
import Footer from "../../../sharedComponents/Footer/Footer"
import Shops from "./components/Shops"
import { connect } from 'react-redux'
// import geocoder from "geocoder"
import { applicationActions } from '../../../actions/application'
import { withRouter } from 'react-router'

// import { withSnackbar } from 'notistack'
// import Slides from "./components/Slides"

export class ProductLandingWrapper extends Component {
    componentDidMount() {
        this.setLocation()
        // this.decoding()
    }
    setLocation = () => {
        if (this.props && this.props.coords) {
            console.log(this.props)
            const location = {
                latitude: this.props.coords.latitude,
                longitude: this.props.coords.longitude,
            }
            const res = this.props.actions.location(location)
            console.log("location settled", res)
        }
    }
    // decoding = () => {
    //     geocoder.reverseGeocode(33.7489, -84.3789, function (err, data) {
    //         console.log(data)
    //     });
    // }

    render() {
        const { loggedIn, location } = this.props
        console.log(loggedIn, "loggedIn ", location, "location")
        // console.log("happening")
        // console.log(this.props.coords, "location")



        return (
            <Box style={{
                // backgroundImage: "url('https://www.bewtifly.com/local/assets/site/images/slider/148051545638632.jpg')",
                background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://www.bewtifly.com/local/assets/site/images/slider/148051545638632.jpg') center center no-repeat`,
                backgroundSize: "auto",
                backgroundRepeat: "no-repeat",
                height: "100vh",
                width: "99.59vw"
            }}>

                <Discover />
                <Category />
                <Shops />
                <Footer />
            </Box>
        )
    }
}

const mapStateToProps = (state) => ({
    loggedIn: state.application.loggedIn,
    location: state.application.location
})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        location: (location) => {
            return dispatch(applicationActions.location(location))
        }
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductLandingWrapper))
