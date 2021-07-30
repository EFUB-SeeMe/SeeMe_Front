import React from "react"
import styled from "styled-components"
import Rain from "../../assets/raindrop.svg"


const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width:55px;
    height:170px;
    margin-right: 10px;
    margin-left: 20px;
`
const Styled = styled.div`
  background: #C7DEFF;
  height:${props => props.height || 50}px;
  width:20px;
  margin-bottom: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
`
const Text=styled.div`
    background: "rgba( 255, 255, 255, 0 )";
    color:black;
    font-size:  16px;
    font-family: 'NotoSans';
    margin-top: 10px;
    width:40px;
    text-align: center;
    
`

function RainGraph({height,num,time}) {
    return (
        <Wrapper>
            <Text>{num}</Text>
            
        <Styled  height={height}> </Styled>
        <img style={{marginRight:"5px",width:"27px",height:"35px"}}src={Rain} />
        <Text>{time}</Text>
        </Wrapper>

    )
}
export default RainGraph;