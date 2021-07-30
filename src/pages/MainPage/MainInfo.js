import React from "react"
import styled from "styled-components"
import Rain from "../../assets/Rain.svg"

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width:280px;
    height:280px;
    margin-top: 15px;
    @media (min-width: 430px) and (max-width: 1440px) {
    //between
    margin-top: 40px;
  }
`
const Row=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width:100%;
    @media (min-width: 430px) and (max-width: 1440px) {
    //between
    justify-content: space-evenly;
  }
`
const CenterRow=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    width:100%;
    margin-bottom: 20px;
`
const Styled = styled.div`
  background: ${props => props.color || "black"};
  height:${props => props.height || 50}px;
  width:20px;
  margin-bottom: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
`
const Text=styled.div`
    background: "rgba( 255, 255, 255, 0 )";
    color:${props => props.color || "black"};
    font-size:  ${props => props.size || 18}px;
    font-family: 'NotoSans';
    margin-right: 5px;
    text-align: flex-start;
    width:600px;
    @media (min-width: 430px) and (max-width: 1440px) {
    //between
    font-size:  ${props => props.size-5 || 18}px;
  }
    
`

function MainInfo({current,feel,high,low,today,yesterday}) {
  
    return (
        <Wrapper>
        <Row>
            <Text>현재온도</Text>
            <Text>체감온도</Text>
        </Row>
        <Row>
        <Text size="70">{current}</Text>
            <Text size="70">{feel}</Text>
        </Row>
        <CenterRow>
            <Text size="16" color="#EF8787">최고 {high}℃ &nbsp;&nbsp;</Text>
            <Text size="16" color="#6CB8F8">최저 {low}℃ </Text>
        </CenterRow>
        <Row>
        <Text size="16" color="#222222">{today} </Text>
        </Row>
        <Row>
        <Text size="16" color="#222222">{yesterday} </Text>
        </Row>
        </Wrapper>

    )
}
export default MainInfo;