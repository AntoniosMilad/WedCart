/**
 * @type {typeof import('rn-crypto-js')}
 */
import CryptoJS from 'rn-crypto-js';
import base64 from 'base-64';
import {
  keyEncoder,
  ivEncoder,
  expireSecondsEncoder,
  appIdEncoder,
  appKeyEncoder,
} from 'Constants/BodyEncryptConfig';

export function bodyEncoderCrypto(bodyData: Record<string, any>) {
  function encrypt(message: string): string {
    const key = keyEncoder;
    const iv = ivEncoder;
    const keyhex = CryptoJS.enc.Utf8.parse(key);
    const ivhex = CryptoJS.enc.Utf8.parse(iv);

    var encrypted = CryptoJS.TripleDES.encrypt(message, keyhex, {
      iv: ivhex,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return encrypted.toString();
  }

  function hash(message: string): string {
    return CryptoJS.MD5(message).toString();
  }

  function generateId(length: number): string {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  function getExpiryDate() {
    const expireSeconds = expireSecondsEncoder;
    const dateNow = new Date();
    return Math.floor(dateNow.getTime() / 1000) + expireSeconds;
  }

  function buildQuery(parameters: Record<string, any>): string {
    const appId = appIdEncoder;
    const defaultParameters: Record<string, any> = {
      appid: appId,
      expired_date: getExpiryDate(),
      platform: 'android',
      app_version: '11.5',
      channel: 'Website',
    };
    const mergedParameters = {...defaultParameters, ...parameters};
    return JSON.stringify(mergedParameters);
  }

  function generateVerifyToken(
    str: string | null,
    str2: string,
    str3: string,
  ): string | null {
    if (str) {
      return hash(hash(str2) + str3 + str);
    }
    return null;
  }

  function generateEncryptedBody(query: string) {
    const key = keyEncoder;
    const appKey = appKeyEncoder;
    const encryptedQuery = encrypt(query); // Encrypt the query
    const appKeyHash = hash(appKey); // Hash the appKey
    const verify = generateVerifyToken(encryptedQuery, appKey, key); // Generate verify token
    const newBody = {
      app_key: appKeyHash,
      verify: verify,
      encrypt_data: encryptedQuery,
    };

    const jsonString = JSON.stringify(newBody);
    const encodedData = base64.encode(jsonString);
    // console.log('{ data: encodedData }', {data: encodedData});
    return {data: encodedData};
  }

  const query = buildQuery(bodyData);
  return generateEncryptedBody(query);
}
