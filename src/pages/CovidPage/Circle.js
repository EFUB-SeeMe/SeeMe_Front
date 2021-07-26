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

const FontWrapper=styled.div`
  font-size: 20px;
  color:rgba(255,108,108,1);
  font-family: 'NotoSansBold';
  margin-top: 10px;
  margin-left: 20px;
`




function Circle({text,num}) {
    return (
        <Wrapper >
           <ColorCircle > <p style={{fontSize:"15px",fontFamily:"NotoSans",margin:"0px"}}>안전지수</p> {97} </ColorCircle>
           <FontWrapper>{"매우나쁨"}</FontWrapper>
        </Wrapper>
    )
}
export default Circle;