// typography
const htmlFontSize = 12

// Fonts
const fontFamily = [
  'Lato',
  'Roboto',
  'Helvetica Neue',
  'Arial',
  'sans-serif'
].join(',')

// weights
const light = 300
const regular = 400
const semiBold = 500
const bold = 600
// const bolder = 900

// productive-heading-07
const h1 = {
  component: 'h1',
  styles: {
    fontSize: '4.5rem',
    // lineHeight: 5.333,
    letterSpacing: '0rem',
    fontWeight: bold
  }
}

// productive-heading-05
const h2 = {
  component: 'h2',
  styles: {
    fontSize: '2.67rem',
    // lineHeight: 3.333,
    letterSpacing: '0rem',
    fontWeight: bold
  }
}

// productive-heading-04
const h3 = {
  component: 'h3',
  styles: {
    fontSize: '2.333rem',
    lineHeight: 3,
    letterSpacing: '0rem',
    fontWeight: bold
  }
}

// productive-heading-03
const h4 = {
  component: 'h3',
  styles: {
    fontSize: '1.67rem',
    lineHeight: 2.17,
    letterSpacing: '0rem',
    fontWeight: bold
  }
}

// productive-heading-02
const h5 = {
  component: 'h5',
  styles: {
    fontSize: '1.25rem',
    lineHeight: 1.125,
    letterSpacing: '0.02rem',
    fontWeight: bold
  }
}

// productive-heading-06
const h6 = {
  component: 'h6',
  styles: {
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.0133rem',
    fontWeight: bold,
    fontFamily: fontFamily
  }
}

// productive-heading-01
const h7 = {
  component: 'h6',
  styles: {
    fontSize: '1.333rem',
    lineHeight: 1.67,
    letterSpacing: '0rem',
    fontWeight: light
  }
}

// body-long-02
const subtitle1 = {
  component: 'h6',
  styles: {
    fontSize: '1rem',
    lineHeight: 1.2,
    fontWeight: bold
  }
}
// body-short-01
const subtitle2 = {
  component: 'h6',
  styles: {
    fontSize: '0.8rem',
    lineHeight: 1.2,
    fontWeight: bold
    // letterSpacing: '0.0133rem'
    // letterSpacing: '0.0216rem'
  }
}

// body-long-01
const body1 = {
  component: 'p',
  styles: {
    fontSize: '1.16rem',
    lineHeight: 1.66,
    fontWeight: regular,
    letterSpacing: '0.0216rem'
  }
}

// body-short-02
const body2 = {
  component: 'p',
  styles: {
    fontSize: '1rem',
    lineHeight: 1.33,
    fontWeight: regular,
    letterSpacing: '0.0266rem'
  }
}

// caption-01
const caption = {
  component: 'span',
  styles: {
    fontSize: '1rem',
    lineHeight: 1.25,
    fontWeight: regular,
    letterSpacing: 'inherit'
  }
}

// caption-02
const caption1 = {
  component: 'span',
  styles: {
    fontSize: '0.75rem',
    lineHeight: 1.25,
    fontWeight: regular,
    letterSpacing: '0.041rem',
    fontFamily
  }
}

// helper-text-01
const hp1 = {
  component: 'span',
  styles: {
    fontSize: '0.83rem',
    lineHeight: 1.33,
    fontWeight: regular,
    letterSpacing: '0.0266rem',
    fontFamily: fontFamily
  }
}

// helper-text-02
const hp2 = {
  component: 'span',
  styles: {
    fontSize: '0.75rem',
    lineHeight: 1.25,
    fontWeight: regular,
    letterSpacing: '0.0266rem',
    fontFamily: fontFamily
  }
}

// code-01
const c1 = {
  component: 'span',
  styles: {
    fontSize: '1rem',
    lineHeight: 1.33,
    fontWeight: regular,
    letterSpacing: '0.083rem',
    fontFamily: fontFamily
  }
}

// code-02
const c2 = {
  component: 'span',
  styles: {
    fontSize: '1.167rem',
    lineHeight: 1.66,
    fontWeight: regular,
    letterSpacing: '0.118rem',
    fontFamily: fontFamily
  }
}

const lb1 = {
  component: 'span',
  styles: {
    fontSize: '0.625rem',
    // lineHeight: 0.75,
    fontWeight: regular,
    letterSpacing: '0.049rem',
    fontFamily: fontFamily
  }
}

const overline = {
  component: 'span',
  styles: {
    fontSize: '0.625rem',
    lineHeight: '0.75rem',
    fontWeight: regular,
    letterSpacing: '0.0519rem',
    fontFamily: fontFamily
  }
}

const customVariants = ['h7', 'caption1', 'hp1', 'hp2', 'cb1', 'cb2', 'lb1']

// typography

function getTypographyTheme(themeType) {
  return {
    typography: {
      htmlFontSize,
      fontFamily,
      fontWeightLight: light,
      fontWeightRegular: regular,
      fontWeightMedium: semiBold,
      fontWeightBold: bold,
      h1: h1.styles,
      h2: h2.styles,
      h3: h3.styles,
      h4: h4.styles,
      h5: h5.styles,
      h6: h6.styles,
      h7: h7.styles,
      subtitle1: subtitle1.styles,
      subtitle2: subtitle2.styles,
      body1: body1.styles,
      body2: body2.styles,
      caption: caption.styles,
      caption1: caption1.styles,
      hp1: hp1.styles,
      hp2: hp2.styles,
      c1: c1.styles,
      c2: c2.styles,
      lb1: lb1.styles,
      overline: overline.styles,
      customVariants
    },
    variants: {
      h1: h1.component,
      h2: h2.component,
      h3: h3.component,
      h4: h4.component,
      h5: h5.component,
      h6: h6.component,
      h7: h7.component,
      subtitle1: subtitle1.component,
      subtitle2: subtitle2.component,
      body1: body1.component,
      body2: body2.component,
      caption: caption.component,
      caption1: caption1.component,
      hp1: hp1.component,
      hp2: hp2.component,
      c1: c1.component,
      c2: c2.component,
      lb1: lb1.component,
      overline: overline.component
    }
  }
}

export {
  getTypographyTheme
}
