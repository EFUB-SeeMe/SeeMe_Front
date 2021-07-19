import axios from 'axios'
import {COVID_MAIN} from './type'

import { USER_SERVER } from "../config";



export const covidMain =(lat, lon) =>{
    const request=axios.get(`${USER_SERVER}/covid/main?lat=${lat}&lon=${lon}`)
    .then(response => response.data)
    return{
        type:COVID_MAIN,
        payload:request
    }
}
