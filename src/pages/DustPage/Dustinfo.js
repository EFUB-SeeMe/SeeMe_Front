import React from 'react'
import styled from 'styled-components'
import standard from '../../assets/Dust_standard.svg'
import { dustMain } from '../../_actions/user_action'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

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
  height: 35px;

  @media (min-width: 1030px) and (max-width: 1440px) {
    //between
    width: 316px;
  }
  @media (min-width: 430px) and (max-width: 1030px) {
    // ipad
    width: 256px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 396px;
    height: 50px;
  }
`
Standard.defaultProps = {
  src: standard,
}

function Dustinfo({ finedust, microdust, briefing }) {
  if (finedust <= 30 && microdust <= 15) {
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
            {finedust}
          </Text>
          <Text size="65" color="#42A0F0">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (finedust <= 30 && microdust <= 35 && microdust >= 16) {
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
          <Text size="65" color="#85BFEF">
            {finedust}
          </Text>
          <Text size="65" color="#87EF85">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (finedust <= 30 && microdust <= 75 && microdust >= 36) {
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
          <Text size="65" color="#85BFEF">
            {finedust}
          </Text>
          <Text size="65" color="#FE9517">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (finedust <= 30 && microdust >= 76) {
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
          <Text size="65" color="#85BFEF">
            {finedust}
          </Text>
          <Text size="65" color="#FF6C6C">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  }
  //
  else if (finedust <= 80 && finedust >= 31 && microdust <= 15) {
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
          <Text size="65" color="#87EF85">
            {finedust}
          </Text>
          <Text size="65" color="#85BFEF">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (
    finedust <= 80 &&
    finedust >= 31 &&
    microdust <= 35 &&
    microdust >= 16
  ) {
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
          <Text size="65" color="#87EF85">
            {finedust}
          </Text>
          <Text size="65" color="#87EF85">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (
    finedust <= 80 &&
    finedust >= 31 &&
    microdust >= 36 &&
    microdust <= 75
  ) {
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
          <Text size="65" color="#87EF85">
            {finedust}
          </Text>
          <Text size="65" color="#FE9517">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (finedust >= 31 && finedust <= 80 && microdust >= 76) {
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
          <Text size="65" color="#87EF85">
            {finedust}
          </Text>
          <Text size="65" color="#FF6C6C">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  }
  // finedust 나쁨
  else if (
    finedust >= 81 &&
    finedust <= 150 &&
    microdust >= 0 &&
    microdust <= 15
  ) {
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
          <Text size="65" color="#FE9517">
            {finedust}
          </Text>
          <Text size="65" color="#85BFEF">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (
    finedust >= 81 &&
    finedust <= 150 &&
    microdust >= 16 &&
    microdust <= 35
  ) {
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
          <Text size="65" color="#FE9517">
            {finedust}
          </Text>
          <Text size="65" color="#87EF85">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (
    finedust >= 81 &&
    finedust <= 150 &&
    microdust >= 36 &&
    microdust <= 75
  ) {
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
          <Text size="65" color="#FE9517">
            {finedust}
          </Text>
          <Text size="65" color="#FE9517">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (finedust >= 81 && finedust <= 150 && microdust >= 76) {
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
          <Text size="65" color="#FE9517">
            {finedust}
          </Text>
          <Text size="65" color="#FF6C6C">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  }

  //
  else if (finedust >= 151 && microdust >= 0 && microdust <= 15) {
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
          <Text size="65" color="#FF6C6C">
            {finedust}
          </Text>
          <Text size="65" color="#85BFEF">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (finedust >= 151 && microdust >= 16 && microdust <= 35) {
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
          <Text size="65" color="#FF6C6C">
            {finedust}
          </Text>
          <Text size="65" color="#87EF85">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (finedust >= 151 && microdust >= 36 && microdust <= 75) {
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
          <Text size="65" color="#FF6C6C">
            {finedust}
          </Text>
          <Text size="65" color="#FE9517">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  } else if (finedust >= 151 && microdust >= 76) {
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
          <Text size="65" color="#FF6C6C">
            {finedust}
          </Text>
          <Text size="65" color="#FF6C6C">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  }
  else{
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
          <Text size="65" color="#ffffff">
            {finedust}
          </Text>
          <Text size="65" color="#ffffff">
            {microdust}
          </Text>
        </Row>
        <Row>
          <Standard />
        </Row>
        <Row>
          <Text size="22" color="#222222">
            {briefing}{' '}
          </Text>
        </Row>
      </Wrapper>
    )
  }
}

export default Dustinfo
