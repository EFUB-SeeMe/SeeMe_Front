import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  color: black;
  background: #e3e3e3;
  font-size: 25px;
  font-family: 'NotoSans';
  width: 100px;
  height: 37px;
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 6px;
  margin-top: 10px;
  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    margin-left: 10px;
    width: 89px;
    height: 30px;
    font-size: 20px;
  }
  @media (max-width: 420px) {
    //iphone
    margin-top: 5px;
    width: 50px;
    height: 21px;
    font-size: 15px;
  }
`
const Red = styled.div`
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-bottom: 26px solid #ff6c6c;
  margin-left: 5px;


  @media (max-width: 420px) {
    //iphone
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid #ff6c6c;
    margin-left: 5px;
  }
`

const Green = styled.div`
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-bottom: 26px solid #7ce063;
  margin-left: 5px;


@media (max-width: 420px) {
    //iphone
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 12px solid  #FEB153;
  margin-left: 5px;
}
  @media (max-width: 420px) {
    //iphone
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 12px solid #7ce063;
    margin-left: 5px;
  }
`

function Ascent({ text, num }) {
  return (
    <Styled>
      {text} {num == 1 ? <Red /> : <Green />}
    </Styled>
  )
}
export default Ascent
