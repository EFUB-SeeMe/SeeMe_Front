import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LocationText from '../../components/LocationText'
import {
  latToAdd,
  dustMain,
  micro_dust,
  cai_main,
} from '../../_actions/user_action'
import { AlwaysScrollSection } from '../MainPage/AlwaysScrollSection'
import { useState, useEffect, useRef } from 'react'

// load image
import location from '../../assets/Dust_location.svg'
import standard from '../../assets/Dust_standard.svg'

import Dustgraph from './Dustgraph'
import Dustinfo from './Dustinfo'
import Dustinfo2 from './Dustinfo2'

const Background = styled.div`
  background-color: #e9e7ff;
  background-repeat: no-repeat;
  background-position: center top;
  min-height: 95vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  @media (max-width: 430px) {
    //iphone
    display: none;
  }
`
const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
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
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 80%;
    height: 220px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 80%;
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
  margin-top: 5px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    height: 280px;
    width: 50%;
  }
`

const Box2 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  overflow: hidden;

  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 80%;
    height: 250px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 80%;
    height: 300px;
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
  height: 10%;
  width: 100%;
`

const Box2_sub2 = styled.div`
  // 현재위치 박스
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //align-items: left;
  height: 75%;
`

const Box3 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 18px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  display: flex;

  overflow: hidden;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 39.5%;
    height: 290px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 39.5%;
    height: 300px;
  }
  @media (max-width: 430px) {
    //iphone
    flex-direction: column;
    justify-content: center;
    width: 90%;
    height: 390px;
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
  width: 184px;
  height: 200px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 120px;
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
const cur_loc = styled.img`
  width: 22px;
  height: 35px;
`
cur_loc.defaultProps = {
  src: location,
}

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
  height: 350px;

  @media (min-width: 430px) and (max-width: 1025px) {
    //ipad
    margin-top: 10px;
    width: 80px;
    height: 130px;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    //between
    margin-top: 10px;
    width: 100px;
    height: 150px;
  }
  @media (max-width: 430px) {
    //iphone
    margin-top: 10px;
    width: 100px;
    height: 150px;
  }
  @media (min-width: 1440px) {
    // desktop
    margin-top: 3px;
    width: 110px;
    height: 160px;
  }
`
const Box4_sub1 = styled.div`
  // 통합대기환경지수 박스
  display: flex;
  height: 190px;
  width: 90%auto;
  flex-direction: column;
  justify-content: center;
  align-content: center; // 가로 정렬
`
const Text3 = styled.button`
  align-items: center;
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 0px;
  font-size: 22px;
  font-family: 'NotoSans';
  background: white;
  border: none;
  outline: none;

  @media (min-width: 430px) and (max-width: 1024px) {
    //ipad
    font-size: 14px;
    width: 90px;
    margin-right: 5px;
  }
  @media (min-width: 1025px) and (max-width: 1440px) {
    //between
    font-size: 15px;
    width: 90px;
    margin-right: 10px;
  }
  @media (max-width: 430px) {
    //iphone
    font-size: 15px;
    width: 90px;
    height: 25px;
    margin-top: 12px;
  }
  @media (min-width: 1440px) {
    // desktop
    font-size: 20px;
    width: 120px;
    height: 30px;
  }
`

function DustPage() {
  const [mainState, setMainState] = useState({ status: 'idle', member: null })
  const [nameState, setNameState] = useState({ status: 'idle', member: null })
  const [dustState, setDustState] = useState({ status: 'idle', member: null })

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

  //microdust
  useEffect(() => {
    dispatch(
      micro_dust(
        window.localStorage.getItem('dust'),
        window.localStorage.getItem('microdust'),
        window.localStorage.getItem('date')
      )
    ).then(response => {
      setDustState({ status: 'pending' })
      const data = response.payload
      setTimeout(() => setDustState({ status: 'resolved', member: data }), 600)
      console.log(dustState)
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
              <Row style={{ alignContent: 'flex-start' }}>
                <img
                  style={{ height: '35px', width: '22px', marginLeft: '0px' }}
                  src={location}
                />
                <p
                  style={{
                    fontFamily: 'NotoSans',
                    marginTop: '5px',
                    size: '32px',
                  }}
                >
                  &ensp; {nameState?.member}{' '}
                </p>
              </Row>
              <Row>
                <DustImage
                  src={mainState?.member?.mainInfo?.document?.gradeIcon}
                ></DustImage>
              </Row>
            </MainBox>
            <Dustinfo
              finedust={mainState?.member?.mainInfo?.document?.pm10}
              microdust={mainState?.member?.mainInfo?.document?.pm25}
              briefing={mainState?.member?.mainInfo?.document?.desc}
            />
          </Box1>
          <Box2>
            <Box2_sub1>
              <Text> 요일별 추이 </Text>
            </Box2_sub1>
            <Box2_sub2>
              <AlwaysScrollSection>
                {dustState.member?.map((array, i) => (
                  <Dustgraph
                    color="#85BFEF"
                    height1={array?.dust * 3}
                    height2={array?.microdust * 3}
                    day={array?.date}
                  />
                ))}
              </AlwaysScrollSection>
            </Box2_sub2>
          </Box2>
          <Wrapper2>
            <Box3>
              <Column
                style={{
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginLeft: '10px',
                }}
              >
                <Text style={{ marginLeft: '20px' }}> 통합대기환경지수 </Text>
                <Row
                  style={{
                    width: '90%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginLeft: '20px',
                  }}
                >
                  <Row>
                    <FaceImage
                      src={mainState?.member?.totalInfo?.document?.caiIcon}
                    />
                  </Row>
                  <Box4_sub1
                    style={{ marginRight: '10px', justifySelf: 'center' }}
                  >
                    <Row>
                      <Text3> 아황산가스 </Text3>
                      <Text3>
                        {' '}
                        {mainState?.member?.totalInfo?.document?.so2}ppm{' '}
                      </Text3>
                    </Row>
                    <Row>
                      <Text3> 일산화탄소 </Text3>
                      <Text3>
                        {mainState?.member?.totalInfo?.document?.co}ppm
                      </Text3>
                    </Row>
                    <Row>
                      <Text3> 오존 &emsp;&nbsp;&emsp; </Text3>
                      <Text3>
                        {mainState?.member?.totalInfo?.document?.o3}ppm{' '}
                      </Text3>
                    </Row>
                    <Row>
                      <Text3> 이산화질소 </Text3>
                      <Text3>
                        {' '}
                        {mainState?.member?.totalInfo?.document?.no2}ppm{' '}
                      </Text3>
                    </Row>
                  </Box4_sub1>
                </Row>
              </Column>
            </Box3>
            <Box3>
              <Dustinfo2 />
            </Box3>
          </Wrapper2>
        </Wrapper1>

        <Wrapper3>
          <LocationText text={nameState?.member} />
          <Box1_mobile>
            <div>
              <Row>
                <DustImage
                  style={{ height: '180px', width: '150px' }}
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

          <Box2>
            <Box2_sub1>
              <Text> 요일별 추이 </Text>
            </Box2_sub1>
            <Box2_sub2>
              <AlwaysScrollSection>
                {dustState.member?.map((array, i) => (
                  <Dustgraph
                    color="#85BFEF"
                    height1={array?.dust * 3}
                    height2={array?.microdust * 3}
                    day={array?.date}
                  />
                ))}
              </AlwaysScrollSection>
            </Box2_sub2>
          </Box2>
          <Box3>
            <column style={{ justifyContent: 'center' }}>
              <Text
                style={{
                  marginBottom: '10px',
                  marginLeft: '12px',
                  fontSize: '18px',
                }}
              >
                {' '}
                통합대기환경지수{' '}
              </Text>
              <Row>
                <FaceImage
                  style={{ marginTop: '5px' }}
                  src={mainState?.member?.totalInfo?.document?.caiIcon}
                />
              </Row>
              <Box4_sub1
                style={{
                  marginLeft: '16px',
                  width: '280px',
                  alignContent: 'center',
                }}
              >
                <Row>
                  <Text3> 아황산가스 </Text3>
                  <Text3>
                    {' '}
                    {mainState?.member?.totalInfo?.document?.so2}ppm{' '}
                  </Text3>
                </Row>
                <Row>
                  <Text3> 일산화탄소 </Text3>
                  <Text3>
                    {' '}
                    {mainState?.member?.totalInfo?.document?.co}ppm{' '}
                  </Text3>
                </Row>
                <Row>
                  <Text3> 오존 </Text3>
                  <Text3>
                    {mainState?.member?.totalInfo?.document?.o3}ppm{' '}
                  </Text3>
                </Row>
                <Row>
                  <Text3> 이산화질소 </Text3>
                  <Text3>
                    {' '}
                    {mainState?.member?.totalInfo?.document?.no2}ppm{' '}
                  </Text3>
                </Row>
              </Box4_sub1>
            </column>
          </Box3>

          <Box3>
            <Dustinfo2 />
          </Box3>
        </Wrapper3>
      </Background>
      <Footer />
    </>
  )
}

export default DustPage
