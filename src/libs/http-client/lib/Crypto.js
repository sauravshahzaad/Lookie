'use strict'

import { Aes, AesUtils, Pgp } from '@m92/crypto'

const crypto = {
  encrypt,
  decrypt
}

export default crypto

async function encrypt (algorithm, payload, keyData, options = {}) {
  switch (algorithm) {
    case 'aes-256-gcm': {
      const encryptedData = await _aes256Encryptor(payload, keyData, options)
      return encryptedData
    }
    case 'pgp': {
      const encryptedData = await _pgpEncryptor(payload, keyData, options)
      return encryptedData
    }
    default:
      return payload
  }
}

async function decrypt (algorithm, payload, keyData, options = {}) {
  switch (algorithm) {
    case 'aes-256-gcm': {
      const decryptedData = await _aes256Decryptor(payload, keyData, options)
      return decryptedData
    }
    default:
      return payload
  }
}

async function _aes256Encryptor (body, keyData, options) {
  const { token } = keyData
  const encryptionKey = AesUtils.extractKeyFromToken(token)
  const bodyString = JSON.stringify(body)
  const encryptParams = {
    key: encryptionKey,
    data: bodyString
  }
  const encryptedDataObj = Aes.encrypt('aes-256-gcm', encryptParams, options)
  const { payload } = encryptedDataObj
  const encryptedBody = { payload }
  return encryptedBody
}

async function _aes256Decryptor (body, keyData, options) {
  const { token } = keyData
  const { data } = body
  if (!token) {
    return body
  }
  const decryptionKey = AesUtils.extractKeyFromToken(token)
  const { payload = '' } = data
  const decryptParams = { key: decryptionKey, payload }
  const decryptedDataObj = Aes.decrypt('aes-256-gcm', decryptParams)
  const { data: decryptedDataString } = decryptedDataObj
  const decryptedData = JSON.parse(decryptedDataString)
  return decryptedData
}

async function _pgpEncryptor (body, keyData, options) {
  const {
    pgpPublicKey: publicKeyArmored,
    pgpPassphrase: passphrase,
    pgpUserId: userIds
  } = keyData
  const params = {
    data: body,
    publicKeyArmored,
    passphrase,
    userIds
  }

  const encrptedBody = await Pgp.encrypt(params)
  return encrptedBody
}
