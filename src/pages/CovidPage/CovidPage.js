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

  @media (min-width: 375px) and (max-width: 1440px) {
    // between
    //margin-top: 40px;
    width: 70%;
    height: 200px;
  }

  @media (max-width: 375px) {
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

  @media (min-width: 375px) and (max-width: 1440px) {
    // between
    width: 70%;
    height: 230px;
    // margin-top: 8px;
  }

  @media (max-width: 375px) {
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
    height: 266px;
  }

  @media (min-width: 375px) and (max-width: 1440px) {
    // between
    width: 70%;
    height: 210px;
    margin-top: 18px;
  }

  @media (max-width: 375px) {
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

  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    height: 28px;
  }
  @media (max-width: 375px) {
    //iphone
    display: none;
  }
`
// Current Location Text
const Text1 = styled.a`
  width: 195px;
  height: 32px;
  margin-top: 15px;
  font-family: 'NotoSans';
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 32px;

  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    font-size: 16px;
    line-height: 22px;
  }
`
const Loc_Icon = styled.button`
  outline: none;
  border: none;
  margin-left: 37px;
  margin-top: 21px;
  background: white;

  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    margin-top: 10px;
  }
`
const Wrap2a = styled.div`
  display: flex;
  flex-direction: row;
  //align-items: center;
  justify-content: center;
`
const Wrap3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;

  @media (max-width: 375px) {
    //iphone
    width: 150px;
  }
`
// 오늘의 확진자 수 & 우리지역 확진자 수
const Text2 = styled.div`
  margin-left: 7px;
  margin-top: 15px;
  font-family: 'NotoSans';
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  color: #000000;

  @media (min-width: 1055px) and (max-width: 1440px) {
    //between
    margin-top: 10px;
    font-size: 17px;
  }
  @media (min-width: 375px) and (max-width: 1055px) {
    //ipad & ipad pro
    font-size: 16px;
    line-height: 30px;
  }
  @media (max-width: 375px) {
    //iphone
    margin-top: 10px;
    margin-left: 15px;
    width: 125px;
    font-size: 15px;
  }
`
// Number
const Text3 = styled.div`
  font-family: 'NotoSans';
  font-style: normal;
  font-weight: normal;
  font-size: 70px;
  color: #000000;
  margin-left: 20px;

  @media (max-width: 375px) {
    //iphone
    font-size: 50px;
    margin-left: 10px;
  }
  @media (min-width: 375px) and (max-width: 1440px) {
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
  @media (min-width: 376px) and (max-width: 1024px) {
    //ipad pro
    margin-left: 80px;
    margin-right: 80px;
    height: 150px;
    border: 1px solid #d9d9d9;
  }
  @media (max-width: 375px) {
    //iphone
    margin-left: 8px;
    margin-right: 8px;
    height: 100px;
    border: 0px solid #d9d9d9;
  }
`
const Ascent = styled.img`
  margin-top: 11px;
  width: 99px;
  height: 37px;

  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    margin-left: 10px;
    width: 89px;
    height: 30px;
  }
  @media (max-width: 375px) {
    //iphone
    margin-top: 5px;
    width: 50px;
    height: 21px;
  }
`
Ascent.defaultProps = {
  src: ascent_dif,
}
const Descent = styled.img`
  margin-top: 11px;
  width: 99px;
  height: 37px;

  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    margin-left: 10px;
    width: 89px;
    height: 30px;
  }
  @media (max-width: 375px) {
    //iphone
    margin-top: 5px;
    width: 50px;
    height: 21px;
  }
`
Descent.defaultProps = {
  src: descent_dif,
}
function CovidPage() {
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
              <Text1>현재 위치(00구 00동)</Text1>
            </Wrap2>
            <Wrap2a>
              <Wrap3>
                <Text2>오늘의 확진자 수</Text2>
                <Text3>567명</Text3>
                <Ascent></Ascent>
              </Wrap3>
              <Line></Line>
              <Wrap3>
                <Text2>우리지역 확진자 수</Text2>
                <Text3>334명</Text3>
                <Descent></Descent>
              </Wrap3>
            </Wrap2a>
          </Wrap1>
        </Box1>
        <Box2></Box2>
        <Box3></Box3>
      </Background>
      <Footer />
    </div>
  )
}

export default CovidPage
