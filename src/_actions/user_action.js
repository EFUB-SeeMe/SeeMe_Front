import axios from 'axios'

import {
  COVID_MAIN,
  COVID_NATIONAL,
  COVID_REGIONAL,
  LAT_TO_ADD,
  DUST_MAIN,
  MICRO_DUST,
  CAI_MAIN,
  WEATHER_MAIN,
  LAT_TO_CODE,
  COVID_NUM,
  WEATHER_TIME
} from './type'

import { USER_SERVER } from '../config'

export const covidMain = (lat, lon) => {
  const request = axios
    .get(`${USER_SERVER}/covid/main?lat=${lat}&lon=${lon}`)
    .then(response => response.data)
  return {
    type: COVID_MAIN,
    payload: request,
  }
}

export const covidNational = () => {
  const request = axios
    .get(`${USER_SERVER}/covid/nation`)
    .then(response => response.data)
  return {
    type: COVID_NATIONAL,
    payload: request,
  }
}

export const covidRegional = (lat, lon) => {
  const request = axios
    .get(`${USER_SERVER}/covid/region?lat=${lat}&lon=${lon}`)
    .then(response => response.data)
  return {
    type: COVID_REGIONAL,
    payload: request,
  }
}

export const latToAdd = (lat, lon) => {
  const request = axios
    .get(`${USER_SERVER}/location/latlon2address?lat=${lat}&lon=${lon}`)
    .then(response => response.data)
  return {
    type: LAT_TO_ADD,
    payload: request,
  }
}

export const latToCode = (lat, lon) => {
  const request = axios
    .get(`${USER_SERVER}/location/latlon?lat=${lat}&lon=${lon}`)
    .then(response => response.data)
  return {
    type: LAT_TO_CODE,
    payload: request,
  }
}

// Micro Dust Page
export const dustMain = (lat, lon) => {
  const request = axios
    .get(`${USER_SERVER}/microdust/main?lat=${lat}&lon=${lon}`)
    .then(response => response.data)
  return {
    type: DUST_MAIN,
    payload: request,
  }
}

export const micro_dust = (dust, microdust, date) => {
  const request = axios
    .get(
      `${USER_SERVER}/microdust/day?dust=${dust}&microdust=${microdust}&date=${date}`
    )
    .then(response => response.data)
  return {
    type: MICRO_DUST,
    payload: request,
  }
}
export const cai_main = (so2, co, o3, no2) => {
  const request = axios
    .get(
      `${USER_SERVER}/microdust/main?so2=${so2}&co=${co}&o3=${o3}&no2=${no2}`
    )
    .then(response => response.data)
  return {
    type: CAI_MAIN,
    payload: request,
  }
}
// Main Page
export const weatherMain = (lat, lon) => {
  const request = axios
    .get(`${USER_SERVER}/weather/main?lat=${lat}&lon=${lon}`)
    .then(response => response.data)
  return {
    type: WEATHER_MAIN,
    payload: request,
  }
}
export const covidNum = (day, code) => {
  const request = axios.get(`https://apis.openapi.sk.com/safecaster/v1/search/safetyindex/ldongcd/overall?filterDate=${day}&ldongCd=${code}`,{
    headers: {
      appKey: 'l7xx1a0daf5b7aff40cdad64beac6423a77e' //the token is a variable which holds the token'
  }
  })
    .then(response => response.data)
  return {
    type: COVID_NUM,
    payload: request,
  }
}
export const weatherTime = (lat, lon) => {
  const request = axios
  .get(`${USER_SERVER}/weather/time?lat=${lat}&lon=${lon}`)
    .then(response => response.data)
  return {
    type: WEATHER_TIME,
    payload: request,
  }
}
