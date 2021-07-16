import React from "react"
import styled from "styled-components"
import Rain from "../../assets/Rain.svg"

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width:280px;
    height:330px;

`
const CenterRow=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    width:100%;
`
const Row=styled.div`
    display:flex;
    flex-direction: row;


`
const Column=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    width:130px;
    height:60px;
    margin-top: 10px;
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
    text-align: center;
    margin-top: 3px;
    @media (min-width: 375px) and (max-width: 1440px) {
    //between
    font-size:  ${props => props.size-10 || 18}px;
  }
    
`

function MainInfo2({color,height,num,time}) {
    return (
        <Wrapper>

        <Row>
        <Text size="65">26°</Text>
        <Column>
        <Text size="24">체감 온도 28℃ </Text>
        <CenterRow>
        <Text size="18" color="#EF8787">최고 29℃ &nbsp;&nbsp;</Text>
            <Text size="18" color="#6CB8F8">최저 20℃ </Text></CenterRow>
        </Column>
        </Row>
        </Wrapper>

    )
}
export default MainInfo2;