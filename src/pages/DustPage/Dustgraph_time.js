import React from 'react'
import styled from 'styled-components'

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column; // 세로정렬
  margin-top: 0%;
  width: 100%;
  height: 100%;
  align-items: center;
`

const Box1 = styled.div`
  // 그래프 박스
  background: none;
  margin-top: 0px;
  width: 100%;
  height: 70%;
  margin-left: 30%;
  margin-bottom: 10%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`
const Box2 = styled.div`
  // AMPM 박스
  background: none;
  margin-top: 0px;
  width: 100%;
  height: 10%;
  margin-left: %;
  display: flex;
  flex-direction: row;
`
const Box3 = styled.div`
  // 날짜 박스
  background: none;
  margin-top: 0px;
  margin-bottom: 0px;
  width: 140%;
  height: 10%;
  margin-left: 20%;
  display: flex;
  flex-direction: row;
`
const Box4 = styled.div`
  // 오늘 박스
  display: flex;
  flex-direction: row;
  height: 10%;
`
const Box5 = styled.div`
  // 시간대별 수치 박스
  background: none;
  margin-top: 50px;
  width: 140%;
  height: 10%;
  margin-left: 0%;
  display: flex;
  flex-direction: row;
`
// 그래프 2개 그리기 시작
const Bar1 = styled.div`
  background: ${props => props.color || 'black'};
  height: ${props => props.height1 || 50}px;
  width: 15px;
  margin-left: 19px;
  filter: drop-ShadowRoot(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: row;
  @media (min-width: 1440px) {
    //desktop
    width: 18px;
  }
`
const Bar2 = styled.div`
  background: ${props => props.color || 'black'};
  height: ${props => props.height2 || 50}px;
  width: 15px;
  margin-left: 2px;
  margin-right: 25px;
  opacity: 0.6;
  filter: drop-ShadowRoot(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: row;
  @media (min-width: 1440px) {
    //desktop
    width: 18px;
  }
`

// 그래프 2개 그리기 끝

const 날짜 = styled.button`
  align-items: left;
  margin-left: 38px;
  font-size: 15px;
  background: white;
  border: none;
  outline: none;
  margin-bottom: 23%;
`
const 시간대별수치 = styled.button`
  align-items: left;
  margin-left: 38px;
  font-size: 12px;
  background: white;
  border: none;
  outline: none;
  margin-bottom: 10%;
`
function Dustgraph_time({
  color,
  height1,
  height2,
  height3,
  height4,
  day,
  number,
}) {
  return (
    <div>
      <Wrapper1>
        <Box5>
          <시간대별수치>
            {number}
            &ensp;&ensp;{number}
          </시간대별수치>
        </Box5>
        <Box1>
          <Bar1 color={color} height1={height1}></Bar1>
          <Bar2 color={color} height2={height2}></Bar2>
        </Box1>

        <Box3>
          <날짜>{day}</날짜>
        </Box3>
        <Box4></Box4>
      </Wrapper1>
    </div>
  )
}
export default Dustgraph_time
