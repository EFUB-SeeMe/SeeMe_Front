import styled from "styled-components";
import { useDispatch } from 'react-redux';
import Header from "../../components/Header/Header"

// load image
import mask from "../../assets/Dust_mask.svg";
import dust from "../../assets/Dust_dust.svg";
import location from "../../assets/Dust_location.svg";
import blue from "../../assets/Dust_blue.svg";
import standard from "../../assets/Dust_standard.svg";
const Background = styled.div`
  background-color: #E9E7FF;
  background-repeat: no-repeat;
  background-position: center top;
  min-height:95vh;
  margin: 0;
  display:flex;
  flex-direction: row;
`
const Wrapper1 = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:55%;
    @media (max-width: 375px) {
    //iphone
    display: none;
  }
`

const Wrapper2 = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:45%;
    @media (max-width: 375px) {
    //iphone
    display: none;
  }
`
const Wrapper3 = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100%;
    
  @media (min-width: 376px) and (max-width: 1440px) {
    //between
    display: none;
  }

@media (min-width: 1440px) {
//desktop
    display: none;
  }
`

const Box1 = styled.div`
background: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 16px;
margin-bottom: 10px;
margin-top: 0px;

display: flex;
flex-direction: row;

@media (min-width: 375px) and (max-width: 1440px) {
    //between
    width:90%;
    height:220px;
    
  }

@media (min-width: 1440px) {
//desktop
width:90%;
height:300px;

  }
@media (max-width: 375px) {
    //iphone
    width:90%;
    margin-top: 15px;
  }
`
const Location = styled.image` // 마스크로고
display: flex;
flex-direction: column;
align-items:center;
margin-right:0px;
margin-top: 11px;
background: white;
border: none;
outline:none;
`

const Box2 = styled.div`
background: white;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
flex-direction: column;
border-radius: 16px;
margin-top: 10px;
margin-bottom: 10px;
@media (min-width: 375px) and (max-width: 1440px) {
    //between
    width:90%;
    height:187px;
    
  }

@media (min-width: 1440px) {
//desktop
width:90%;
height:217px;

  }
@media (max-width: 375px) {
    //iphone
    width:90%;
  }
`
const Box3 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 18px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: column;

  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 265px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 360px;
  }
  @media (max-width: 375px) {
    //iphone
    width: 90%;
  }
`
const Box4 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 15px;
  margin-bottom: 20px;

  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 350px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 400px;
  }
  @media (max-width: 375px) {
    //iphone
    width: 90%;
  }
`

const 알림1 = styled.button`
align-items:center;
margin-top: 30px;
font-size: 20px;
background: white;
border: none;
outline:none;
`
const 알림1_bold = styled.button`
align-items:center;
font-weight: bold;
margin-top: 30px;
font-size: 20px;
background: white;
border: none;
outline:none;
`

const 알림2 = styled.button`
align-items:center;
margin-top: 0px;
font-size: 24px;
background: white;
border: none;
outline:none;
`

const 알림3 = styled.button`
align-items:center;
margin-top: 0px;
font-size: 35px;
background: white;
border: none;
outline:none;
`

const Mask = styled.image` // 마스크로고
display: flex;
flex-direction: column;
align-items:center;
margin-right:10px;
margin-top: 0px;
background: white;
border: none;
outline:none;
`

function DustPage() {
    return (
        <>
            <Header></Header>
            <Background>
                <Wrapper1>
                    <Box1>
                    </Box1>
                    <Box2></Box2>
                    <Box2></Box2>

                </Wrapper1>
                <Wrapper2>
                    <Box3>
                      <div>
                       <알림1> 미세먼지 좋아요~</알림1>
                       <알림1_bold> 덴탈마스크 </알림1_bold>
                       <알림1>추천 </알림1>
                      </div>
                       <Mask><img src={mask} /></Mask>
                       <알림2> 14시 30분 ~ 15시 30분  </알림2>
                       <알림3> <div> 환기 시간 입니다 </div></알림3>
                    </Box3>
                    <Box4></Box4>
                </Wrapper2>

                <Wrapper3>
                    <Box1></Box1>
                    <Box2></Box2>
                    <Box2></Box2>
                    <Box3></Box3>
                    <Box4></Box4>
                </Wrapper3>
            </Background>

        </>
    );
}

export default DustPage;