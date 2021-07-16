import React from "react"
import styled from "styled-components"

import map from '../../assets/Dust_map.svg'
import bluedust from '../../assets/bluedust.svg'
import greendust from '../../assets/greendust.svg'

const Wrapper1 = styled.div`
  display: relative;
  width: 100%;
  height: 100%;
`

const Map = styled.image`
  display: absolute;
  flex-direction: column;
  align-items: center;
  background: white;
  border: black;
  outline: black;
  margin-left: 19%;
  margin-top: 0%;
  height: 100%;
  width: 100%;
`

const dust1 = styled.image`
  width: 100%;
  display: absolute;
  background: white;
  margin-left: 19%;
  margin-top: 0%;
`


function DustMap() {
    return(
        <div>
            <Wrapper1>
                <Map><img style={{width:"400px", height:"400px",marginTop:"0px"}} src={map}/></Map>
                <dust1> <img style={{width:"30px", height:"30px"}}src={bluedust}/> </dust1>
            </Wrapper1>
        </div>
    )
}
export default DustMap;