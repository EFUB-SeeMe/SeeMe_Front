import React from 'react'
import styled from 'styled-components'
import Mask from '../../assets/Dust_mask.svg'
import { dustMain } from '../../_actions/user_action'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`

const Text = styled.div`
  background: 'rgba( 255, 255, 255, 0 )';
  color: ${props => props.color || 'black'};
  font-size: ${props => props.size || 20}px;
  font-family: 'NotoSans';
  margin-left:5%;
  text-align: center;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    font-size: ${props => props.size - 5 || 20}px;
  }
  @media (max-width: 430px) {
    //iphone
    background: 'rgba( 255, 255, 255, 0 )';
    color: ${props => props.color || 'black'};
    font-size: 15px;
    font-family: 'NotoSans';
    margin-right: 10px;
    text-align: center;
  }
`
const MaskImage = styled.img`

  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 200px;
    height: 200px;
  }
  @media (max-width: 430px) {
    //iphone
    width: 70x;
    height: 160px;
  }
`

function Dustinfo2({ color, height, num, time }) {
  const [mainState, setMainState] = useState({ status: 'idle', member: null })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      dustMain(
        window.localStorage.getItem('lat'),
        window.localStorage.getItem('lon')
      )
    ).then(response => {
      setMainState({ status: 'pending' })
      const data = response.payload
      setTimeout(() => setMainState({ status: 'resolved', member: data }), 600)
      console.log(data)
    })
  }, [])

  return (
    <Wrapper>
        <MaskImage
          src={mainState?.member?.maskInfo?.document?.maskIcon}
        ></MaskImage>
        <Text size="20">{mainState?.member?.maskInfo?.document?.desc} </Text>
    </Wrapper>
  )
}
export default Dustinfo2
