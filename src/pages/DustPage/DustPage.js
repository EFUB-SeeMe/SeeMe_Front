import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LocationText from '../../components/LocationText'
import { latToAdd, dustMain } from '../../_actions/user_action'
import { AlwaysScrollSection } from '../MainPage/AlwaysScrollSection'
import { useState, useEffect, useRef } from 'react'

// load image
import mask from '../../assets/Dust_mask.svg'
import dust from '../../assets/Group 336.svg'
import location from '../../assets/Dust_location.svg'
import blue from '../../assets/Dust_blue.svg'
import standard from '../../assets/Dust_standard.svg'
import face from '../../assets/face_bad.svg'

import Dustgraph_day from './Dustgraph_day'
import Dustgraph_today from './Dustgraph_today'
import Dustinfo from './Dustinfo'
import Dustinfo2 from './Dustinfo2'

import { micro_dust } from '../../_actions/user_action'
import { cai_main } from '../../_actions/user_action'

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
  @media (max-width: 430px) {
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
  @media (max-width: 430px) {
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
  @media (min-width: 430px) and (max-width: 1440px) {
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
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 220px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 300px;
  }
`
const Box1_mobile = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 10px;
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  @media (max-width: 430px) {
    //iphone
    width: 90%;
    height: 350px;
    margin-top: 15px;
  }
`

const MainBox = styled.div`
  height: 100%;
  width: 42%;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 15px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    height: 280px;
    width: 300px;
  }
`

const Box2 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  border-radius: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 200px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 217px;
  }
  @media (max-width: 430px) {
    //iphone
    width: 90%;
    height: 240px;
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
  margin-bottom: 0px;
  display: flex;
  flex-direction: center;
  overflow: hidden;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 265px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 360px;
  }
  @media (max-width: 430px) {
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
  overflow: hidden;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 380px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 400px;
  }
  @media (max-width: 430px) {
    //iphone
    width: 90%;
    height: 350px;
  }
`

const 농도수치 = styled.button`
  align-items: center;
  margin-top: 10px;
  font-size: 65px;
  width: 50%;
  background: none;
  border: none;
  outline: none;
  @media (max-width: 430px) {
    //iphone
    color: #42a0f0;
    display: center;
  }
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
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    font-size: 15px;
    margin-left: 20px;
  }
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const DustImage = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 130px;
    height: 130px;
  }
  @media (max-width: 430px) {
    //iphone
    width: 180x;
    height: 180px;
  }
`
/*
  DustImage.defaultProps = {
  src: microdust_good,
}
*/

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
const FaceImage = styled.img`
  width: 350px;
  height: 430px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 130px;
    height: 120px;
  }
  @media (max-width: 430px) {
    //iphone
    margin-top: 10px;
    width: 60%;
    height: 60%;
  }
  @media (min-width: 1440px) {
    // desktop
    width: 130px;
    height: 120px;
  }
`
const Box4_sub1 = styled.div`
  // 통합대기환경지수 박스
  display: flex;
  flex-direction: column;
  align-items: center; // 가로 정렬
  //align-items: left;
`
const Text3 = styled.button`
  align-items: center;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 22px;
  font-weight: regular;
  background: white;
  border: none;
  outline: none;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    font-size: 20px;
    margin-left: 40px;
    margin-right: 20px;
  }
  @media (max-width: 430px) {
    //iphone
    font-size: 15px;
    width: 90px;
    height: 25px;
  }
  @media (min-width: 1440px) {
    // desktop
    font-size: 20px;
    margin-left: 40px;
    margin-right: 20px;
  }
`

function DustPage() {
  const [mainState, setMainState] = useState({ status: 'idle', member: null })
  const [nameState, setNameState] = useState({ status: 'idle', member: null })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      latToAdd(
        window.localStorage.getItem('lat'),
        window.localStorage.getItem('lon')
      )
    ).then(response => {
      setNameState({ status: 'pending' })
      const data = response.payload
      setTimeout(() => setNameState({ status: 'resolved', member: data }), 600)
    })
  }, [])

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

  useEffect(() => {
    dispatch(
      cai_main(
        window.localStorage.getItem('so2'),
        window.localStorage.getItem('co'),
        window.localStorage.getItem('o3'),
        window.localStorage.getItem('no2')
      )
    ).then(response => {
      setMainState({ status: 'pending' })
      const data = response.payload
      setTimeout(() => setMainState({ status: 'resolved', member: data }), 600)
      console.log(data)
    })
  }, [])
  return (
    <>
      <Header></Header>
      <Background>
        <Wrapper1>
          <Box1>
            <MainBox>
              <Row>
                <img style={{ height: '35px', width: '22px' }} src={location} />
                <p style={{ fontFamily: 'NotoSans', marginTop: '5px' }}>
                  &ensp; {nameState?.member}{' '}
                </p>
              </Row>
              <Row>
                <DustImage
                  src={mainState?.member?.mainInfo?.document?.gradeIcon}
                ></DustImage>
              </Row>
              <Row>
                {' '}
                <p style={{ fontFamily: 'NotoSans', marginTop: '5px' }}>
                  {mainState?.member?.mainInfo?.document?.grade}
                </p>
              </Row>
            </MainBox>
            <Dustinfo />
          </Box1>
          <Box2></Box2>
          <Box2>
            <Box2_sub1>
              <Text> 요일별 추이 </Text>
            </Box2_sub1>
            <Box2_sub2>
              <AlwaysScrollSection>
                <Dustgraph_day
                  color="#85BFEF"
                  height1="70"
                  height2="30"
                  day="06.27"
                />
                <Dustgraph_today
                  color="#85BFEF"
                  height1="80"
                  height2="30"
                  day="06.28"
                />
                <Dustgraph_day
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  day="06.29"
                />
                <Dustgraph_day
                  color="#87EF85"
                  height1="90"
                  height2="20"
                  day="06.30"
                />
                <Dustgraph_day
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  day="06.31"
                />
                <Dustgraph_day
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  day="07.01"
                />
                <Dustgraph_day
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  day="07.02"
                />
              </AlwaysScrollSection>
            </Box2_sub2>
          </Box2>
        </Wrapper1>
        <Wrapper2>
          <Box3>
            <Dustinfo2 />
          </Box3>
          <Box4>
            <Text> 통합대기환경지수 </Text>
            <Row>
              <FaceImage src={mainState?.member?.totalInfo?.document?.caiIcon} />
            </Row>
            <Box4_sub1>
              <Row>
                <Text3> 아황산가스 </Text3>
                <Text3>
                  {' '}
                  {mainState?.member?.totalInfo?.document?.so2}ppm{' '}
                </Text3>
              </Row>
              <Row>
                <Text3> 일산화탄소 </Text3>
                <Text3>{mainState?.member?.totalInfo?.document?.co}ppm</Text3>
              </Row>
              <Row>
                <Text3> 오존 &emsp;&nbsp;&emsp; </Text3>
                <Text3>{mainState?.member?.totalInfo?.document?.o3}ppm </Text3>
              </Row>
              <Row>
                <Text3> 이산화질소 </Text3>
                <Text3>
                  {' '}
                  {mainState?.member?.totalInfo?.document?.no2}ppm{' '}
                </Text3>
              </Row>
            </Box4_sub1>
          </Box4>
        </Wrapper2>

        <Wrapper3>
          <LocationText />
          <Box1_mobile>
            <div>
              <Row>
                <DustImage
                  src={mainState?.member?.mainInfo?.document?.gradeIcon}
                />
              </Row>
              <Row>
                <a
                  style={{
                    fontSize: '16px',
                    fontFamily: 'NotoSans',
                  }}
                >
                  미세먼지&emsp;&emsp;&emsp;&emsp;&emsp;초미세먼지
                </a>
              </Row>
              <Row>
                <Text2 size="60" color="#42A0F0">
                  {' '}
                  {mainState?.member?.mainInfo?.document?.pm10} &emsp;{' '}
                </Text2>
                <Text2 size="60" color="#42A0F0">
                  {' '}
                  {mainState?.member?.mainInfo?.document?.pm25}{' '}
                </Text2>
              </Row>
              <Row>
                <img style={{ marginTop: '5px' }} src={standard} />
              </Row>
            </div>
          </Box1_mobile>
          <Box2></Box2>
          <Box2>
            <Box2_sub1>
              <Text> 요일별 추이 </Text>
            </Box2_sub1>
            <Box2_sub2>
              <AlwaysScrollSection>
                <Dustgraph_day
                  color="#85BFEF"
                  height1="70"
                  height2="30"
                  day="06.27"
                />
                <Dustgraph_today
                  color="#85BFEF"
                  height1="80"
                  height2="30"
                  day="06.28"
                />
                <Dustgraph_day
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  day="06.29"
                />
                <Dustgraph_day
                  color="#87EF85"
                  height1="90"
                  height2="20"
                  day="06.30"
                />
                <Dustgraph_day
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  day="06.31"
                />
                <Dustgraph_day
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  day="07.01"
                />
                <Dustgraph_day
                  color="#87EF85"
                  height1="60"
                  height2="20"
                  day="07.02"
                />
              </AlwaysScrollSection>
            </Box2_sub2>
          </Box2>

          <Box3>
            <Dustinfo2 />
          </Box3>
          <Box4>
            <Text> 통합대기환경지수 </Text>
            <Row>
              <FaceImage src={face} />
            </Row>
            <Box4_sub1>
              <Row>
                <Text3> 아황산가스 </Text3>
                <Text3>
                  {' '}
                  {mainState?.member?.totalInfo?.document?.so2}ppm{' '}
                </Text3>
              </Row>
              <Row>
                <Text3> 일산화탄소 </Text3>
                <Text3> {mainState?.member?.totalInfo?.document?.co}ppm </Text3>
              </Row>
              <Row>
                <Text3> 오존 </Text3>
                <Text3>{mainState?.member?.totalInfo?.document?.o3}ppm </Text3>
              </Row>
              <Row>
                <Text3> 이산화질소 </Text3>
                <Text3>
                  {' '}
                  {mainState?.member?.totalInfo?.document?.no2}ppm{' '}
                </Text3>
              </Row>
            </Box4_sub1>
          </Box4>
        </Wrapper3>
      </Background>
      <Footer />
    </>
  )
}

export default DustPage
