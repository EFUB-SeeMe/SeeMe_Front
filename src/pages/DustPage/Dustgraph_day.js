import React from "react"
import styled from "styled-components"

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column; // 세로정렬
  align-items: center;
  margin-top: 25%;
  width: 100%auto;
  height: 50%auto;
`
const Box1 = styled.div` // 그래프 박스
  background: white;
  margin-top: 50px;
  width: 100%;
  height:50%;
  margin-left: 10%;
  margin-bottom: 10%;

  display: flex;
  flex-direction: row; 
  align-items: flex-end;
`
const Box2 = styled.div` // AMPM 박스
  background: white;
  margin-top: 0px;
  width: 100%;
  height:5%;
  margin-left: 5%;

  display: flex;
  flex-direction: row; 
`
const Box3 = styled.div` // 날짜 박스
  background: white;
  margin-top: 0px;
  width: 100%;
  height:5%;
  margin-left: 5%;

  display: flex;
  flex-direction: row; 
`
const Box4 = styled.div` // 오늘 박스
  display: flex;
  flex-direction: row; 
  height:5%;
`
// 그래프 4개 그리기 시작
const Bar1 = styled.div`
 background: ${props => props.color || "black"};
 height: ${props => props.height1 || 50}px;
 width:15px;
 margin-left: 20px;
 filter: drop-ShadowRoot(0px 4px 4px rgba(0,0,0,0.25)); 
 display: flex;
 flex-direction: row;
  @media (min-width: 1440px) {
    //desktop
    width:18px;
  }
`
const Bar2 = styled.div`
 background:${props => props.color || "black"};
 height: ${props => props.height2 || 50}px;
 width:15px;
 margin-left: 2px;
 opacity: 0.6;
 filter: drop-ShadowRoot(0px 4px 4px rgba(0,0,0,0.25)); 

 display: flex;
 flex-direction: row;
 @media (min-width: 1440px) {
    //desktop
    width:18px;
  }
`
const Bar3 = styled.div`
 background: ${props => props.color || "black"};
 height: ${props => props.height3 || 50}px;
 width:15px;
 margin-left:10px;
 filter: drop-ShadowRoot(0px 4px 4px rgba(0,0,0,0.25)); 

 display: flex;
 flex-direction: row;
 @media (min-width: 1440px) {
    //desktop
    width:18px;
  }
`
const Bar4 = styled.div`
 background:${props => props.color || "black"};
 height: ${props => props.height4 || 50}px;
 width:15px;
 margin-left: 2px;
 opacity: 0.6;
 filter: drop-ShadowRoot(0px 4px 4px rgba(0,0,0,0.25)); 

 display: flex;
 flex-direction: row;
 
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
`

const AM = styled.button`
  align-items: left;
  margin-left: 25px;
  font-size: 10px;
  font-weight: bold;
  background: white;
  color: #b2b2b2;
  border: none;
  outline: none;
`
const PM = styled.button`
  align-items: left;
  margin-left: 18px;
  font-size: 10px;
  font-weight: bold;
  background: white;
  color: #b2b2b2;
  border: none;
  outline: none;
`

function Dustgraph_day({color, height1, height2, height3, height4, day}) {
    return(
        <div>
            <Wrapper1>
            <Box1> 
                <Bar1 color={color} height1={height1}></Bar1>
                <Bar2 color={color} height2={height2}></Bar2>
                <Bar3 color={color} height3={height3}></Bar3>
                <Bar4 color={color} height4={height4}></Bar4>
            </Box1>
            <Box2> 
                <AM>AM</AM> <PM>PM</PM>
            </Box2>
            <Box3>
                <날짜>{day}</날짜>
            </Box3>
            <Box4>
            </Box4>

            </Wrapper1>
        </div>
    )
}
export default Dustgraph_day;