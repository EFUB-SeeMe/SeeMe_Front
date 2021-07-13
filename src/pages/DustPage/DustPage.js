import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LocationText from '../../components/LocationText'
import highbar1 from '../../assets/Rectangle 299.svg'
import lowbar1 from '../../assets/Rectangle 300.svg'
import highbar2 from '../../assets/Rectangle 313.svg'
import lowbar2 from '../../assets/Rectangle 314.svg'

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
  @media (max-width: 375px) {
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
  @media (max-width: 375px) {
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
    width: 90%;
    height: 220px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 300px;
  }
  @media (max-width: 375px) {
    //iphone
    width: 90%;
    margin-top: 15px;
  }
`
const Box2 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 10px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: row;

  @media (min-width: 375px) and (max-width: 1440px) {
    //between
    width: 90%;
    height: 187px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 90%;
    height: 217px;
  }
  @media (max-width: 375px) {
    //iphone
    width: 90%;
  }
`
const Box3 = styled.div`
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  margin-top: 18px;
  margin-bottom: 5px;
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
const Bar1 = styled.image`
  // 파란색 바1
  display: flex;
  flex-direction: center;
  align-items: center;
  margin-right: 0px;
  margin-left: -10px;
  margin-top: 40px;
  margin-bottom: 0px;
  background: white;
  border: none;
  outline: none;
`
const Bar2 = styled.image`
  // 하늘색 바1
  display: flex;
  flex-direction: center;
  align-items: center;
  margin-right: 0px;
  margin-left: 3px;
  margin-top: 50px;
  background: white;
  border: none;
  outline: none;
`
const Bar3 = styled.image`
  // 파란색 바2
  display: flex;
  flex-direction: center;
  align-items: center;
  margin-right: 0px;
  margin-left: 15px;
  margin-top: 40px;
  background: white;
  border: none;
  outline: none;
`
const Bar4 = styled.image`
  // 하늘색 바2
  display: flex;
  flex-direction: center;
  align-items: center;
  margin-right: 60px;
  margin-left: 3px;
  margin-top: 50px;
  background: white;
  border: none;
  outline: none;
`
const dailydust = styled.button`
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 30px;
  background: white;
  border: none;
  outline: none;
`

function DustPage() {
  return (
    <>
      <Header></Header>
      <Background>
        <Wrapper1>
          <Box1></Box1>
          <Box2></Box2>
          <Box2>
            <div>
              <dailydust>요일별 추이</dailydust>
            </div>
            <Bar1>
              <img src={highbar1} />
            </Bar1>
            <Bar2>
              <img src={lowbar1} />
            </Bar2>
            <Bar3>
              <img src={highbar2} />
            </Bar3>
            <Bar4>
              <img src={lowbar2} />
            </Bar4>
            <Bar1>
              <img src={highbar1} />
            </Bar1>
            <Bar2>
              <img src={lowbar1} />
            </Bar2>
            <Bar3>
              <img src={highbar2} />
            </Bar3>
            <Bar4>
              <img src={lowbar2} />
            </Bar4>
            <Bar1>
              <img src={highbar1} />
            </Bar1>
            <Bar2>
              <img src={lowbar1} />
            </Bar2>
            <Bar3>
              <img src={highbar2} />
            </Bar3>
            <Bar4>
              <img src={lowbar2} />
            </Bar4>
            <Bar1>
              <img src={highbar1} />
            </Bar1>
            <Bar2>
              <img src={lowbar1} />
            </Bar2>
            <Bar3>
              <img src={highbar2} />
            </Bar3>
            <Bar4>
              <img src={lowbar2} />
            </Bar4>
            <Bar1>
              <img src={highbar1} />
            </Bar1>
            <Bar2>
              <img src={lowbar1} />
            </Bar2>
            <Bar3>
              <img src={highbar2} />
            </Bar3>
            <Bar4>
              <img src={lowbar2} />
            </Bar4>
          </Box2>
        </Wrapper1>
        <Wrapper2>
          <Box3></Box3>
          <Box4></Box4>
        </Wrapper2>

        <Wrapper3>
          <LocationText />
          <Box1></Box1>
          <Box2></Box2>
          <Box2></Box2>
          <Box3></Box3>
          <Box4></Box4>
        </Wrapper3>
      </Background>
      <Footer />
    </>
  )
}

export default DustPage
