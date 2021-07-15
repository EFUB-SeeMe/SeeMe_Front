import React from "react"
import styled from "styled-components"

const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column; // 세로정렬
  margin-top: 25%;
  width: 100%;
  height: 75%;
`

const Box1 = styled.div` // 그래프 박스
  background: white;
  margin-top: 0px;
  width: 100%;
  height:85%;
  margin-left: 5%;

  display: flex;
  flex-direction: row; 
  align-items: flex-end;
`
const Box2 = styled.div` // AMPM 박스
  background: white;
  margin-top: 0px;
  width: 15%;
  height:7.5%;
  margin-left: 5%;

  display: flex;
  flex-direction: row; 
`
const Box3 = styled.div` // 날짜 박스
  background: white;
  margin-top: 0px;
  width: 15%;
  height:7.5%;
  margin-left: 5%;

  display: flex;
  flex-direction: row; 
`
const Box4 = styled.div` // 오늘 박스
  display: flex;
  flex-direction: row; 
  height: 10%;
`
const Bar1 = styled.div`
 background: ${props => props.color || "black"};
 height: ${props => props.height1 || 50}px;
 width:20%;
 margin-bottom: 5px;
 margin-left: 5px;
 filter: drop-ShadowRoot(0px 4px 4px rgba(0,0,0,0.25)); 
 border-radius: 16px;

 display: flex;
 flex-direction: row;
`
const Bar2 = styled.div`
 background:${props => props.color || "black"};
 height: ${props => props.height2 || 50}px;
 width:20%;
 margin-bottom: 5px;
 margin-left: 5px;
 opacity: 0.6;
 filter: drop-ShadowRoot(0px 4px 4px rgba(0,0,0,0.25)); 
 border-radius: 16px;

 display: flex;
 flex-direction: row;
`
const Bar3 = styled.div`
 background: ${props => props.color || "black"};
 height: ${props => props.height3 || 50}px;
 width:20%;
 margin-bottom: 5px;
 margin-left:5px;
 filter: drop-ShadowRoot(0px 4px 4px rgba(0,0,0,0.25)); 
 border-radius: 16px;

 display: flex;
 flex-direction: row;
`
const Bar4 = styled.div`
 background:${props => props.color || "black"};
 height: ${props => props.height4 || 50}px;
 width:20%;
 margin-bottom: 5px;
 margin-left: 5px;
 opacity: 0.6;
 filter: drop-ShadowRoot(0px 4px 4px rgba(0,0,0,0.25)); 
 border-radius: 16px;

 display: flex;
 flex-direction: row;
`
const day_first = styled.button`
  align-items: left;
  padding-left: 10%;
  font-size: 10px;
  background: white;
  border: none;
  outline: none;
`

const day_next = styled.button`
  align-items: left;
  padding-left: 14.5%;
  font-size: 10px;
  background: white;
  border: none;
  outline: none;
`

const today = styled.button`
  align-items: left;
  padding-left: 14.5%;
  font-size: 10px;
  font-weight: bold;
  background: white;
  border: none;
  outline: none;
`
const 오늘 = styled.button`
  align-items: left;
  margin-left: 28.5%;
  font-size: 10px;
  font-weight: bold;
  background: white;
  border: none;
  outline: none;
`

const AM_front = styled.button`
  align-items: left;
  margin-left: 6.5%;
  font-size: 5px;
  font-weight: bold;
  background: white;
  color: #b2b2b2;
  border: none;
  outline: none;
`
const PM = styled.button`
  align-items: left;
  margin-left: 4.5%;
  font-size: 5px;
  font-weight: bold;
  background: white;
  color: #b2b2b2;
  border: none;
  outline: none;
`
const AM_next = styled.button`
  align-items: left;
  margin-left: 7.6%;
  font-size: 5px;
  font-weight: bold;
  background: white;
  color: #b2b2b2;
  border: none;
  outline: none;
`

function Dustgraph_day({color, height1, height2, height3, height4}) {
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
                <AM_front>AM</AM_front> <PM>PM</PM>
            </Box2>
            <Box3>
                <day_first>06.27</day_first>
            </Box3>
            <Box4>
                <오늘>오늘</오늘>
            </Box4>

            </Wrapper1>
        </div>
    )
}

/*
<AM_next>AM</AM_next> <PM>PM</PM>
<AM_next>AM</AM_next> <PM>PM</PM>
<AM_next>AM</AM_next> <PM>PM</PM>
<AM_next>AM</AM_next> <PM>PM</PM>
*/
export default Dustgraph_day;