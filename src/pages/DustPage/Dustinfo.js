import React from 'react'
import styled from 'styled-components'
import standard from '../../assets/Dust_standard.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 58%;
  margin-top: 15px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
  width: 100%;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    justify-content: space-evenly;
  }
`
const CenterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
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
  font-size: ${props => props.size || 18}px;
  font-family: 'NotoSans';
  margin-right: 5px;
  text-align: center;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    font-size: ${props => props.size - 10 || 18}px;
  }
`
const Standard = styled.img`
  width: 206px;
  height: 35px;

  @media (min-width: 1030px) and (max-width: 1440px) {
    //between
    width: 216px;
    height: 35px;
  }
  @media (min-width: 430px) and (max-width: 1030px) {
    // ipad
    width: 156px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 296px;
  }
`
Standard.defaultProps = {
  src: standard,
}

function Dustinfo({ color, height, num, time }) {
  return (
    <Wrapper>
      <Row>
        <Text size="18" style={{ marginTop: '15px' }}>
          미세먼지 농도
        </Text>
        <Text size="18" style={{ marginTop: '15px' }}>
          초미세먼지 농도
        </Text>
      </Row>
      <Row>
        <Text size="65" color="#42A0F0">
          23
        </Text>
        <Text size="65" color="#42A0F0">
          15
        </Text>
      </Row>
      <Row>
        <Standard></Standard>
      </Row>
      <Row>
        <Text size="22" color="#222222">
          야외 활동을 즐겨보세요 !{' '}
        </Text>
      </Row>
    </Wrapper>
  )
}
export default Dustinfo
