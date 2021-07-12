import React from "react"
import styled from "styled-components"

const Styled = styled.div`
  color: ${(props) => props.color || "black"};
  background: ${(props) => props.background || "rgba( 255, 255, 255, 0 )"};
  font-size:  ${props => props.font || 12}px;
  font-family: 'NotoSans';
  margin-top: ${props => props.marginTop || 6}px;
  margin-right: 5px;
`

function Text({ children, color, background, font, marginTop, ...rest }) {
    return (
        <Styled color={color} background={background} font={font} marginTop={marginTop} {...rest}>
            {children}
        </Styled>
    )
}
export default Text;