import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AlwaysScrollSection } from './AlwaysScrollSection'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LocationText from '../../components/LocationText'
import cur_location from '../../assets/cur_location.svg'
import Graph from './Graph_Total'
import Graph_Local from './Graph_Local'
import Ascent from './Ascent'
import {
  covidMain,
  covidNational,
  covidRegional,
  latToAdd,
} from '../../_actions/user_action'

const Background = styled.div`
  background-color: #e5e5e5;
  background-repeat: no-repeat;
  background-position: center top;
  align-items: center;
  justify-content: center;
  min-height: 95vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`
const Box1 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 15px;
  margin-bottom: 20px;

  @media (min-width: 1440px) {
    // desktop
    width: 70%;
    height: 280px;
  }

  @media (min-width: 420px) and (max-width: 1440px) {
    // between
    //margin-top: 40px;
    width: 70%;
    height: 200px;
  }

  @media (max-width: 420px) {
    // iphone
    width: 90%;
    height: 138px;
    margin-top: 15px;
  }
`
const Box2 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;

  @media (min-width: 1440px) {
    // desktop
    width: 70%;
    height: 323px;
  }

  @media (min-width: 420px) and (max-width: 1440px) {
    // between
    width: 70%;
    height: 250px;
    // margin-top: 8px;
  }

  @media (max-width: 420px) {
    // iphone
    width: 90%;
    height: 314px;
    //margin-top: 15px;
  }
`
const Box3 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 20px;
  margin-top: 15px;

  @media (min-width: 1440px) {
    // desktop
    width: 70%;
    height: 293px;
  }

  @media (min-width: 420px) and (max-width: 1440px) {
    // between
    width: 70%;
    height: 230px;
    margin-top: 18px;
  }

  @media (max-width: 420px) {
    // iphone
    width: 90%;
    margin-top: 17px;
    height: 254px;
  }
`
const Wrap1 = styled.div`
  display: flex;
  flex-direction: column;
`
const Wrap2 = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;

  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    height: 28px;
  }
  @media (max-width: 420px) {
    //iphone
    display: none;
  }
`
// Current Location Text
const Text1 = styled.a`
  width: 250px;
  height: 32px;
  margin-top: 18px;
  font-family: 'NotoSans';
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 32px;

  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    font-size: 16px;
    line-height: 22px;
    margin-top: 23px;
  }
`
const Loc_Icon = styled.button`
  outline: none;
  border: none;
  margin-left: 37px;
  margin-top: 21px;
  background: white;

  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    margin-top: 20px;
  }
`
const Wrap2a = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Wrap3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 420px) {
    //iphone
    width: 150px;
  }
`
// 오늘의 확진자 수 & 우리지역 확진자 수
const Text2 = styled.div`
  margin-left: 7px;
  margin-top: 15px;
  font-family: 'NotoSans';
  font-size: 25px;
  width: 200px;

  @media (min-width: 1055px) and (max-width: 1440px) {
    //between
    margin-top: 10px;
    margin-left: 60px;
    font-size: 20px;
    width: 170px;
  }
  @media (min-width: 420x) and (max-width: 1055px) {
    //ipad & ipad pro
    font-size: 17px;
  }
  @media (max-width: 420px) {
    //iphone
    margin-top: 10px;
    margin-left: 15px;
    width: 125px;
    font-size: 15px;
  }
`
// NUM of Positive results
const Text3 = styled.div`
  font-family: 'NotoSans';
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  color: #000000;
  margin-left: 20px;

  @media (max-width: 420px) {
    //iphone
    font-size: 40px;
    margin-left: 10px;
  }
  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    font-size: 40px;
  }
`
const Line = styled.div`
  width: 0px;
  height: 183.5px;
  border: 1.5px solid #d9d9d9;
  margin-left: 160px;
  margin-right: 160px;

  @media (min-width: 1024px) and (max-width: 1440px) {
    //between
    margin-left: 100px;
    margin-right: 100px;
    height: 150px;
    border: 1px solid #d9d9d9;
  }
  @media (min-width: 420px) and (max-width: 1024px) {
    //ipad pro
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 15px;
    height: 130px;
    border: 1px solid #d9d9d9;
  }
  @media (max-width: 420px) {
    //iphone
    margin-left: 8px;
    margin-right: 8px;
    height: 100px;
    border: 0px solid #d9d9d9;
  }
`

//////////////////////////////////////////////////////
///////////////// Box2 & 3 Start /////////////////////

const Wrap4 = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 420px) {
    //iphone
    flex-direction: column;
  }
`
const Wrap5 = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 200px;

  @media (min-width: 420px) and (max-width: 843px) {
    //between
    width: 30%;
  }
  @media (max-width: 420px) {
    //iphone
    flex-direction: row;
    width: 100%;
    height: 60px;
  }
`
// Graph Wrapper
const Wrap6 = styled.div`
  display: flex;
  width: 75%;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-right: 14px;
  margin-left: 20px;

  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    width: 70%;
    justify-content: space-around, center;
    margin-top: 00px;
  }
  @media (max-width: 420px) {
    //iphone
    width: 90%;
    margin-top: 00px;
  }
`
const Wrap6a = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around, center;
  width: 75%;
  margin-right: 14px;
  margin-left: 20px;
  margin-top: 70px;

  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    width: 70%;
    margin-top: 20px;
  }
  @media (max-width: 420px) {
    //iphone
    width: 90%;
    margin-top: 00px;
  }
`
const Wrap7 = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`
// 전국 확진자 추이 & 우리지역 확진자 추이
const Text4 = styled.div`
  font-family: 'NotoSans';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;
  margin-top: 25px;
  margin-bottom: 30px;
  margin-left: 40px;

  @media (min-width: 843px) and (max-width: 1440px) {
    //between
    font-size: 17px;
    margin-top: 15px;
    margin-left: 30px;
    margin-bottom: 20px;
    height: 30px;
  }
  @media (min-width: 420px) and (max-width: 843px) {
    // ipad
    font-size: 16px;
    margin-top: 15px;
    margin-left: 20px;
    margin-bottom: 10px;
    height: 30px;
  }
  @media (max-width: 420px) {
    //iphone
    font-size: 14px;
    height: 14px;
    margin-left: 10px;
    margin-top: 10px;
    margin-right: 100px;
  }
`
// 신규 / 누적
const Text5 = styled.div`
  color: ${props => props.color || '#818494'};
  font-family: 'NotoSans';
  font-size: 16px;
  line-height: 22px;
  margin-left: 40px;
  margin-bottom: 8px;

  @media (min-width: 843px) and (max-width: 1440px) {
    //between
    font-size: 14px;
    margin-left: 30px;
    margin-bottom: 0px;
    height: 30px;
  }
  @media (min-width: 420px) and (max-width: 843px) {
    // ipad
    font-size: 13px;
    margin-left: 20px;
    margin-bottom: 0px;
    height: 20px;
  }
  @media (max-width: 420px) {
    //iphone
    font-size: 12px;
    margin-right: 12px;
    margin-left: 5px;
  }
`
const BoldText1 = styled.div`
  font-family: 'NotoSansBold';
  font-size: 16px;
  line-height: 20px;
  margin-left: 40px;

  @media (min-width: 420px) and (max-width: 1440px) {
    //between
    font-size: 14px;
    margin-left: 30px;
    margin-bottom: 0px;
    height: 30px;
  }
  @media (max-width: 420px) {
    //iphone
    font-size: 12px;
    margin-right: 3px;
    margin-left: 5px;
  }
`
function CovidPage() {
  const [mainState, setMainState] = useState({ status: 'idle', member: null })
  const [nationalState, setNationalState] = useState({
    status: 'idle',
    member: null,
  })
  const [regionalState, setRegionalState] = useState({
    status: 'idle',
    member: null,
  })
  const [nameState, setNameState] = useState({ status: 'idle', member: null })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(
      covidMain(
        window.localStorage.getItem('lat'),
        window.localStorage.getItem('lon')
      )
    ).then(response => {
      setMainState({ status: 'pending' })
      const data = response.payload
      setTimeout(() => setMainState({ status: 'resolved', member: data }), 600)
    })
  }, [])

  useEffect(() => {
    dispatch(covidNational()).then(response => {
      setNationalState({ status: 'pending' })
      const data = response.payload
      setTimeout(
        () => setNationalState({ status: 'resolved', member: data }),
        600
      )
    })
  }, [])
  useEffect(() => {
    dispatch(
      covidRegional(
        window.localStorage.getItem('lat'),
        window.localStorage.getItem('lon')
      )
    ).then(response => {
      setRegionalState({ status: 'pending' })
      const data = response.payload
      setTimeout(
        () => setRegionalState({ status: 'resolved', member: data }),
        600
      )
    })
  }, [])
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

  return (
    <div>
      <Header></Header>
      <Background>
        <LocationText />
        <Box1>
          <Wrap1>
            <Wrap2>
              <Loc_Icon>
                <img src={cur_location} />
              </Loc_Icon>
              <Text1>{nameState?.member}</Text1>
            </Wrap2>
            <Wrap2a>
              <Wrap3>
                <Text2>오늘의 확진자 수</Text2>
                <Text3>{mainState?.member?.coronicTotal + '명'}</Text3>
                <Ascent
                  text={mainState?.member?.compTotal}
                  num={mainState?.member?.isIncTotal}
                ></Ascent>
              </Wrap3>
              <Line></Line>
              <Wrap3>
                <Text2>우리지역 확진자 수</Text2>
                <Text3>{mainState?.member?.coronicRegion + '명'}</Text3>
                <Ascent
                  text={mainState?.member?.compRegion}
                  num={mainState?.member?.isIncRegion}
                ></Ascent>
              </Wrap3>
            </Wrap2a>
          </Wrap1>
        </Box1>
        <Box2>
          <Wrap4>
            <Wrap5>
              <Text4>전국 확진자 추이</Text4>
              <Wrap7>
                <Text5>신규</Text5>
                <BoldText1>
                  {nationalState?.member?.newCoronic + '명'}
                </BoldText1>
              </Wrap7>
              <Wrap7>
                <Text5>누적</Text5>
                <Text5 color={'black'}>
                  {nationalState?.member?.totalCoronic + '명'}
                </Text5>
              </Wrap7>
            </Wrap5>
            <Wrap6>
              <AlwaysScrollSection>
                {nationalState.member?.coronicList?.map((corona, i) => (
                  <Graph
                    height={corona.coronicByDay / 10}
                    num={corona.coronicByDay}
                    totalDate={corona.day}
                  />
                ))}
              </AlwaysScrollSection>
            </Wrap6>
          </Wrap4>
        </Box2>
        <Box3>
          <Wrap4>
            <Wrap5>
              <Text4>우리지역 확진자 추이</Text4>
              <Wrap7>
                <Text5>신규</Text5>
                <BoldText1>
                  {regionalState?.member?.newCoronic + '명'}
                </BoldText1>
              </Wrap7>
              <Wrap7>
                <Text5>누적</Text5>
                <Text5 color={'black'}>
                  {regionalState?.member?.totalCoronic + '명'}
                </Text5>
              </Wrap7>
            </Wrap5>
            <Wrap6a>
              <AlwaysScrollSection>
                {regionalState.member?.coronicList?.map((corona, i) => (
                  <Graph_Local
                    height={corona.coronicByDay / 8}
                    num={corona.coronicByDay}
                    totalDate={corona.day}
                  />
                ))}
              </AlwaysScrollSection>
            </Wrap6a>
          </Wrap4>
        </Box3>
      </Background>
      <Footer />
    </div>
  )
}

export default CovidPage
