'use strict'

import axios from 'axios'
import qs from 'qs'
import ApiError from './ApiError'
import dataStore from '../helpers/dataStore'
import DEFAULT_CONSTANTS from '../defaults/CONSTANTS'
import DEFAULT_CONFIG from '../defaults/CONFIG'
import crypto from './Crypto'

const { ERROR_CLASSIFICATIONS } = ApiError
const { getAccessToken, setAccessToken, getApiKey, setApiKey, getSessionId, setSessionId } = dataStore

export default function HttpClientCreator(CONFIG, CONSTANTS = {}) {
  const _CONFIG = { ...DEFAULT_CONFIG, ...CONFIG }
  const _CONSTANTS = { ...DEFAULT_CONSTANTS, ...CONSTANTS }

  const {
    API_KEY,
    DISABLE_CRPTOGRAPHY,
    REQUEST_ENCRYPTION_ALOGORITHM,
    RESPONSE_DECRYPTION_ALOGORITHM,
    API_ROUTES
  } = _CONFIG

  console.log(_CONFIG, 'CONFIG')
  const { _BASE, ...ROUTE_PATHS } = API_ROUTES
  const routesPresent = !!Object.keys(ROUTE_PATHS || {}).length
  if (!_BASE && routesPresent) {
    console.warn('HttpClientCreator: _BASE is not passed in API_ROUTES')
  }

  setApiKey(API_KEY)

  return class HttpClient {
    constructor(options = {}) {
      this.httpClientOptions = options

      // Function Binding
      this.attachRequestManager = this.attachRequestManager.bind(this)

      this.requestInterceptor = this.requestInterceptor.bind(this)
      this.requestInterceptorError = this.requestInterceptorError.bind(this)

      this.responseInterceptor = this.responseInterceptor.bind(this)
      this.responseInterceptorError = this.responseInterceptorError.bind(this)

      // Attching request manager
      this.attachRequestManager()
    }

    attachRequestManager() {
      const { TIMEOUT } = _CONSTANTS
      const requestManager = axios.create({
        baseURL: _BASE,
        timeout: TIMEOUT,
        validateStatus
      })

      // Attaching Interceptors
      requestManager.interceptors.request.use(
        this.requestInterceptor,
        this.requestInterceptorError
      )
      requestManager.interceptors.response.use(
        this.responseInterceptor,
        this.responseInterceptorError
      )
      this.requestManager = requestManager
    }

    async requestInterceptor(request) {
      try {
        const { httpClientOptions } = this
        const { requestEncryptionAlgorithm } = httpClientOptions

        const { headers, data } = request
        const encryptOptions = { requestEncryptionAlgorithm }

        const transformedHeaders = transformRequestHeaders(headers)
        const transformedData = await encryptRequestData(data, encryptOptions)

        const transformedRequest = {
          ...request,
          data: transformedData,
          headers: transformedHeaders
        }
        return transformedRequest
      } catch (error) {
        throw new ApiError(request)
      }
    }

    requestInterceptorError(error) {
      const classification = ERROR_CLASSIFICATIONS.CODE
      const errorParams = {
        statusCode: -2,
        classification
      }
      throw new ApiError(error, errorParams)
    }

    async responseInterceptor(response) {
      try {
        const { httpClientOptions } = this
        const { responseDecryptionAlgorithm } = httpClientOptions

        const { data, headers } = response
        const decryptionOptions = { responseDecryptionAlgorithm }
        const extractedHeaders = extractResponseHeaders(headers)
        const { token, sessionId } = extractedHeaders
        setAccessToken(token)
        setSessionId(sessionId)

        const transformedData = await decryptResponseData(extractedHeaders, data, decryptionOptions)
        handleDecryptedResponse(transformedData)

        console.log(transformedData, 'decrypted data')
        const transformedResponse = {
          ...response,
          data: transformedData
        }
        return transformedResponse
      } catch (error) {
        throw new ApiError(error)
      }
    }

    responseInterceptorError(error) {
      handleApiError(error)
    }

    request(options) {
      const requestOptions = formatRequestOptions(options)
      return this.requestManager.request(requestOptions)
    }
  }

  function transformRequestHeaders(headers) {
    const { ACCESS_TOKEN_REQUEST_HEADER_KEY, API_KEY_HEADER_KEY, SESSION_ID_REQUEST_HEADER_KEY } = _CONSTANTS

    const token = getAccessToken()
    const sessionId = getSessionId()
    const apiKey = getApiKey()

    const transformedHeaders = {
      [ACCESS_TOKEN_REQUEST_HEADER_KEY]: token,
      [API_KEY_HEADER_KEY]: apiKey,
      [SESSION_ID_REQUEST_HEADER_KEY]: sessionId,

      ...headers
    }
    return transformedHeaders
  }

  function extractResponseHeaders(headers) {
    const { ACCESS_TOKEN_RESPONSE_HEADER_KEY, SESSION_ID_RESPONSE_HEADER_KEY } = _CONSTANTS
    const token = headers[ACCESS_TOKEN_RESPONSE_HEADER_KEY.toLowerCase()]
    const sessionId = headers[SESSION_ID_RESPONSE_HEADER_KEY.toLowerCase()]
    return { token, sessionId }
  }

  async function encryptRequestData(requestData = {}, options = {}) {
    if (DISABLE_CRPTOGRAPHY) { return requestData }

    console.log(requestData, 'response')
    console.log(options, 'extractedHeaders')
    const { requestEncryptionAlgorithm } = options
    const encryptionAlgorithm = requestEncryptionAlgorithm || REQUEST_ENCRYPTION_ALOGORITHM
    const token = getAccessToken()
    const keyData = { token }
    const encryptedData = await crypto.encrypt(encryptionAlgorithm, requestData, keyData)
    return encryptedData
  }

  async function decryptResponseData(extractedHeaders, responseData, options = {}) {
    if (DISABLE_CRPTOGRAPHY) { return responseData }

    console.log(responseData, 'response')
    console.log(extractedHeaders, 'extractedHeaders')
    const { responseDecryptionAlgorithm } = options
    const encryptionAlgorithm = responseDecryptionAlgorithm || RESPONSE_DECRYPTION_ALOGORITHM
    const { token } = extractedHeaders
    const keyData = { token }
    const decryptedData = await crypto.decrypt(encryptionAlgorithm, responseData, keyData)
    return decryptedData
  }

  function handleDecryptedResponse(decryptedData) {
    const { statusCode, status, message, data, error } = decryptedData

    // Handling for not our api data structure
    if (!statusCode && !status && !message && (data || error)) {
      return decryptedData
    }

    const isValidResponse = validateStatus(statusCode)
    if (!isValidResponse) {
      const errorMap = {
        statusCode,
        message,
        classification: ERROR_CLASSIFICATIONS.API_CALL
      }
      throw new ApiError(decryptedData, errorMap)
    }
  }

  function handleApiError(error) {
    const { request, response } = error
    // Handle Axios Response Error
    if (response) {
      const { status, data: body } = response
      const { statusCode, message } = body
      const classification = ERROR_CLASSIFICATIONS.API_CALL

      const errorParams = {
        statusCode: (statusCode || status),
        message: (message || undefined),
        classification
      }
      const errorObj = body
      const err = new ApiError(errorObj, errorParams)
      throw err
    }

    // Handle Axios Request Error
    if (request) {
      const classification = ERROR_CLASSIFICATIONS.NETWORK_ERROR
      const { message } = error
      const errorParams = {
        statusCode: -1,
        message,
        classification
      }
      const err = new ApiError(error, errorParams)
      // logger.error(err.message, err)
      delete err.error.stack
      throw err
    }

    // Handle any other form of error
    const classification = ERROR_CLASSIFICATIONS.CODE
    const errorParams = {
      statusCode: -2,
      classification
    }
    const err = new ApiError(error, errorParams)
    // logger.error(err.message, err)
    throw err
  }

  function validateStatus(status) {
    return status >= 200 && status < 300
  }

  function formatRequestOptions(options) {
    const { apiPath = '', urlParams = {}, queryParams = {}, url, method, ...requestOptions } = options

    let { path: _url, method: _method } = (apiPath && getPathFromApiRoutes(apiPath)) || url
    _url = replaceUrlParams(_url, urlParams)
    const qsOptions = { arrayFormat: 'comma', allowDots: true, addQueryPrefix: true }
    _url += qs.stringify(queryParams, qsOptions)

    const reqOptions = {
      ...requestOptions,
      url: _url,
      method: _method
    }
    return reqOptions
  }

  function getPathFromApiRoutes(apiPath) {
    const apiPathParts = apiPath.split('.')
    const apiPathPartsLength = apiPathParts.length
    let path = JSON.parse(JSON.stringify(API_ROUTES))
    let method = 'GET'
    apiPathParts.forEach((key, index) => {
      path = path[key] || {}
      if (index === (apiPathPartsLength - 1)) {
        method = key
      }
    })
    return { path, method }
  }

  function replaceUrlParams(pathWithParams, urlParams) {
    let url = pathWithParams
    Object.keys(urlParams).forEach(key => {
      const value = urlParams[key]
      url = url.replace(`:${key}`, value)
    })
    return url
  }
}
