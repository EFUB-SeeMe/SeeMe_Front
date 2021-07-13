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
`
const Wrap3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
                <img
                  style={{ marginTop: '21px', marginLeft: '37px' }}
                  src={cur_location}
                />
                <a
                  style={{
                    marginTop: '15px',
                    marginLeft: '10px',
                    fontSize: '22px',
                    fontFamily: 'NotoSans',
                  }}
                >
                  현재 위치(00구 00동)
                </a>
              </Wrap2>
              <Wrap2>
                <Wrap3>
                  <a
                    style={{
                      marginTop: '24px',
                      marginLeft: '160px',
                      fontSize: '25px',
                      fontFamily: 'NotoSans',
                    }}
                  >
                    오늘의 확진자 수
                  </a>
                  <a
                    style={{
                      marginLeft: '160px',
                      fontSize: '70px',
                      fontFamily: 'NotoSans',
                    }}
                  >
                    567명
                  </a>
                  <img
                    style={{
                      marginTop: '10px',
                      marginLeft: '182px',
                      height: '37px',
                      width: '99px',
                    }}
                    src={ascent_dif}
                  ></img>
                </Wrap3>
                <img
                  style={{
                    marginLeft: '160px',
                  }}
                  src={dividing_line}
                ></img>
                <Wrap3>
                  <a
                    style={{
                      marginTop: '24px',
                      marginLeft: '152px',
                      fontSize: '25px',
                      fontFamily: 'NotoSans',
                    }}
                  >
                    우리지역 확진자 수
                  </a>
                  <a
                    style={{
                      marginLeft: '152px',
                      fontSize: '70px',
                      fontFamily: 'NotoSans',
                    }}
                  >
                    334명
                  </a>
                  <img
                    style={{
                      marginTop: '10px',
                      marginLeft: '186px',
                      height: '37px',
                      width: '99px',
                    }}
                    src={descent_dif}
                  ></img>
                </Wrap3>
              </Wrap2>
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
