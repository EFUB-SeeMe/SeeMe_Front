import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";
import LocationText from "../../components/LocationText";
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
          <Box1></Box1>
          <Box2></Box2>
          <Box3></Box3>
        </Wrapper1>
      </Background>
      <Footer />
    </div>
  )
}

export default CovidPage
