import React from 'react'
import styled from 'styled-components'

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column; // 세로정렬
  margin-top: 25%;
  width: 100%;
  height: 100%;
  align-items: center;
`

const Box1 = styled.div`
  // 그래프 박스
  background: white;
  margin-top: 0px;
  width: 100%;
  height: 70%;
  margin-left: 10%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  direction: row;
 `

const Box2 = styled.div`
  // 날짜 박스
  background: white;
  margin-top: 0px;
  width: 100%;
  height: 10%;
  margin-left: 5%;
  display: flex;
  flex-direction: row;
`
// 그래프 4개 그리기 시작
const Bar1 = styled.div`
  background: ${props => props.color || 'black'};
  height: ${props => props.height1 || 50}px;
  width: 20px;
  margin-left: 20px;
  filter: drop-ShadowRoot(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: row;
  @media (min-width: 1440px) {
    //desktop
    width: 25px;
    margin-left: 40px;
  }
  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    width: 18px;
    margin-left: 40px;
  }
`
const Bar2 = styled.div`
  background: ${props => props.color || 'black'};
  height: ${props => props.height2 || 50}px;
  width: 20px;
  margin-left: 2px;
  opacity: 0.6;
  filter: drop-ShadowRoot(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: row;
  @media (min-width: 1440px) {
    //desktop
    width: 25px;
    margin-left: 40px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 25px;
  }
`
// 그래프 4개 그리기 끝

const 날짜 = styled.button`
  align-items: left;
  margin-left: 38px;
  font-size: 15px;
  background: white;
  border: none;
  outline: none;
  margin-bottom: 33%;
  @media (min-width: 1440px) {
    //desktop
    width: 18px;
    margin-left: 60px;
  }
  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    width: 18px;
    margin-left: 60px;
  }
`

function Dustgraph_day({ color, height1, height2, day }) {
  return (
    <div>
      <Wrapper1>
        <Box1>
          <Bar1 color={color} height1={height1}></Bar1>
          <Bar2 color={color} height2={height2}></Bar2>
        </Box1>
        <Box2>
          <날짜>{day}</날짜>
        </Box2>
      </Wrapper1>
    </div>
  )
}
export default Dustgraph_day
