import React from "react"
import styled from "styled-components"
import { useState } from "react";

import bluedust from '../../assets/bluedust.svg'
import greendust from '../../assets/greendust.svg'

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`
const Text=styled.div`
    background: "rgba( 255, 255, 255, 0 )";
    color:black;
    font-size:  ${props => props.size || 16}px;
    font-family: 'NotoSans';

    margin-top: 15px;
    margin-right: 60px;
    margin-left: 50px;
    width: 100px;

   @media (min-width: 420px) and (max-width: 1440px) {
    //between
    font-size:  ${props => props.size-3 || 16}px;
  }
  @media  (max-width: 420px) {
    //iphone
    margin-left: 20px;
    width: 200px;
  }
`

const Box1=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 50px;
    width:100%;
    height: 10%;
`
const Box2=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 50px;
    width:100%;
    height: 90%;
`


const Button = styled.button`
  height: 42px;
  width: 150px;
  color:black;
  background: #F6F3F3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 20px 20px;
  outline:none;
  border:1px solid rgba(0,0,0,0);
  margin-right: 20px;
  &:hover {
    background:#E9E7FF;
  }
  &:active {
    background: #E9E7FF;
  }

  @media  (max-width: 420px) {
    //iphone
    font-size:10px;
  }
`

const DustCircle = styled.div`
  position: relative;
  left: -170px;
  top: 40px;
  opacity: 0.6;

`

function DustMap({latitude,longitude,dust,microdust}) {
  const [myState, setMyState] = useState({
          "latitude":"",
          "longitude":"",
          "dust":"",
          "microdust":""

  });
  const getData = async () => {
      try {
          setMyState({
              "latitude":latitude,
              "longitude":longitude,
              "dust":dust,
              "microdust":microdust
          });
          console.log(myState);
        }catch (e) {
        console.log("error")
        console.log(myState);
      }
    }
    const getData2 = async () => {
      try {
        setMyState({
            "latitude":latitude,
            "longitude":longitude,
            "dust":dust,
            "microdust":microdust
        });
        console.log(myState);
      }catch (e) {
      console.log("error")
      console.log(myState);
    }
    }
    

  return (
    <div>
    <Wrapper1>
        <Box1>
          <Text>{"지역별 농도"}</Text>
          <Button onClick={getData} > 미세먼지 </Button>
          <Button onClick={getData2} > 초미세먼지 </Button>
        </Box1>
        <Box2> 

        </Box2>
    </Wrapper1>
</div>
  )
}
export default DustMap;