import styled from "styled-components";
import { useDispatch } from 'react-redux';
import Header from "../../components/Header/Header"

// load image
import mask from "../../assets/Dust_mask.svg";

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
  align-items: center;

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


const explaindust1 = styled.button`
 font-size: 14px;
 font-weight: bold;
 margin-left:60px;
 margin-top:10px;
 background: white;
 border: none;
 outline:none;
 `


const explaindust2 = styled.button`
 font-weight: bold;
 align-items:center;
 margin-top: 0px;
  font-size: 24px;
`

const explaindust3 = styled.button`
  font-weight: bold;
 align-items:center;
 margin-top: 0px;
  font-size: 30px;
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
                    <Box1></Box1>
                    <Box2></Box2>
                    <Box2></Box2>

                </Wrapper1>
                <Wrapper2>
                    <Box3>
                       <explaindust1> <div> 미세먼지 좋아요~ 덴탈마스크 추천 </div> </explaindust1>
                       <explaindust2> <div> 14시 30분 ~ 15시 30분 </div> </explaindust2>
                       <Mask><img src={mask} /></Mask>
                       <explaindust3> <div> 환기 시간 입니다 </div></explaindust3>
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