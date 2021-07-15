// import {
//   push,
//   replace
// } from 'connected-react-router'
// import {
//   store
// } from '../configurations/redux/store'
// import moment from 'moment'
// import {
//   ADDRESS_ROUTE,
//   BUSINESS_ROUTE,
//   ETB_ROUTE,
//   FAMILY_ROUTE,
//   PERSONAL_INFO_ROUTE,
//   MCA_ADDRESS_ROUTE,
//   MCA_BUSINESS_ROUTE,
//   MCA_FAMILY_ROUTE,
//   MCA_PERSONAL_INFO_ROUTE,
//   SOMETHING_WENT_WRONG_ROUTE,
//   MCA_EKYC_ROUTE
// } from '../configurations/routing/routeConstants'
// import {
//   replaceRoute
// } from './router'

// const isAuthenticated = () => {
//   const isDEV = process.env.IS_DEV
//   console.log('IS DEV Variable', isDEV)
//   if (isDEV === 'false') {
//     const globalStore = store.getState()

//     console.log('INSIDE GLOBAL STORE', globalStore)
//     const {
//       application: { application: { _id: appId } }
//     } = globalStore

//     console.log(appId.length)

//     return appId.length > 0
//   }
//   return false
// }

// const changeRouteWithoutAction = route => {
//   store.dispatch(replace(route))
// }

// const getLocationCoordinates = () => {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   })
// }

// const groupBy = (arr, key) => {
//   console.log(arr)
//   const y = arr.reduce(function (rv, x) {
//     (rv[x[key]] = rv[x[key]] || []).push(x)
//     return rv
//   }, {})

//   const z = Object.keys(y).map((key) => [(key), y[key]])
//   return z
// }

// const validateDate = (dateValue, format = 'YYYY-MM-DD', checkMinor = true) => {
//   let isDateValidate
//   if (dateValue) {
//     const selectedDate = new Date(dateValue)
//     const currDate = new Date()
//     const diff = currDate.getTime() - selectedDate.getTime()
//     const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
//     const yearValue = (parseInt(currDate.getFullYear()) - 100)
//     // console.log('year value', yearValue)
//     // console.log('selected date ', selectedDate)
//     // console.log('age value', age)
//     const ageValue = Math.sign(age)
//     console.log('age is ', age)

//     if (ageValue === -1) {
//       return {
//         isDateValidate,
//         ageGreater: true
//       }
//     }
//     isDateValidate = moment(dateValue, format, true).isValid() && moment(dateValue, 'YYYY-MM-DD', true).isBefore()
//     if (isDateValidate) {
//       if (checkMinor) {
//         // const selectedDate = new Date(dateValue)
//         // const currDate = new Date()
//         // const diff = currDate.getTime() - selectedDate.getTime()
//         // const age = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))

//         if (age >= 100) {
//           console.log('age value', age)
//           return {
//             isDateValidate,
//             isHundred: true,
//             valueOfYear: yearValue

//           }
//         }
//         if (age <= 18) {
//           return {
//             isDateValidate,
//             isMinor: true
//           }
//         } else {
//           return {
//             isDateValidate,
//             isMinor: false
//           }
//         }
//       } else {
//         return isDateValidate
//       }
//     } else {
//       return {
//         isDateValidate
//       }
//     }
//     if (isDateValidate) {
//       return {
//         isDateValidate
//       }
//     } else {
//       return {
//         isDateValidate
//       }
//     }
//   } else {
//     return {
//       isDateValidate
//     }
//   }
// }

// const checkSpecialCharacter = (e, type) => {
//   if (e.key === ' ' && e.target.value.slice(-1) === ' ') {
//     e.preventDefault()
//   } else if (/^([,\/\.]+)$/.test(e.key) && /^([,\/\.]+)$/.test(e.target.value.slice(-1))) {
//     e.preventDefault()
//   } else if (!type && !/^([a-zA-Z0-9 ,\/\.\_]+)$/.test(e.key)) {
//     e.preventDefault()
//   } else if (type === 'digit' && !/[0-9]+/.test(e.key)) {
//     e.preventDefault()
//   } else if (type === 'alpha' && !/[a-zA-Z ]+/.test(e.key)) {
//     e.preventDefault()
//   } else if (type === 'alphanumeric' && !/[a-zA-Z0-9]+/.test(e.key)) {
//     e.preventDefault()
//   }
// }

// const checkPastedText = (e, type) => {
//   const pastedText = e.clipboardData.getData('text')
//   console.log(pastedText, type, 'pastedText')
//   if (!type && !/^[0-9a-zA-Z ,\/\.\_]+$/.test(pastedText)) {
//     e.preventDefault()
//   } else if (type === 'digit' && !/^\d+$/.test(pastedText)) {
//     e.preventDefault()
//   } else if (type === 'alpha' && !/^[a-zA-Z ]+$/.test(pastedText)) {
//     e.preventDefault()
//   }
//   // else if (type === 'alphaNumeric' && !/^[a-zA-Z0-9]+$/.test(pastedText)) {
//   //   e.preventDefault()
//   // }
// }

// const errorEvaluate = (response, enqueueSnackbar, successMsg) => {
//   console.log(response)
//   if (response.code) {
//     const {
//       showToast,
//       notification,
//       redirectTo
//     } = response
//     console.log('ERROR VALUE', response)
//     if (showToast && (!redirectTo || redirectTo === 'NONE')) {
//       enqueueSnackbar(notification.message || 'Something went wrong', {
//         variant: notification.variant,
//         anchorOrigin: {
//           horizontal: 'center',
//           vertical: 'top'
//         },
//         autoHideDuration: 6000,
//         preventDuplicate: true,
//         resumeHideDuration: 1000
//       })
//     }

//     if (redirectTo && redirectTo !== 'NONE') {
//       console.log('NONE', redirectTo)
//       replaceRoute(redirectTo)
//       return
//     } else if (redirectTo !== 'NONE') {
//       console.log('NONE')
//       replaceRoute(SOMETHING_WENT_WRONG_ROUTE)
//     }
//     return
//   }
//   // if (response.gtm) {

//   // }

//   if (successMsg) {
//     enqueueSnackbar(successMsg, {
//       variant: 'success',
//       anchorOrigin: {
//         horizontal: 'center',
//         vertical: 'top'
//       },
//       autoHideDuration: 6000,
//       preventDuplicate: true,
//       resumeHideDuration: 1000
//     })
//   }
// }

// const vcipEvaluate = (response, agentResponse) => {
//   if (response.code) {
//     const { redirectTo } = response
//     replaceRoute(redirectTo, { ...response, agentResponse })
//   }
// }

// const addAddressLinesFromAddressFields = (addressInFields) => {
//   const {
//     building = '',
//     street = '',
//     landmark = ''
//   } = addressInFields
//   const unsanitizedAddress = `${building}, ${street}, ${landmark}`
//   const address = sanitizeString(unsanitizedAddress)
//   const addressLinesArray = chunkString(address, 40)
//   const newFields = {}
//   newFields.addressLine1 = addressLinesArray[0] || ''
//   newFields.addressLine2 = addressLinesArray[1] || ''
//   newFields.addressLine3 = addressLinesArray[2] || ''
//   newFields.addressLine4 = addressLinesArray[3] || ''
//   newFields.addressLine5 = addressLinesArray[4] || ''
//   newFields.addressLines = addressLinesArray.join(', ')
//   return { ...addressInFields, ...newFields }
// }

// const sanitizeString = (str = '') => {
//   return str.trim().replace(/([,. ][,. ])\1+/g, '$1').replace(/^[,. ]/, '').replace(/[,. ]+$/, '').trim()
// }

// const chunkString = (str, length) => {
//   const chunks = str.match(new RegExp(`.{1,${length}}`, 'g')) || []
//   const chunksSanitized = chunks.map(chunk => sanitizeString(chunk))
//   return chunksSanitized
// }

// const convertStringDotNotationToArray = (stringArray) => {
//   const loopObject = {}
//   stringArray.map((fVal, fInd) => {
//     const splitString = fVal.split('.')
//     splitString.reduce((result, key, index, array) => {
//       if (result[key] === true) { array.splice(1) }
//       if (!result[key]) { return result[key] = (key === splitString[splitString.length - 1]) ? true : {} } else { return result[key] }
//     }, loopObject)
//   })
//   return loopObject
// }

// const getObjectBasedOnPage = (key, result) => {
//   let hiddenObject = {}
//   switch (key) {
//     case 'personal':
//     case 'family':
//     case 'address':
//     case 'business':
//       hiddenObject = result.profile
//       // if (result.profile && result.profile[key])
//       //   hiddenObject = result.profile[key]
//       break
//     case 'etb':
//     case 'mca-ekyc':
//       hiddenObject = result
//       break
//     default:
//       hiddenObject = null
//       break
//   }
//   return hiddenObject
// }

// const formikPageMapper = {
//   [ETB_ROUTE]: 'etb',
//   [MCA_EKYC_ROUTE]: 'mca-ekyc',
//   [PERSONAL_INFO_ROUTE]: 'personal',
//   [FAMILY_ROUTE]: 'family',
//   [ADDRESS_ROUTE]: 'address',
//   [BUSINESS_ROUTE]: 'business',
//   [MCA_ADDRESS_ROUTE]: 'address',
//   [MCA_BUSINESS_ROUTE]: 'business',
//   [MCA_FAMILY_ROUTE]: 'family',
//   [MCA_PERSONAL_INFO_ROUTE]: 'personal'

// }

// const getHiddenJsonAccordingToPage = (stringArray, pagePath) => {
//   const convertToObject = convertStringDotNotationToArray(stringArray)
//   console.log(convertToObject)
//   const pageKey = formikPageMapper[pagePath]
//   return getObjectBasedOnPage(pageKey, convertToObject)
// }

// function clearEmpties(o) {
//   for (const k in o) {
//     if (!o[k] || typeof o[k] !== 'object') {
//       continue
//     }

//     // The property is an object
//     if (Object.keys(o[k]).length === 0) {
//       delete o[k] // The object had no properties, so delete that property
//     }
//   }
// }

// const clearRedundantErrors = (obj1, obj2) => {
//   let counter = 0
//   Object.keys(obj1).map((key, index) => {
//     if (obj2[key]) {
//       if (obj2[key] === true) {
//         delete (obj1[key])
//       } else {
//         const insideErrors = clearRedundantErrors(obj1[key], obj2[key])
//         if (!insideErrors.errorCount) {
//           delete (obj1[key])
//         } else {
//           counter = counter + 1
//         }
//       }
//     } else {
//       counter = counter + 1
//     }
//   })
//   return { errorCount: counter, errorObj: obj1 }
// }

// export {
//   isAuthenticated,
//   changeRouteWithoutAction,
//   getLocationCoordinates,
//   groupBy,
//   validateDate,
//   checkSpecialCharacter,
//   checkPastedText,
//   errorEvaluate,
//   vcipEvaluate,
//   addAddressLinesFromAddressFields,
//   convertStringDotNotationToArray,
//   getObjectBasedOnPage,
//   formikPageMapper,
//   getHiddenJsonAccordingToPage,
//   clearRedundantErrors
// }
