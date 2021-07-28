import React from 'react'
import styled from 'styled-components'

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column; // 세로정렬
  margin-top: 25%;
  width: 100%;
  height: 75%;
  align-items: center;
`

const Box1 = styled.div`
  // 그래프 박스
  background: white;
  margin-top: 20%;
  width: 100%;
  height: 60%;
  margin-left: 20%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  direction: row;
 `

const Box1_sub1 = styled.div`
// 그래프 박스
background: white;
width: 30%;
margin-left: 20%;
display: flex;
flex-direction: column;
align-items: flex-end;
`
const Box1_sub2 = styled.div`
// 그래프 박스
background: white;
width: 30%;
margin-right: 20%;
display: flex;
flex-direction: column;
align-items: flex-end;
`

const Text = styled.div`
// 그래프 박스
background: white;
display: flex;
margin-left: -1%;
font-size: 15px;
`

const Box2 = styled.div`
  // 날짜 박스
  background: white;
  margin-top: 0px;
  width: 100%;
  height: 10%;
  margin-left: 10%;
  display: flex;
  flex-direction: row;
`
// 그래프 4개 그리기 시작
const Bar1 = styled.div`
  background: ${props => props.color || 'black'};
  height: ${props => props.height1 || 50}px;
  width: 20px;
  margin-left: 50px;
  filter: drop-ShadowRoot(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: row;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 25px;
    margin-left: 70px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 25px;
    margin-left: 100px;
  }
`
const Bar2 = styled.div`
  background: ${props => props.color || 'black'};
  height: ${props => props.height2 || 50}px;
  width: 20px;
  margin-left: 2px;
  opacity: 0.6;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  @media (min-width: 420px) {
    //desktop
    width: 25px;
    margin-left: 5px;
  }
`
// 그래프 4개 그리기 끝

const Day = styled.button`
  align-items: left;
  margin-left: 33px;
  font-size: 13px;
  background: white;
  border: none;
  outline: none;
  margin-bottom: 5%;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 18px;
    margin-left: 50px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 18px;
    margin-left: 75px;
  }
`

function Dustgraph_day({ color, height1, height2, day }) {
  return (
    <div>
      <Wrapper1>
        
        <Box1>
          <Box1_sub1>
            <Text> { height1} </Text>
            <Bar1 color={color} height1={height1}></Bar1>
          </Box1_sub1>
          <Box1_sub2>
            <Text> {height2} </Text>
            <Bar2 color={color} height2={height2}></Bar2>
          </Box1_sub2>
        </Box1>
        <Box2>
          <Day>{day}</Day>
        </Box2>
      </Wrapper1>
    </div>
  )
}
export default Dustgraph_day
