import {
    ABOUT_US,
    CONTACT_US,
    DEFAULT_ROUTE,
    LOG_IN,
    PRODUCT_LISTING_ROUTE,
    SHOP_ROUTE,
    SIGNUP_ROUTE,
    PRODUCTS_ROUTE,
    SUCCESS_PAGE
} from './routeConstants'

import React from 'react'

const ProductListingContainer = React.lazy(() =>
    import(
        '../../components/Product/ProductLanding/ProductLanding.container' /* webpackChunkName: "ProductListing.Container" */
    )
)
const ContactUsContainer = React.lazy(() =>
    import(
        '../../components/Home/ContactUs' /* webpackChunkName: "ProductListing.Container" */
    )
)
const AboutUsContainer = React.lazy(() =>
    import(
        '../../components/Home/AboutUs' /* webpackChunkName: "ProductListing.Container" */
    )
)
const LogInContainer = React.lazy(() =>
    import(
        '../../components/Auth/LogIn' /* webpackChunkName: "ProductListing.Container" */
    )
)
const SignUpContainer = React.lazy(() =>
    import(
        '../../components/Auth/SignUp' /* webpackChunkName: "ProductListing.Container" */
    )
)
const Shop_Container = React.lazy(() =>
    import(
        '../../components/Shop/Shop' /* webpackChunkName: "ProductListing.Container" */
    )
)

const Products_Container = React.lazy(() =>
    import(
        '../../components/Product/Products/Products' /* webpackChunkName: "ProductListing.Container" */
    )
)

const Success_Page = React.lazy(() => 
    import(
        '../../components/success/SuccessPage'
    )
)



const appRoutes = {
    root: {
        defaultRoute: {
            path: DEFAULT_ROUTE,
            component: ProductListingContainer,
            exact: true
        }
    },
    products: {
        productListing: {
            path: PRODUCT_LISTING_ROUTE,
            component: ProductListingContainer,
            exact: true
        },
        contactUs: {
            path: CONTACT_US,
            component: ContactUsContainer,
            exact: true
        },
        aboutUs: {
            path: ABOUT_US,
            component: AboutUsContainer,
            exact: true
        },
        logIn: {
            path: LOG_IN,
            component: LogInContainer,
            exact: true
        },
        signUp: {
            path: SIGNUP_ROUTE,
            component: SignUpContainer,
            exact: true
        },
        shop: {
            path: SHOP_ROUTE,
            component: Shop_Container,
            exact: true
        },
        products: {
            path: PRODUCTS_ROUTE,
            component: Products_Container,
            exact: true
        },
        success: {
            path: SUCCESS_PAGE,
            component: Success_Page,
            exact: true
        }

    },
    //   error: {
    //     somethingWentWrong: {
    //       path: SOMETHING_WENT_WRONG_ROUTE,
    //       component: ProductDetailsContainer,
    //       exact: true
    //     }
    //   }
}


const getAllRoutesArray = () =>
    Object.keys(appRoutes)
        .map(key =>
            Object.keys(appRoutes[key]).reduce((allRoutes, innerKey) => {
                allRoutes.push(appRoutes[key][innerKey])
                return allRoutes
            }, [])
        )
        .flat()
export {
    appRoutes,
    getAllRoutesArray
}
