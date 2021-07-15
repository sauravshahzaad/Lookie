'use strict'

let accessToken = ''
let apiKey = ''
let sessionId = ''

const dataStore = {
  getAccessToken,
  setAccessToken,
  getApiKey,
  setApiKey,
  getSessionId,
  setSessionId
}
export default dataStore

function getAccessToken () { return accessToken }
function setAccessToken (_accessToken) { accessToken = _accessToken }
function getApiKey () { return apiKey }
function setApiKey (_apiKey) { apiKey = _apiKey }
function getSessionId () { return sessionId }
function setSessionId (_sessionId) { sessionId = _sessionId }
