import React from 'react'
import styled from 'styled-components'
import Rain from '../../assets/Rain.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 55px;
  height: 170px;
  margin-right: 10px;
  margin-left: 10px;
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
  color: black;
  font-size: 16px;
  font-family: 'NotoSans';
  text-align: center;
`

function MainGraph({ color, height, num, time }) {
  return (
    <Wrapper>
      <Text>{num + '°'}</Text>

      <Styled color={color} height={height}>
        {' '}
      </Styled>
      <img src={Rain} />
      <Text>{time + '시'}</Text>
    </Wrapper>
  )
}
export default MainGraph
