import React from "react"
import styled from "styled-components"

import map from '../../assets/Dust_map.svg'
import bluedust from '../../assets/bluedust.svg'
import greendust from '../../assets/greendust.svg'

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

const Map = styled.img`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  border: black;
  outline: black;
  margin-top: -1%;
  margin-left: 15%;

  width: 400px;
  height: 400px;

  @media (max-width: 375px) {
    //iphone
    width: 80px;
    height: 80px;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    width: 300px;
    height: 300px;
    margin-left: 5%;
  }
`

const DustCircle1 = styled.div`
  position: relative;
  left: -115px;
  top: 30px;
  opacity: 0.6;
`

const DustCircle2 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -45px;
  top: -30px;
`
const DustCircle3 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -38px;
  top: -10px;
`
const DustCircle4 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -150px;
  top: 6px;
`
const DustCircle5 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -100px;
  top: 70px;
`
const DustCircle6 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -220px;
  top: 60px;
`
const DustCircle7 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -350px;
  top: 90px;
`
const DustCircle8 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -260px;
  top: 85px;
`
const DustCircle9 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -385px;
  top: 80px;
`
const DustCircle10 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -410px;
  top: 115px;
`
const DustCircle11 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -545px;
  top: 110px;
`
const DustCircle12 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -505px;
  top: 150px;
`
const DustCircle13 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -480px;
  top: 125px;
`
const DustCircle14 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -470px;
  top: 130px;
`
const DustCircle15 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -800px;
  top: 100px;
`
const DustCircle16 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -800px;
  top: 160px;
`
const DustCircle17 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -840px;
  top: 200px;
`
const DustCircle18 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -827px;
  top: 170px;
`
const DustCircle19 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -817px;
  top: 190px;
`
const DustCircle20 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -860px;
  top: 250px;
`
const DustCircle21 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -953px;
  top: 244px;
`
const DustCircle22 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -875px;
  top: 220px;
`
const DustCircle23 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -855px;
  top: 210px;
`
const DustCircle24 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -840px;
  top: 190px;
`
const DustCircle25 = styled.div`
  position: relative;
  opacity: 0.6;
  left: -850px;
  top: 130px;
`



function DustMap() {
    return(
        <div>
            <Wrapper1>
                <Map src={map}></Map>
                <DustCircle1> <img style={{width:"40px", height:"40px"}}src={bluedust}/> </DustCircle1>
                <DustCircle2> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle2>
                <DustCircle3> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle3>
                <DustCircle4> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle4>
                <DustCircle5> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle5>
                <DustCircle6> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle6>
                <DustCircle7> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle7>
                <DustCircle8> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle8>
                <DustCircle9> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle9>
                <DustCircle10> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle10>
                <DustCircle11> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle11>
                <DustCircle12> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle12>
                <DustCircle13> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle13>
                <DustCircle14> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle14>
                <DustCircle15> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle15>
                <DustCircle16> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle16>
                <DustCircle17> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle17>
                <DustCircle18> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle18>
                <DustCircle19> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle19>
                <DustCircle20> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle20>
                <DustCircle21> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle21>
                <DustCircle22> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle22>
                <DustCircle23> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle23>
                <DustCircle24> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle24>
                <DustCircle25> <img style={{width:"40px", height:"40px"}}src={greendust}/> </DustCircle25>
            </Wrapper1>
        </div>
    )
}
export default DustMap;