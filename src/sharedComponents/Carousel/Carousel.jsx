// Import Node Module
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { bindKeyboard } from 'react-swipeable-views-utils'
import { MobileStepper, Box, withStyles } from '@material-ui/core'

const EnhancedComponent = bindKeyboard(SwipeableViews)

const StyledMobileStepper = withStyles({
  root: {
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  dot: {
    backgroundColor: '#F3F3F3'
  },
  dotActive: {
    backgroundColor: '#ED1164'
  }
})(MobileStepper)

export default class Carousel extends Component {
  constructor (props) {
    super(props)

    const { slides, startIndex } = this.props

    this.state = {
      active: startIndex
    }

    this.autoPlayInterval = undefined
    this.slideCount = slides.length

    this.handleSetActive = this.handleSetActive.bind(this)
    this.setNextSlide = this.setNextSlide.bind(this)
    this.incrementSlide = this.incrementSlide.bind(this)
    this.setAutoPlay = this.setAutoPlay.bind(this)
    this.resetAutoPlayTimer = this.resetAutoPlayTimer.bind(this)
  }

  componentDidMount () {
    this.setAutoPlay()
  }

  componentWillUnmount () {
    const { autoPlayProps } = this.props
    const { autoplay: enableAutoPlay } = autoPlayProps
    if (enableAutoPlay && this.autoPlayInterval) {
      this.autoPlayInterval = clearInterval(this.autoPlayInterval)
    }
  }

  handleSetActive (activeIndex) {
    const { active } = this.state
    if (active !== activeIndex) {
      this.resetAutoPlayTimer()
      this.setState({ active: activeIndex })
    }
  }

  setAutoPlay () {
    this.resetAutoPlayTimer()
  }

  setNextSlide (direction) {
    const nextActive = direction === 'incremental' ? this.incrementSlide() : this.decrementSlide()
    this.setState({ active: nextActive })
  }

  incrementSlide () {
    const { slideCount, state, props } = this
    const { active } = state
    const { loop } = props

    if (active + 1 === slideCount) {
      return 0
    }
    let incrementedActive = active + 1
    if (!loop && incrementedActive === slideCount) {
      incrementedActive = active
    }
    return incrementedActive % slideCount
  }

  decrementSlide () {
    const { slideCount, state, props } = this
    const { active } = state
    const { loop } = props
    let decrementedActive = active - 1

    if (active === 0) {
      return slideCount - 1
    }

    if (!loop && decrementedActive < 0) {
      decrementedActive = active
    }

    if (loop && decrementedActive < 0) {
      decrementedActive = slideCount + decrementedActive
    }
    return decrementedActive % slideCount
  }

  resetAutoPlayTimer () {
    const { autoPlayProps } = this.props
    const { autoplay: enableAutoPlay, direction, interval } = autoPlayProps

    if (enableAutoPlay) {
      this.autoPlayInterval = clearInterval(this.autoPlayInterval)
      this.autoPlayInterval = setInterval(() => { console.log('setInterval called'); this.setNextSlide(direction) }, interval)
    }
  }

  render () {
    const { slides, conatinerProps, carouselWrapperProps, paginationWrapperProps, insideCarousal, paginationStepperStyleProps } = this.props
    const { active } = this.state

    return (
      <Box
        {...conatinerProps}
      >
        <Box
          {...carouselWrapperProps}
        >
          <EnhancedComponent
            index={active}
            onChangeIndex={this.handleSetActive}
            enableMouseEvents
          >
            {slides}
          </EnhancedComponent>
        </Box>
        {this.slideCount > 1 &&
          <Box
            display='flex'
            justifyContent='center'
            {...paginationWrapperProps}
          >
            <StyledMobileStepper
              activeStep={active}
              variant='dots'
              steps={this.slideCount}
              position='static'
              style={{ paginationStepperStyleProps, position: 'relative', marginTop: ((insideCarousal) ? '-2rem' : '0.5rem') }}
            />
          </Box>}
      </Box>
    )
  }
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.element).isRequired,
  autoPlayProps: PropTypes.shape({
    enabled: PropTypes.bool,
    direction: PropTypes.oneOf(['incremental', 'decremental']),
    interval: PropTypes.number
  }),
  loop: PropTypes.bool,
  startIndex: PropTypes.number,
  conatinerProps: PropTypes.objectOf(PropTypes.shape),
  carouselWrapperProps: PropTypes.objectOf(PropTypes.shape),
  paginationWrapperProps: PropTypes.objectOf(PropTypes.shape),
  paginationStepperStyleProps: PropTypes.objectOf(PropTypes.shape),
  insideCarousal: PropTypes.bool
}

Carousel.defaultProps = {
  autoPlayProps: {
    autoplay: true,
    direction: 'incremental',
    interval: 5000
  },
  loop: false,
  startIndex: 0,
  conatinerProps: {},
  carouselWrapperProps: {},
  paginationWrapperProps: {},
  paginationStepperStyleProps: {},
  insideCarousal: false
}
