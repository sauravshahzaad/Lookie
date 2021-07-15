import {
  createMuiTheme
} from '@material-ui/core/styles'
import { getTypographyTheme } from './typography'

// Theme Type
const themeType = 'light'

// primary and secondary colors
const primaryColor = '#97144D' // Burgundy
const secondaryColor = '#ED1164' // Pink Floyd

// background color
const defaultBg = '#FFFFFF'
const paper = '#F9F9F9'
const backDrop = 'rgba(0,0,0,0.2)'
// const disabledBg = '#F1F1F1'

// Input Tag Colors
const inputBackgroundColor = '#F9FCFF'
// const inputBorderColor = '#F2F7F6'
// const inputLabelColor = '#005A4B'

// common colors
const whiteColor = '#FFFFFF'
const blackColor = '#000000'

const successColor = '#3BD800'

const errorColor = '#DA1E28'

// Typography colors
const charcoalColor = '#323232'
const steelColor = '#bebfc0'
const smokeColor = '#696b6f'

// Colors
const typographyLight = '#BEBFC0'
const typographyMain = '#696B6F'
const typographyDark = '#323232'

const { typography, variants: typographyVariants } = getTypographyTheme()
const { htmlFontSize } = typography

const defaultTheme = createMuiTheme()

const baseTheme = createMuiTheme({
  palette: {
    type: themeType,
    common: {
      white: { main: whiteColor },
      black: { main: blackColor }
    },
    background: {
      default: defaultBg,
      paper,
      backDrop
    },
    primary: {
      light: primaryColor,
      main: primaryColor,
      dark: primaryColor,
      contrastText: whiteColor
    },
    secondary: {
      light: secondaryColor,
      main: secondaryColor,
      dark: secondaryColor,
      contrastText: whiteColor
    },
    text: {
      primary: charcoalColor,
      secondary: steelColor,
      disabled: charcoalColor,
      hint: smokeColor,
      error: errorColor
    },
    success: { main: successColor },
    error: { main: errorColor },

    typography: {
      light: typographyLight,
      main: typographyMain,
      dark: typographyDark,
      contrastText: ''
    },
    extraColors: {
      cloud: { main: paper },
      charcoal: { main: charcoalColor },
      steel: { main: steelColor },
      smoke: { main: smokeColor },
      white: { main: whiteColor },
      black: { main: blackColor },
      error: { main: errorColor },
      inputBorder: { main: '#D1E8FF' },
      inputBackground: { main: '#F9FCFF' },
      textInputBackGroundColor: { main: inputBackgroundColor }
    }
  },
  typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
          fontSize: htmlFontSize
        }
      }
    },

    MuiContainer: {
      root: {
        [defaultTheme.breakpoints.down('sm')]: {
          paddingLeft: '0px',
          paddingRight: '0px'
        },
        backgroundColor: whiteColor
      }
    },
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      root: {
        textTransform: 'none',
        padding: 16,
        borderRadius: defaultTheme.spacing(1)
      },
      containedPrimary: {
        color: whiteColor
      },
      containedSecondary: {
        color: primaryColor
      },
      contained: {
        boxShadow: 'none',
        '&$disabled': {
          color: whiteColor,
          backgroundColor: steelColor
        }
      },
      // outlined: {
      //   borderColor: typographyLight
      // },
      outlinedPrimary: {
        borderColor: typographyLight
      },
      containedSizeLarge: {
        fontSize: '1.25rem',
        borderRadius: defaultTheme.spacing(1),
        paddingTop: defaultTheme.spacing(1),
        paddingBottom: defaultTheme.spacing(1)
      },
      outlinedSizeLarge: {
        borderRadius: defaultTheme.spacing(1),
        paddingTop: defaultTheme.spacing(1.5),
        paddingBottom: defaultTheme.spacing(1.5)
      },
      label: {
        fontSize: '1rem'
      }
    },

    MuiBackdrop: {
      root: {
        backgroundColor: backDrop
      }
    },

    MuiInputBase: {
      root: {
        backgroundColor: inputBackgroundColor,
        border: `1px solid ${'#D1E8FF'}`,
        borderTopRightRadius: defaultTheme.spacing(0.5),
        borderTopLeftRadius: defaultTheme.spacing(0.5),
        fontSize: '1rem',
        overflow: 'hidden',
        '&$disabled': {
          color: typographyLight,
          backgroundColor: '#F5F5F5',
          border: '1px solid #F1F1F1'
        }
      },
      input: {
        backgroundColor: inputBackgroundColor
      }
    },
    MuiFilledInput: {
      root: {
        maxHeight: '56px'
      },
      // '&$ focused': {
      //   color: secondaryColor
      // },
      underline: {
        '&::before': {
          borderBottom: '1px solid transparent'
        },
        '&::after': {
          borderBottom: `2px solid ${secondaryColor}`
        }
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: 16,
        '&$focused': {
          color: secondaryColor
        },
        '&$disabled': {
          color: typographyLight
        }
      }
    },
    MuiFormHelperText: {
      root: {
        backgroundColor: whiteColor
      }
    },
    MuiTabs: {
      flexContainer: {
        display: "flex",
        justifyContent: "center"
      }
    }
  },
  props: {
    // set default properties

    // Name of the component ⚛️
    MuiLink: {
      underline: 'none'
    },
    MuiButtonBase: {
      // The default props to change
      disableRipple: true // No more ripple, on the whole application 💣!
    },

    MuiTypography: {
      variantMapping: typographyVariants
    }
  }
})

// const responsiveVariants = Object.keys(typographyVariants)
// const theme = responsiveFontSizes(baseTheme, { variants: responsiveVariants, factor: 4 })
const theme = baseTheme

export default theme
