import React from "react"
import styled from "styled-components"
import image from "../assets/location.svg"

const Styled = styled.div`
  background: "rgba( 255, 255, 255, 0 )";
  color:black;
  font-size:  20px;
  font-family: 'NotoSans';
  margin-top: ${props => props.marginTop || 6}px;
  margin-top: 15px;
  margin-bottom: 5px;
`
const Wrapper =styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    @media (min-width: 430px) and (max-width: 1440px) {
    //between
    display: none;
  }

  @media (min-width: 1440px) {
    //desktop
    display: none;
  }
    
`
function LocationText({text}) {
    return (
        <Wrapper>
        <img style={{marginTop:"12px", marginRight:"5px"}} src={image} />
        <Styled>{text}</Styled>
        </Wrapper>
    )
}
export default LocationText;