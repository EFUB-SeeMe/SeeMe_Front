import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LocationText from '../../components/LocationText'
import ascent_dif from '../../assets/ascent_dif.svg'
import descent_dif from '../../assets/descent_dif.svg'
import cur_location from '../../assets/cur_location.svg'
import dividing_line from '../../assets/dividing_line.svg'

const Background = styled.div`
  background-color: #e5e5e5;
  background-repeat: no-repeat;
  background-position: center top;
  min-height: 95vh;
  margin: 0;
  display: flex;
  flex-direction: column;
`
const Wrapper1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
const Box1 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 8px;
  margin-top: 20px;

  @media (min-width: 375px) and (max-width: 1440px) {
    // between
    width: 70%;
    height: 273px;
  }

  @media (min-width: 1440px) {
    // desktop
    width: 70%;
    height: 280px;
  }

  @media (max-width: 375px) {
    // iphone
    width: 90%;
    height: 138px;
    margin-top: 15px;
  }
`
const Wrap1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Wrap2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 375px) {
    //iphone
    display: none;
  }
`
const Loc_Icon = styled.button`
  left: 18.12%;
  right: 80.14%;
  top: 10.84%;
  bottom: 86.91%;
  outline: none;
  border: none;
  margin-left: 37px;
  margin-top: 21px;
  background: white;
`
const Text1 = styled.a`
  width: 195px;
  height: 32px;
  left: 296.01px;
  top: 105px;
  margin-top: 15px;
  font-family: 'NotoSans';
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 32px;

  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    font-size: 20px;
    line-height: 32px;
  }
`
const Text2 = styled.div`
  width: 200px;
  height: 34px;
  left: 376px;
  top: 161px;
  margin-left: 152px;

  font-family: 'NotoSans';
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 34px;
  color: #000000;

  @media (max-width: 375px) {
    //iphone
    display: none;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    font-size: 22px;
    margin-left: 130px;
  }
`
const Wrap2a = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Text3 = styled.div`
  width: 185px;
  height: 95px;
  left: 375px;
  top: 196px;
  margin-left: 152px;

  font-family: 'NotoSans';
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  line-height: 95px;
  color: #000000;

  @media (max-width: 375px) {
    //iphone
    display: none;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    font-size: 60px;
    margin-left: 140px;
  }
`
const Wrap3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Line = styled.div`
  width: 0px;
  height: 183.5px;
  left: 718px;
  top: 150.5px;
  border: 1.5px solid #d9d9d9;

  margin-left: 158px;
  margin-top: 15px;
  @media (max-width: 375px) {
    //iphone
    width: 0px;
    height: 106px;
    left: 187px;
    top: 120px;
    border: 1.5px solid #d9d9d9;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    margin-left: 95px;
  }
`
const Ascent = styled.image`
  width: 99px;
  height: 37px;
  left: 410px;
  top: 302px;
  margin-top: 11px;
  margin-left: 150px;

  @media (max-width: 375px) {
    //iphone
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    margin-left: 100px;
  }
`
const Descent = styled.image`
  width: 99px;
  height: 37px;
  left: 925px;
  top: 302px;
  margin-top: 11px;
  margin-left: 150px;

  @media (max-width: 375px) {
    //iphone
    width: 0px;
    height: 106px;
    left: 187px;
    top: 120px;
    border: 1.5px solid #d9d9d9;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    margin-left: 100px;
  }
`
const Box2 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 8px;
  margin-top: 15px;

  @media (min-width: 375px) and (max-width: 1440px) {
    // between
    width: 70%;
    height: 310px;
  }

  @media (min-width: 1440px) {
    // desktop
    width: 70%;
    height: 323px;
  }

  @media (max-width: 375px) {
    // iphone
    width: 90%;
    height: 314px;
    margin-top: 15px;
  }
`
const Box3 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-bottom: 20px;
  margin-top: 15px;

  @media (min-width: 375px) and (max-width: 1440px) {
    // between
    width: 70%;
    height: 254px;
  }

  @media (min-width: 1440px) {
    // desktop
    width: 70%;
    height: 266px;
  }

  @media (max-width: 375px) {
    // iphone
    width: 90%;
    margin-top: 17px;
    height: 254px;
  }
`
function CovidPage() {
  return (
    <div>
      <Header></Header>
      <Background>
        <Wrapper1>
          <LocationText />
          <Box1>
            <Wrap1>
              <Wrap2>
                <Loc_Icon>
                  <img src={cur_location} />
                </Loc_Icon>
                <Text1>현재 위치(00구 00동)</Text1>
              </Wrap2>
              <Wrap2a>
                <Wrap3>
                  <Text2>오늘의 확진자 수</Text2>
                  <Text3>567명</Text3>
                  <Ascent>
                    <img src={ascent_dif}></img>
                  </Ascent>
                </Wrap3>
                <Line></Line>
                <Wrap3>
                  <Text2 style={{}}>우리지역 확진자 수</Text2>
                  <Text3>334명</Text3>
                  <Descent>
                    <img src={descent_dif}></img>
                  </Descent>
                </Wrap3>
              </Wrap2a>
            </Wrap1>
          </Box1>
          <Box2></Box2>
          <Box3></Box3>
        </Wrapper1>
      </Background>
      <Footer />
    </div>
  )
}

export default CovidPage
