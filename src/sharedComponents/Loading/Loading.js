import React, { PureComponent } from "react"

import { Box } from "@material-ui/core"
import Lottie from "react-lottie"
import loadingData from "./Loading.json"

// import PropTypes from "prop-types"


export default class Loading extends PureComponent {
    render() {
        const {
            // loadingText,
            pause
        } = this.props
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: loadingData,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid meet"
            }
        }
        return (
            <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bgcolor="rgba(255,255,255,0.5)"
                zIndex="999"
                style={{ backdropFilter: "blur(2px" }}
            >
                <Lottie
                    options={defaultOptions}
                    isPaused={pause}
                    isClickToPauseDisabled
                    height={250}
                    width={250}
                ></Lottie>
            </Box>
        )
    }
}
// Loading.propTypes = {
//     pause: PropTypes.bool,
//     loadingText: PropTypes.string
// }
// Loading.defaultprops = {
//     pause: false,
//     loadingText: ""
// }
