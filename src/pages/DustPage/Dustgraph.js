// 아연언니가 써준 코드, 참고용으로 사용 -> DustPage에 직접적으로 사용하지는 않음

import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  background: ${props => props.color || 'black'};
  height: ${props => props.height || 50}px;
  width: 20px;
  margin-bottom: 5px;
  margin-top: calc(100px- height) px;
  filter: drop-ShadowRoot(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
`
function Dustgraph({ color, height }) {
  return <Styled color={color} height={height}></Styled>
}

export default Dustgraph
