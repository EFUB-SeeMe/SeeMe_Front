import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-right: 40px;
  margin-left: 40px;
  @media (max-width: 420px) {
    //iphone
    margin-right: 20px;
  margin-left: 20px;
  }
`
const Styled = styled.div`
  background: ${props => props.color || 'black'};
  height: ${props => props.height || 50}px;
  width: 25px;
  margin-top: 10px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  background: #ff6c6c;

  @media (max-width: 420px) {
    //iphone
    height: ${props => props.height || 30}px;
    width: 25px;
  }
`
const Text = styled.div`
  font-family: 'NotoSans';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: black;
  text-align: center;
  margin-top: 5px;
  width:60px;
`
function Graph_Total({ num, height, totalDate}) {
  if (totalDate == null) {
    var date = "";
    var date1 = "";
    var date2 = "";
    var date3 = "미제출";
  } else {
    var date = totalDate?.split(" ")[0];
    var date1 = totalDate?.split(" ")[1];
    var date2 = totalDate?.split(" ")[2];
    var date3 = totalDate?.split(" ")[3];
  }
  return (
    <Wrapper>
      <Text>{num}</Text>
      <Styled height={height}></Styled>
      <Text>{date1  + date2}</Text>
    </Wrapper>
  )
}

export default Graph_Total
