import React from 'react'
import Lottie from 'react-lottie'
import * as loaderData from './assets/successMark.json'
// import './SuccessCheck.scss'
import { Box } from '@material-ui/core'

export default class SuccessCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isStopped: false, isPaused: false }
  }

  render() {
    // const buttonStyle = {
    //   display: 'block',
    //   margin: '10px auto'
    // }

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: loaderData.default,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    const { isStopped, isPaused } = this.state

    return (
      <Box
        width='100%'
        height='100%'
        display='flex'
        align-items='center'
        justify-content='center'
      >
        <Lottie
          className='loader'
          options={defaultOptions}
          height='100%'
          width='400'
          isStopped={isStopped}
          isPaused={isPaused}
        />
      </Box>
    )
  }
}
