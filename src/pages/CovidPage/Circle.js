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
     margin-right: 30px;
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
     position: relative;
  display: inline-block;
  margin: $spacing;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: red;
 

`


function Circle({text,num}) {
    return (
        <Wrapper >
            <ColorCircle />
        </Wrapper>
    )
}
export default Circle;