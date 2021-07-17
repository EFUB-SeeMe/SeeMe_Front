import React from 'react'
import styled from 'styled-components'
import Mask from '../../assets/Dust_mask.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 600px;
  height: 300px;
  margin-top: 28px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1px;
  width: 60%;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    justify-content: space-evenly;
    width: 50%;
  }
  @media (max-width: 430px) {
    //iphone
    justify-content: space-evenly;
    width: 90%;
  }
`
const CenterRow = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`
const Styled = styled.div`
  background: ${props => props.color || 'black'};
  height: ${props => props.height || 50}px;
  width: 20px;
  margin-bottom: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
`
const Text = styled.div`
  background: 'rgba( 255, 255, 255, 0 )';
  color: ${props => props.color || 'black'};
  font-size: ${props => props.size || 20}px;
  font-family: 'NotoSans';
  margin-right: 5px;
  text-align: center;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    font-size: ${props => props.size - 5 || 20}px;
  }
  @media (max-width: 430px) {
    //iphone
    background: 'rgba( 255, 255, 255, 0 )';
    color: ${props => props.color || 'black'};
    font-size: ${props => props.size || 10}px;
    font-family: 'NotoSans';
    margin-right: 0px;
    text-align: center;
  }
`
const MaskImage = styled.img`
  width: 300px;
  height: 180px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 130px;
    height: 120px;
  }
  @media (max-width: 430px) {
    //iphone
    width: 150px;
    height: 150px;
  }
`

function Dustinfo2({ color, height, num, time }) {
  return (
    <Wrapper>
      <Row>
        <Text size="20"> 미세먼지 좋아요~ </Text>
        <Text size="20">덴탈마스크 </Text>
        <Text size="20">추천 </Text>
      </Row>
      <Row>
        <MaskImage src={Mask} />
      </Row>

      <Row>
        <Text size="24" color="#222222">
          14시 30분 ~ 15시 30분{' '}
        </Text>
      </Row>
      <Row>
        <Text size="35" color="#222222">
          환기 시간 입니다{' '}
        </Text>
      </Row>
    </Wrapper>
  )
}
export default Dustinfo2
