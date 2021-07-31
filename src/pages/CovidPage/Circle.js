import { exportDefaultSpecifier } from "@babel/types"
import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width:200px;
  height:200px;
  margin-top: 30px;
  display: center;
  margin-right: 40px;
  @media (max-width: 420px) {
    //iphone
    display:none
  }
  @media (min-width: 844px) and (max-width: 1440px) {
    //between
     margin-top:15px;
     margin-right: 50px;
     width:150px;
  }
  @media (min-width: 420px) and (max-width: 843px) {
    // ipad
    margin-top:15px;
     margin-right: 0px;
     width:120px;
  }
`

const ColorCircle=styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(255,108,108,0.2);
    border:8px solid rgba(255,108,108,1);
    text-align: center;
    font-size: 27px;
    color:rgba(255,108,108,1);
    font-family: 'NotoSansBold';
`
const ColorCircle2=styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(254,177,83,0.2);
    border:8px solid rgba(254,177,83,1);
    text-align: center;
    font-size: 27px;
    color:rgba(254,177,83,1);
    font-family: 'NotoSansBold';
`
const ColorCircle3=styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(135,239,133,0.2);
    border:8px solid rgba(135,239,133,1);
    text-align: center;
    font-size: 27px;
    color:rgba(135,239,133,1);
    font-family: 'NotoSansBold';
`
const ColorCircle4=styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: rgba(133,191,239,0.2);
    border:8px solid rgba(133,191,239,1);
    text-align: center;
    font-size: 27px;
    color:rgba(133,191,239,1);
    font-family: 'NotoSansBold';
`
const FontWrapper=styled.div`
  font-size: 20px;
  color:rgba(255,108,108,1);
  font-family: 'NotoSansBold';
  margin-top: 10px;
  margin-left: 20px;
`
const FontWrapper2=styled.div`
  font-size: 20px;
  color:rgba(254,177,83,1);
  font-family: 'NotoSansBold';
  margin-top: 10px;
  margin-left: 40px;
`
const FontWrapper3=styled.div`
  font-size: 20px;
  color:rgba(135,239,133,1);
  font-family: 'NotoSansBold';
  margin-top: 10px;
  margin-left: 40px;
`
const FontWrapper4=styled.div`
  font-size: 20px;
  color:rgba(133,191,239,1);
  font-family: 'NotoSansBold';
  margin-top: 10px;
  margin-left: 40px;
`

function Circle({num}) {
    if(num<=100&&num>=91){
    return (
        <Wrapper >
           <ColorCircle > <p style={{fontSize:"15px",fontFamily:"NotoSans",margin:"0px"}}>안전지수</p> {num} </ColorCircle>
           <FontWrapper>{"매우나쁨"}</FontWrapper>
        </Wrapper>
    );}
    else if(num<=90&&num>=71){
        return(
        <Wrapper >
           <ColorCircle2 > <p style={{fontSize:"15px",fontFamily:"NotoSans",margin:"0px"}}>안전지수</p> {num} </ColorCircle2>
           <FontWrapper2>{"나쁨"}</FontWrapper2>
        </Wrapper>);
    }
    else if (num<=70&&num>=51){
        return(
        <Wrapper >
           <ColorCircle3 > <p style={{fontSize:"15px",fontFamily:"NotoSans",margin:"0px"}}>안전지수</p> {num} </ColorCircle3>
           <FontWrapper3>{"보통"}</FontWrapper3>
        </Wrapper>);
    }else{
        return(
        <Wrapper >
           <ColorCircle4 > <p style={{fontSize:"15px",fontFamily:"NotoSans",margin:"0px"}}>안전지수</p> {num} </ColorCircle4>
           <FontWrapper4>{"좋음"}</FontWrapper4>
        </Wrapper>);
    }

}
export default Circle;