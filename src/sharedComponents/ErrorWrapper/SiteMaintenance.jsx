
// import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
// import { Box, Button } from '@material-ui/core'
// import MaterialTypography from '../../sharedComponents/materialComponents/typography/MaterialTypography'
// import icon from './Rectangle.png'
// import { APPLICATION_REDUCER_KEY, ERROR_MODULE_REDUCER_KEY } from '../../configurations/redux/keys'
// import { withRouter } from 'react-router'
// import { connect } from 'react-redux'
// import { withSnackbar } from 'notistack'

// class SiteMaintenance extends PureComponent {
//   constructor() {
//     super()
//     this.state = {
//       redUrl: ''
//     }
//   }

//   componentDidMount() {
//     // setTimeout(() => {
//     if (window.sessionStorage.hasOwnProperty('siteBaseUrl')) {
//       const baseUrl = JSON.parse(window.sessionStorage.getItem('siteBaseUrl'))
//       const selectedProduct = JSON.parse(window.sessionStorage.getItem('selectedProduct'))
//       let siteBaseUrl = baseUrl

//       if (selectedProduct.productId === 'INDIVIDUAL_WITH_LOAN') {
//         siteBaseUrl = siteBaseUrl + 'productListing'
//       } else if (selectedProduct.productId === 'INDIVIDUAL_WITH_TERM_LOAN') {
//         siteBaseUrl = siteBaseUrl + 'product-landing'
//       }
//       this.setState({ redUrl: siteBaseUrl })
//       console.log(siteBaseUrl, 'siteBaseUrl')
//       console.log(selectedProduct, 'selectedProduct')
//       // window.location.href = siteBaseUrl
//     }

//     const { application: { application: { frontendMeta: { redirectType, redirectTimer } } }, error } = this.props

//     console.log('error CDM', error)
//     if (error?.autoRedirect) {
//       const fallBackUrl = JSON.parse(window.sessionStorage.getItem('fallBackUrl'))
//       const updatedUrl = (fallBackUrl ? (fallBackUrl + "?status='ACCEPTED'&application_id=" + appId) : window.location.origin)
//       const timeOutVal = parseInt(redirectTimer) * 1000
//       console.log('TIMEOUT VALUE', timeOutVal)
//       if (redirectType === 'AUTO_REDIRECT') {
//         console.log('inside auto redirect ERROR')
//         setTimeout(() => {
//           window.location.href = updatedUrl
//         }, timeOutVal)
//       }
//     }
//     // }, 10000)
//   }

//   render() {
//     const { title, paragraph } = this.props
//     const { redUrl } = this.state
//     console.log(redUrl, 'redUrl')
//     return (
//       <>
//         <Box
//           flexGrow={1}
//           display='flex'
//           flexDirection='column'
//           justifyContent='space-between'
//         >
//           <Box>
//             <Box pt={10} justifyContent='center' display='flex'>
//               <img src={icon} alt='icon' height='252px' width='252px' />
//             </Box>
//             <Box pt={2} textAlign='center'>
//               <MaterialTypography variant='subtitle1' gutterBottom>{title}</MaterialTypography>
//               <MaterialTypography color='textSecondary' variant='hp1'>{paragraph}</MaterialTypography>
//             </Box>
//           </Box>
//           {/* <Box
//             position='sticky'
//             bottom='0'
//             pb={4}
//             p={2}
//             bgcolor='background.default'
//             direction='row' display='flex'
//           >
//             <Box m={0.5} width='100%'>
//               <Button
//                 onClick={() => {
//                   window.location.href = redUrl
//                 }}
//                 fullWidth variant='contained'
//                 color='primary'
//                 size='large'
//               >Go To Home
//               </Button>
//             </Box>
//           </Box> */}
//         </Box>
//       </>
//     )
//   }
// }
// SiteMaintenance.propTypes = {
//   title: PropTypes.string.isRequired,
//   paragraph: PropTypes.string
// }
// SiteMaintenance.defaultProps = {
//   paragraph: 'Thank you for your patience',
//   title: 'SITE UNDER MAINTENANCE!'
// }

// const mapStateToProps = state => ({
//   application: state[APPLICATION_REDUCER_KEY],
//   loading: state[APPLICATION_REDUCER_KEY].loading,
//   error: state[ERROR_MODULE_REDUCER_KEY]
// })

// const mapDispatchToProps = dispatch => ({
// })

// export default withRouter(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(withSnackbar(SiteMaintenance))
// )
