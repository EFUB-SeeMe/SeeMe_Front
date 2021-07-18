import React from "react"
import styled from "styled-components"
import Rain from "../../assets/Rain.svg"
import Sun from "../../assets/Sun.svg"

const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
   
    height:40px;
    @media (min-width: 430px) and (max-width: 1440px) {
    //between
    margin-left: 0px;
    margin-right: 0px;
    width:300px;
  }

@media (min-width: 1440px) {
    //desktop
    margin-left: 80px;
    margin-right: 80px;
    width:420px;
    margin-top: 7px;
    justify-content: space-between;

  }
  @media (max-width: 430px) {
    //iphone
    margin-left: 10px;
    margin-right: 10px;

   
  }
`

const Text=styled.div`
    background: "rgba( 255, 255, 255, 0 )";
    color:${props => props.color || "black"};
    font-size:  14px;
    font-family: 'NotoSans';
    margin-top: 10px;
    width:90px;
    text-align: center;
    @media (min-width: 1440px) {
    //desktop
   margin-right: 20px;
  }
`

const SmallText=styled.div`
    background: "rgba( 255, 255, 255, 0 )";
    color:${props => props.color || "black"};
    font-size:  12px;
    font-family: 'NotoSans';
    margin-top: 10px;
    width:30px;
    text-align: center;
    @media (min-width: 1440px) {
    //desktop
   font-size: 14px;
   margin-left: 5px;
  }
`

function WeekGraph({day,hot,cold}) {
    return (
        <Wrapper>
            <Text>{day}</Text>
        <img style={{marginRight:"5px" ,marginLeft:"20px",height:"40px", width:"40px"}}src={Rain} />
        <img style={{marginRight:"20px",height:"40px", width:"40px"}}src={Sun} />
        <SmallText color={"#EF8787"}>{hot+"° "}</SmallText>
        <SmallText color={"#87BDEF"}>{cold+" °"}</SmallText>
        </Wrapper>

    )
}
export default WeekGraph;