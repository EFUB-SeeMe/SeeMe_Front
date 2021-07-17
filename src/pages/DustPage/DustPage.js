import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LocationText from '../../components/LocationText'

// load image
import mask from '../../assets/Dust_mask.svg'
import dust from '../../assets/Group 336.svg'
import location from '../../assets/Dust_location.svg'
import blue from '../../assets/Dust_blue.svg'
import standard from '../../assets/Dust_standard.svg'


import Dustgraph_day from './Dustgraph_day'
import Dustgraph_today from './Dustgraph_today'
import Dustgraph_time from './Dustgraph_time'
import Dustinfo from './Dustinfo'

import DustMap from './DustMap'
import { Scroll } from "./Scroll";



const Background = styled.div`
  background-color: #e9e7ff;
  background-repeat: no-repeat;
  background-position: center top;
  min-height: 95vh;
  margin: 0;
  display: flex;
  flex-direction: row;
`
const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 55%;
  @media (max-width: 420px) {
    //iphone
    display: none;
  }
`

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 45%;
  @media (max-width: 420px) {
    //iphone
    display: none;
  }
`
const Wrapper3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: 420px) and (max-width: 1440px) {
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

  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 220px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 300px;
  }
  @media (max-width: 420px) {
    //iphone
    width: 90%;
    height: 350px;
    margin-top: 15px;
  }
`
const Box1_sub1 = styled.div`
  // 현재위치 박스
  display: flex;
  flex-direction: column; // 세로 정렬
  // justify-content: center; //센터정렬
  align-items: center;
  width: 40%;
  background-color: none;
`

const Box1_sub2 = styled.div`
  // 현재위치 오른쪽 박스 통칭
  display: flex;
  flex-direction: column; // 세로 정렬
  width: 60%;
  background-color: none;
`
const Box1_sub3 = styled.div`
  // 오른쪽 박스의 위 박스
  display: row;
  flex-direction: row; // 가로 정렬
  background-color: none;
  height: 55%;
`
const Box1_sub4 = styled.div`
  // 오른쪽 박스의 아래 박스
  display: flex;
  flex-direction: column; // 세로정렬
  height: 45%;
`
const Box1_sub5 = styled.div`
  // 미세먼지 농도 초미세농도
  display: flex;
  flex-direction: column;
  width: 50%;
`
const MainBox = styled.div`
  height: 220px;
  width: 330px;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 15px;
`
const Location = styled.image`
  // 위치 아이콘
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 0px;
  margin-top: 15px;
  background: none;
  border: none;
  outline: none;
`
const Dust = styled.image`
  // 더스트이미지
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: -40px;
  margin-top: 0px;
  background: none;
  border: none;
  outline: none;
`
const Standard = styled.image`
  // 더스트기준
  display: flex;
  flex-direction: center;
  align-items: center;
  margin-left: 45%;
  margin-top: 10px;
  background: none;
  border: none;
  outline: none;
`

const Box2 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  border-radius: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow:hidden;
  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 187px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 217px;
  }
  @media (max-width: 420px) {
    //iphone
    width: 90%;
  }
`
const Box2_sub1 = styled.div`
  // 현재위치 박스
  display: flex;
  align-items: left;
  height: 25%;
`

const Box2_sub2 = styled.div`
  // 현재위치 박스
  display: flex;
  flex-direction: row;
  align-items: flex-end; // 가로 정렬
  //align-items: left;
  height: 75%;
`

const Box3 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 18px;
  margin-bottom: 5px;

  display: flex;
  flex-direction: column;
  overflow:hidden;

  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 265px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 360px;
  }
  @media (max-width: 420px) {
    //iphone
    width: 90%;
    height: 330px;
  }
`
const Box4 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 15px;
  margin-bottom: 20px;
  overflow:hidden;

  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 350px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 400px;
  }
  @media (max-width: 420px) {
    //iphone
    width: 90%;
    height: 300px;
  }
`

const Box4_sub1 = styled.div`
  // 현재위치 박스
  display: flex;
  height: 15%;
  background-color: none;
`
const Box4_sub2 = styled.div`
  // 현재위치 박스
  display: flex;
  flex-direction: column; // 세로 정렬
  // justify-content: center; //센터정렬
  align-items: center;
  height: 90%;
  background-color: none;
`
const 알림1 = styled.button`
  align-items: center;
  margin-top: 30px;
  margin-left: 130px;
  font-size: 20px;
  background: white;
  border: none;
  outline: none;
  @media (max-width: 420px) {
    //iphone
    display: center;
    margin-top: 30px;
    margin-left: 52px;
    font-size: 14px;
  }
`
const 알림1_bold = styled.button`
  align-items: center;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 5px;
  font-size: 20px;
  background: white;
  border: none;
  outline: none;
  @media (max-width: 420px) {
    //iphone
    display: center;
    margin-top: 30px;
    margin-left: 5px;
    font-size: 14px;
  }
`

const 알림2 = styled.button`
  align-items: center;
  margin-top: 0px;
  font-size: 24px;
  background: white;
  border: none;
  outline: none;
  @media (max-width: 420px) {
    //iphone
    display: center;
    margin-top: -30px;
    margin-left: 61px;
    font-size: 20px;
  }
`

const 알림3 = styled.button`
  align-items: center;
  margin-top: 0px;
  font-size: 35px;
  background: white;
  border: none;
  outline: none;
  @media (max-width: 420px) {
    //iphone
    display: center;
    margin-top: -0px;
    margin-left: 60px;
    font-size: 30px;
  }
  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    font-size: 25px;
  }
`
const 추천 = styled.button`
  align-items: center;
  margin-top: 0px;
  margin-left: 5px;
  font-size: 20px;
  background: white;
  border: none;
  outline: none;
  @media (max-width: 420px) {
    //iphone
    display: center;
    margin-top: 30px;
    margin-left: -5px;
    font-size: 14px;
  }
`

const 농도수치 = styled.button`
  align-items: center;
  margin-top: 10px;
  margin-left: 90px;
  margin-right: -9px;
  font-size: 65px;
  background: none;
  border: none;
  outline: none;
  @media (max-width: 420px) {
    //iphone
    color: #42a0f0;
    margin-left: 67px;
    margin-right: -30px;
    display: center;
  }
`

const Mask = styled.image`
  // 마스크로고
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-top: 0px;
  background: white;
  border: none;
  outline: none;

  
`
const Text = styled.button`
  align-items: left;
  margin-top: 20px;
  margin-left: 30px;
  font-size: 20px;
  font-weight: bold;
  background: white;
  border: none;
  outline: none;
  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    font-size: 15px;
    margin-left: 20px;
  }
`

const Row=styled.div`
display:flex;
flex-direction: row;
justify-content: center;
width:100%;
overflow:hidden;
`
const Column=styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
width:100%;
`

function DustPage() {
  return (
    <>
      <Header></Header>
      <Background>
        <Wrapper1>
        <Box1>
            <MainBox>
              <Row>
                <img style={{ height: '35px', width: '22px' }} src={location} />
                <p style={{ fontFamily: 'NotoSans', marginTop: '10px' }}>
                  &ensp; 성동구 성수1동
                </p>
              </Row>
              <Row>
                <img
                  style={{
                    width: '160px',
                    height: '150px',
                    marginBottom: '50px',
                  }}
                  src={dust}
                />
              </Row>
              <Row>
                {' '}
                <p style={{ fontFamily: 'NotoSans', marginTop: '20px' }}>
                  좋음
                </p>
              </Row>
            </MainBox>
            <Dustinfo />
          </Box1>
          <Box2>
          <Box2_sub1>
              <Text> 시간대별 추이 </Text>
            </Box2_sub1>

            <Box2_sub2>
              <Scroll>
                <Dustgraph_time
                  color="#85BFEF"
                  height1="50"
                  height2="30"
                  height3="40"
                  height4="20"
                  day="현재"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#85BFEF"
                  height1="50"
                  height2="30"
                  height3="40"
                  height4="20"
                  day="01시"
                  number="30"
                  number="30"
                />

                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="02시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="03시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="04시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="05시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="06시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="07시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="08시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="09시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="10시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="11시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="12시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="13시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="14시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="15시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="16시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="17시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="18시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="19시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="20시"
                  number="30"
                  number="30"
                />
              </Scroll>
            </Box2_sub2>
          </Box2>

          <Box2>
            <Box2_sub1>
              <Text> 요일별 추이 </Text>
            </Box2_sub1>
            <Box2_sub2>

              <Dustgraph_day color="#85BFEF" height1="50" height2="30" height3="40" height4="20" day="06.27"/> 
              <Dustgraph_today color="#85BFEF" height1="50" height2="30" height3="40" height4="20" day="06.28" /> 
              <Dustgraph_day color="#87EF85" height1="60" height2="20" height3="50" height4="10" day="06.29"/> 
              <Dustgraph_day color="#87EF85" height1="60" height2="20" height3="50" height4="10" day="06.30" />
              <Dustgraph_day color="#87EF85" height1="60" height2="20" height3="50" height4="10" day="06.31" />

              
            </Box2_sub2>
          </Box2>
        </Wrapper1>
        <Wrapper2>
        <Box3>
            <div>
              <알림1> 미세먼지 좋아요~</알림1>
              <알림1_bold> 덴탈마스크 </알림1_bold>
              <추천>추천 </추천>
            </div>
            <Mask>
              <img src={mask} />
            </Mask>
            <알림2> 14시 30분 ~ 15시 30분 </알림2>
            <알림3>
              {' '}
              <div> 환기 시간 입니다 </div>
            </알림3>
          </Box3>
          <Box4>
            <DustMap> </DustMap>
          </Box4>
        </Wrapper2>

        <Wrapper3>
        <LocationText />
        <Box1>
            <div>
              <img
                style={{ marginTop: '0px', marginLeft: '75px' }}
                src={dust}
              />

              <a
                style={{
                  marginTop: '16px',
                  marginLeft: '60px',
                  fontSize: '16px',
                  fontFamily: 'NotoSans',
                }}
              >
                미세먼지 농도 &ensp;&emsp; 초미세먼지 농도
              </a>

              <농도수치> 23 </농도수치>
              <농도수치> 15 </농도수치>
              <img
                style={{ marginTop: '5px', marginLeft: '50px' }}
                src={standard}
              />
            </div>
          </Box1>
          <Box2>
            <Box2_sub1>
              <Text> 시간대별 추이 </Text>
            </Box2_sub1>

            <Box2_sub2>
              <Scroll>
                <Dustgraph_time
                  color="#85BFEF"
                  height1="50"
                  height2="30"
                  height3="40"
                  height4="20"
                  day="현재"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#85BFEF"
                  height1="50"
                  height2="30"
                  height3="40"
                  height4="20"
                  day="01시"
                  number="30"
                  number="30"
                />

                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="02시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="03시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="04시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="05시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="06시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="07시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="08시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="09시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="10시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="11시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="12시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="13시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="14시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="15시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="16시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="17시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="18시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="19시"
                  number="30"
                  number="30"
                />
                <Dustgraph_time
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  height3="50"
                  height4="10"
                  day="20시"
                  number="30"
                  number="30"
                />
              </Scroll>
            </Box2_sub2>
          </Box2>
          <Box2>
          <Box2_sub1>
              <Text> 요일별 추이 </Text>
            </Box2_sub1>
            <Box2_sub2>
                <Dustgraph_day color="#85BFEF" height1="50" height2="30" height3="40" height4="20" day="06.27"/> 
                <Dustgraph_today color="#85BFEF" height1="50" height2="30" height3="40" height4="20" day="06.28" /> 
                <Dustgraph_day color="#87EF85" height1="60" height2="20" height3="50" height4="10" day="06.29"/> 
            </Box2_sub2>
          </Box2>
         
          <Box3>
            <div>
              <알림1> 미세먼지 좋아요~</알림1>
              <알림1_bold> 덴탈마스크 </알림1_bold>
              <추천>추천 </추천>
            </div>
            <Mask>
              <img src={mask} />
            </Mask>
            <알림2> 14시 30분 ~ 15시 30분 </알림2>
            <알림3>
              {' '}
              <div> 환기 시간 입니다 </div>
            </알림3>
          </Box3>

          <Box4>
            <DustMap> </DustMap>
          </Box4>
        </Wrapper3>
      </Background>
      <Footer />
    </>
  )
}

export default DustPage
