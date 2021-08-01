import React from 'react'
import styled from 'styled-components'
import standard from '../../assets/Dust_standard.svg'
import { dustMain } from '../../_actions/user_action'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`
const Text2 = styled.div`
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
function DustInfo_mobile({ finedust, microdust }) {
  if (finedust <= 30 && microdust <= 15) {
    return (
      <Row>
        <Text2 size="60" color="#42A0F0">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#42A0F0">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (finedust <= 30 && microdust >= 16 && microdust <= 35) {
    return (
      <Row>
        <Text2 size="60" color="#85BFEF">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#87EF85">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (finedust <= 30 && microdust >= 36 && microdust <= 75) {
    return (
      <Row>
        <Text2 size="60" color="#85BFEF">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#FE9517">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (finedust <= 30 && microdust >= 76) {
    return (
      <Row>
        <Text2 size="60" color="#85BFEF">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#FF6C6C">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  }
  //
  else if (
    finedust >= 31 &&
    finedust <= 80 &&
    microdust >= 0 &&
    microdust <= 15
  ) {
    return (
      <Row>
        <Text2 size="60" color="#87EF85">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#85BFEF">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (
    finedust >= 31 &&
    finedust <= 80 &&
    microdust >= 16 &&
    microdust <= 35
  ) {
    return (
      <Row>
        <Text2 size="60" color="#87EF85">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#87EF85">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (
    finedust >= 31 &&
    finedust <= 80 &&
    microdust >= 36 &&
    microdust <= 75
  ) {
    return (
      <Row>
        <Text2 size="60" color="#87EF85">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#FE9517">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (finedust >= 31 && finedust <= 80 && microdust >= 76) {
    return (
      <Row>
        <Text2 size="60" color="#87EF85">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#FF6C6C">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  }
  //
  else if (
    finedust >= 81 &&
    finedust <= 150 &&
    microdust >= 0 &&
    microdust <= 15
  ) {
    return (
      <Row>
        <Text2 size="60" color="#FE9517">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#85BFEF">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (
    finedust >= 81 &&
    finedust <= 150 &&
    microdust >= 16 &&
    microdust <= 35
  ) {
    return (
      <Row>
        <Text2 size="60" color="#FE9517">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#87EF85">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (
    finedust >= 81 &&
    finedust <= 150 &&
    microdust >= 36 &&
    microdust <= 75
  ) {
    return (
      <Row>
        <Text2 size="60" color="#FE9517">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#FE9517">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (finedust >= 81 && finedust <= 150 && microdust >= 76) {
    return (
      <Row>
        <Text2 size="60" color="#FE9517">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#FF6C6C">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  }
  //
  else if (finedust >= 151 && microdust >= 0 && microdust <= 15) {
    return (
      <Row>
        <Text2 size="60" color="#FF6C6C">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#85BFEF">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (finedust >= 151 && microdust >= 16 && microdust <= 35) {
    return (
      <Row>
        <Text2 size="60" color="#FF6C6C">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#87EF85">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (finedust >= 151 && microdust >= 36 && microdust <= 75) {
    return (
      <Row>
        <Text2 size="60" color="#FF6C6C">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#FE9517">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else if (finedust >= 151 && microdust >= 76) {
    return (
      <Row>
        <Text2 size="60" color="#FF6C6C">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#FF6C6C">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  } else {
    return (
      <Row>
        <Text2 size="60" color="#000000">
          {' '}
          {finedust} &emsp;{' '}
        </Text2>
        <Text2 size="60" color="#000000">
          {' '}
          {microdust}{' '}
        </Text2>
      </Row>
    )
  }
}

export default DustInfo_mobile
