import React, { Component } from "react"

import ProductLandingWrapper from "./ProductLanding.wrapper"
import { connect } from "react-redux"
import { geolocated } from "react-geolocated";
import { withRouter } from "react-router"

// import { withSnackbar } from "notistack"

// import Loading from "../../../sharedComponents/Loading/Loading"

// import dispatchError from "../../../actions/ErrorModule.actions"
//import application reducer key

export class ProductLandingContainer extends Component {

    render() {

        return (
            <ProductLandingWrapper />
        )
    }

}
const mapStateToProps = (state) => ({
    // loading: state.product.loading,
    // faqList: state.product.faqs
    loggedIn: state.application.loggedIn

})

const mapDispatchToProps = (dispatch) => ({
    actions: {
        // getFaq: () => {
        //     return dispatch(getFaq())
        // },
        // getOffers: () => {
        //     return dispatch(getOffers())
        // },
        // getLocation: () => {
        //     return dispatch(getLocation())
        // }
    }
})

// export default ;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(ProductLandingWrapper)))

