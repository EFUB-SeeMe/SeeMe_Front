import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LocationText from '../../components/LocationText'
import MainGraph from './MainGraph'
import { AlwaysScrollSection } from './AlwaysScrollSection'
import { useState, useEffect, useRef } from 'react'
import RainGraph from './RainGraph'
import WeekGraph from './WeekGraph'
import MainInfo from './MainInfo'
import MainInfo2 from './MainInfo2'
import image from '../../assets/location.svg'
import Rain from '../../assets/Rain.svg'
import Clothes from './Clothes'
import Location from '../Location'
import { latToAdd, weatherMain } from '../../_actions/user_action'

const Background = styled.div`
  background-color: #ecf4ff;
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
  margin-bottom: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 280px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 300px;
  }
  @media (max-width: 430px) {
    //iphone
    width: 90%;
    margin-top: 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 250px;
  }
`
const MainBox = styled.div`
  height: 260px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 15px;
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

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 20px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 245px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 245px;
  }
  @media (max-width: 430px) {
    //iphone
    width: 90%;
    height: 230px;
  }
`
const Box3 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 18px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 300px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 360px;
  }
  @media (max-width: 430px) {
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

  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 350px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 400px;
  }
  @media (max-width: 430px) {
    //iphone
    width: 90%;
    height: 290px;
  }
`

function MainPage() {
  const gsLocation = Location()
  console.log(`gsLocation: ${JSON.stringify(gsLocation)}`)
  const [nameState, setNameState] = useState({ status: 'idle', member: null })
  const [weatherState, setWeatherState] = useState({
    status: 'idle',
    member: null,
  })
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
      console.log(data)
    })
  }, [])

  //WEATHER MAIN
  useEffect(() => {
    dispatch(
      weatherMain(
        window.localStorage.getItem('lat'),
        window.localStorage.getItem('lon')
      )
    ).then(response => {
      setWeatherState({ status: 'pending' })
      const data = response.payload
      setTimeout(
        () => setWeatherState({ status: 'resolved', member: data }),
        600
      )
      console.log(weatherState)
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
                <img style={{ height: '22px', width: '22px' }} src={image} />

                <p style={{ marginTop: '3px' }}>&ensp; {nameState?.member}</p>
              </Row>
              <Row>
                <img
                  style={{ width: '160px', height: '160px' }}
                  src={weatherState?.member?.currentInfo?.document?.icon}
                />
              </Row>
              <Row>
                {' '}
                <p>흐림</p>
              </Row>
            </MainBox>
            <MainInfo
              current={weatherState?.member?.currentInfo?.document?.currTemp}
              feel="23"
              high="30"
              low="21"
              today=" 뫄뫄"
              yesterday="뫄뫄 "
            />
          </Box1>
          <Box2>
            <p style={{ marginLeft: '3%' }}>시간대별 기온</p>

            <Row>
              <AlwaysScrollSection>
                <MainGraph height="80" color="#D9D4FF" num="26" time="18" />
                <MainGraph height="90" color="#D9D4FF" num="29" time="19" />
                <MainGraph height="60" color="#D9D4FF" num="23" time="20" />
                <MainGraph height="50" color="#D9D4FF" num="24" time="21" />
                <MainGraph height="80" color="#D9D4FF" num="26" time="22" />
                <MainGraph height="40" color="#D9D4FF" num="21" time="23" />
                <MainGraph height="80" color="#D9D4FF" num="26" time="0" />
                <MainGraph height="70" color="#D9D4FF" num="24" time="1" />
                <MainGraph height="50" color="#D9D4FF" num="23" time="2" />
                <MainGraph height="40" color="#D9D4FF" num="21" time="3" />
                <MainGraph height="60" color="#D9D4FF" num="23" time="4" />
              </AlwaysScrollSection>
            </Row>
          </Box2>
          <Box2>
            <p style={{ marginLeft: '3%' }}>시간대별 강수량</p>
            <AlwaysScrollSection>
              <RainGraph height="80" num="30" time="18" />
              <RainGraph height="80" num="30" time="19" />
              <RainGraph height="60" num="20" time="20" />
              <RainGraph height="50" num="10" time="21" />
              <RainGraph height="50" num="10" time="22" />
              <RainGraph height="30" num="5" time="23" />
              <RainGraph height="0" num="0" time="0" />
              <RainGraph height="0" num="0" time="1" />
              <RainGraph height="0" num="0" time="2" />
              <RainGraph height="0" num="0" time="3" />
              <RainGraph height="0" num="0" time="4" />
            </AlwaysScrollSection>
          </Box2>
        </Wrapper1>
        <Wrapper2>
          <Box3>
            <Clothes />
          </Box3>
          <Box4>
            <p
              style={{
                marginLeft: '30px',
                fontFamily: 'NotoSans',
                fontSize: '20px',
              }}
            >
              {' '}
              이번 주 날씨{' '}
            </p>
            <Column>
              {weatherState.member?.weekInfo?.document?.map((array, i) => (
                <WeekGraph
                  day={array?.day}
                  amIcon={array?.amIcon}
                  pmIcon={array?.pmIcon}
                  hot={array?.max}
                  cold={array?.min}
                />
              ))}
            </Column>
          </Box4>
        </Wrapper2>

        <Wrapper3>
          <LocationText />
          <Box1>
            <img
              style={{ width: '140px', height: '140px', marginTop: '10px' }}
              src={Rain}
            />
            <MainInfo2 />
          </Box1>
          <Box2>
            <p style={{ marginLeft: '3%' }}>시간대별 기온</p>
            <Row>
              <AlwaysScrollSection>
                <MainGraph height="80" color="#D9D4FF" num="26" time="18" />
                <MainGraph height="80" color="#D9D4FF" num="29" time="19" />
                <MainGraph height="60" color="#D9D4FF" num="23" time="20" />
                <MainGraph height="50" color="#D9D4FF" num="24" time="21" />
                <MainGraph height="80" color="#D9D4FF" num="26" time="22" />
                <MainGraph height="40" color="#D9D4FF" num="21" time="23" />
                <MainGraph height="80" color="#D9D4FF" num="26" time="0" />
                <MainGraph height="70" color="#D9D4FF" num="24" time="1" />
                <MainGraph height="50" color="#D9D4FF" num="23" time="2" />
                <MainGraph height="40" color="#D9D4FF" num="21" time="3" />
                <MainGraph height="60" color="#D9D4FF" num="23" time="4" />
              </AlwaysScrollSection>
            </Row>
          </Box2>
          <Box2>
            <p style={{ marginLeft: '3%' }}>시간대별 강수량</p>
            <AlwaysScrollSection>
              <RainGraph height="80" num="30" time="18" />
              <RainGraph height="80" num="30" time="19" />
              <RainGraph height="60" num="20" time="20" />
              <RainGraph height="50" num="10" time="21" />
              <RainGraph height="50" num="10" time="22" />
              <RainGraph height="30" num="5" time="23" />
              <RainGraph height="0" num="0" time="0" />
              <RainGraph height="0" num="0" time="1" />
              <RainGraph height="0" num="0" time="2" />
              <RainGraph height="0" num="0" time="3" />
              <RainGraph height="0" num="0" time="4" />
            </AlwaysScrollSection>
          </Box2>

          <Box3>
            <Clothes />
          </Box3>
          <Box4>
            <p style={{ marginLeft: '3%', fontFamily: 'NotoSans' }}>
              {' '}
              이번 주 날씨{' '}
            </p>
            <Column>
              {weatherState.member?.weekInfo?.document?.map((array, i) => (
                <WeekGraph
                  day={array?.day}
                  amIcon={array?.amIcon}
                  pmIcon={array?.pmIcon}
                  hot={array?.max}
                  cold={array?.min}
                />
              ))}
            </Column>
          </Box4>
        </Wrapper3>
      </Background>
      <Footer />
    </>
  )
}

export default MainPage
