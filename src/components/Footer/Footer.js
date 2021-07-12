import styled from "styled-components";
import { useDispatch } from 'react-redux';
import EFUB from "../../assets/efub.svg";
import Text from "../Text"
import BoldText from "../BoldText";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height:33px;
  justify-content: flex-start;
  @media (max-width: 375px) {
    //iphone
    justify-content: center;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    justify-content: center;
    
  }
`
const Line = styled.div`
  width: 0px;
  margin-top:7px;
  border: 1px solid #A3A3A3;
    margin-left: 15px;
    margin-right: 15px;
    height:15px; 
    @media (max-width: 375px) {
    //iphone
    display: none;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    display: none;
    
  }
`
const BlindText = styled.div`
  color: ${(props) => props.color || "black"};
  background: ${(props) => props.background || "rgba( 255, 255, 255, 0 )"};
  font-size:  ${props => props.font || 12}px;
  font-family: 'NotoSans';
  margin-top: ${props => props.marginTop || 6}px;
  margin-right: 5px;
  @media (max-width: 375px) {
    //iphone
    display: none;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    display: none;
    
  }
`
const BlindBoldText = styled.div`
  color: ${(props) => props.color || "black"};
  background: ${(props) => props.background || "rgba( 255, 255, 255, 0 )"};
  font-size:  ${props => props.font || 12}px;
  font-family: 'NotoSansBold';
  margin-top: ${props => props.marginTop || 6}px;
  margin-right: 5px;
  @media (max-width: 375px) {
    //iphone
    display: none;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    display: none;
    
  }
`


function Footer() {
    return (
        <Wrapper>
            <img style={{ marginLeft: "15px", marginRight: "20px" }} src={EFUB} />
            <Text> Team  </Text>
            <BoldText> Weather Ranger</BoldText>
            <Line />
            <BlindText color={"red"}> 장예준  </BlindText>
            <BlindText color={"darkorange"}> 서수경  </BlindText>
            <BlindText color={"goldenrod"}> 정아연  </BlindText>
            <BlindText color={"green"}> 강민지  </BlindText>
            <BlindText color={"blue"}> 김소민  </BlindText>
            <BlindText color={"purple"}> 오지은  </BlindText>
            <BlindText color={"palevioletred"}> 박주은  </BlindText>
            <BlindText color={"peru"}> 장해라  </BlindText>
            <Line />
            <BlindText> E-mail  </BlindText>
            <BlindBoldText> ewhaefub@gmail.com</BlindBoldText>
            <Line />
            <BlindText> Copyright ⓒ 2021 WeatherRanger All Rights Reserved </BlindText>


        </Wrapper>
    );
}


export default Footer;