import React from 'react'
import styled from 'styled-components'
import Mask from '../../assets/Dust_mask.svg'
import { dustMain } from '../../_actions/user_action'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 28px;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1px;
  width: 100%;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    justify-content: center;
    align-items: center;
    width: 90%;
  }
  @media (max-width: 430px) {
    //iphone
    justify-content: center;
    align-items: center;
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
  text-align: center;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    font-size: ${props => props.size - 7 || 20}px;
  }
  @media (max-width: 430px) {
    //iphone
    background: 'rgba( 255, 255, 255, 0 )';
    color: ${props => props.color || 'black'};
    font-size: 20px;
    font-family: 'NotoSans';
    margin-right: 10px;
    text-align: center;
  }
`
const MaskImage = styled.img`
  width: 40%;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 230px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 200px;
    height: 200px;
  }
  @media (max-width: 430px) {
    //iphone
    width: 150x;
    height: 230px;
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
        <Text size="30">{mainState?.member?.maskInfo?.document?.desc} </Text>
    </Wrapper>
  )
}
export default Dustinfo2
