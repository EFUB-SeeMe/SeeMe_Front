import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import Search from '../../assets/search.svg'
import Vector from '../../assets/Vector.svg'

const MyIcon = styled.img`
margin-top: 8px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 127px;
    margin-right: 20px;
    margin-left: 10px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 127px;
    margin-right: 168px;
    margin-left: 76px;
  }
  @media (max-width: 430px) {
    //iphone
    width: 84px;
    display: center;
    margin-left: 20px;
  }
`

MyIcon.defaultProps = {
  src: Logo,
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 66px;
  justify-content: space-between;
  background: white;
  margin-top: 3px;
`

const Line = styled.div`
  width: 0px;
  margin-top:19px;
  border: 1px solid #A3A3A3;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    margin-left: 22px;
    margin-right: 22px;
    height: 26px;
  }

  @media (min-width: 1440px) {
    //desktop
    margin-left: 62px;
    margin-right: 62px;
    height: 26px;
  }
  @media (max-width: 430px) {
    //iphone
    display: none;
  }
`
const Input = styled.input`
    color:#000000;
    background-color: #F7F3F3;
    line-height : 20px;
    font-size: 16px;
    overflow-wrap:"auto";
    height: 30px;
    border: 1px solid #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    outline:none;
    
    margin-top:11px;
    border-radius: 10px;
    @media (min-width: 430px) and (max-width: 1440px) {
    //between
    width: 150px;
    margin-left: 45px;
  }

  @media (min-width: 1440px) {
    //desktop
    width: 368px;
    margin-left: 85px;
  }
  @media (max-width: 430px) {
    //iphone
    display: none;
  }
`

const Button = styled.button`
  margin-top: ${props => props.margin || 19}px;
  height: 31px;
  border: 1px solid rgba(255, 255, 255, 0);
  color: black;
  background: white;
  font-family: 'NotoSans';
  outline:none;
  @media (min-width: 430) and (max-width: 1440px) {
    //between
    width: 70px;
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    //desktop
    width: 100px;
    font-size: 17px;
  }
  @media (max-width: 430) {
    //iphone
    display: none;
  }
`

const SearchButton = styled.button`
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0);
  border-radius: 10px;
  width: 40px;
  height: 37px;
  margin-top: 11px;
  @media (min-width: 430px) and (max-width: 1440px) {
    //between
    margin-right: 10px;
    margin-left: 10px;
    background-color: #f7f3f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1440px) {
    //desktop
    margin-right: 116px;
    margin-left: 20px;
    background-color: #f7f3f3;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 430px) {
    //iphone
    background-color: #ffffff;
    margin-top: 20px;
    margin-right:5px;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  }
`


function Header() {
  const history = useHistory()
  return (
    <Wrapper>
      <MyIcon></MyIcon>
      <Input></Input>
      <SearchButton>
        {' '}
        <img style={{ width: '30px', height: '30px' }} src={Search} />
      </SearchButton>
    </Wrapper>
  )
}

export default Header
