import axios from 'axios'
import {COVID_MAIN,COVID_NATIONAL,COVID_REGIONAL} from './type'

import { USER_SERVER } from "../config";



export const covidMain =(lat, lon) =>{
    const request=axios.get(`${USER_SERVER}/covid/main?lat=${lat}&lon=${lon}`)
    .then(response => response.data)
    return{
        type:COVID_MAIN,
        payload:request
    }
}

export const covidNational =() =>{
    const request=axios.get(`${USER_SERVER}/covid/national`)
    .then(response => response.data)
    return{
        type:COVID_NATIONAL,
        payload:request
    }
}

export const covidRegional =(lat, lon) =>{
    const request=axios.get(`${USER_SERVER}/covid/regional?lat=${lat}&lon=${lon}`)
    .then(response => response.data)
    return{
        type:COVID_REGIONAL,
        payload:request
    }
}