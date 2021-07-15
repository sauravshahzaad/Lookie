import { Box } from '@material-ui/core'
import React from 'react'
import Footer from '../../../sharedComponents/Footer/Footer'
import Navbar from '../../../sharedComponents/NavBar/NavBar'
import SignUpForm from "./SignUpForm"
function SignUp() {
    return (
        <Box>
            <Navbar />
            <SignUpForm />
            <Footer />
        </Box>
    )
}

export default SignUp
