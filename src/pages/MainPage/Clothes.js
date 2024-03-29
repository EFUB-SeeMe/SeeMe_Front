import React from "react"
import styled from "styled-components"
import { useState,useEffect } from "react";
import { useDispatch } from 'react-redux'
import { weatherMain } from "../../_actions/user_action";
import pants from "../../assets/clothes/pants.svg"
import slippers from "../../assets/clothes/slippers.svg"
import tshirt from "../../assets/clothes/tshirt.svg"
import umbrella from "../../assets/clothes/umbrella.svg"

const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    height:100%;
`

const Text=styled.div`
    background: "rgba( 255, 255, 255, 0 )";
    color:black;
    font-size:  ${props => props.size || 13}px;
    font-family: 'NotoSans';

    margin-top: 10px;


   @media (min-width: 430px) and (max-width: 1440px) {
    //between

    font-size:  ${props => props.size-3 || 10}px;
  }
  @media (max-width: 430px) {
    //iphone
    margin-top: 0px;
    font-size:  ${props => props.size-3 || 10}px;
  }
`
const BoldText=styled.div`
    background: "rgba( 255, 255, 255, 0 )";
    color:black;
    font-size:  ${props => props.size || 16}px;
    font-family: 'NotoSansBold';

    margin-top: 10px;
    margin-right: 60px;

   @media (min-width: 430px) and (max-width: 1440px) {
    //between
    margin-left: 20px;
    font-size:  ${props => props.size-3 || 16}px;
  }
  @media (max-width: 430px) {
    //iphone
    margin-top: 0px;
    font-size:  ${props => props.size-3 || 16}px;
    margin-left: 10px;
  }
`
const Row=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 50px;
    width:100%;
    @media (max-width: 430px) {
    //iphone
    margin-bottom: 40px;
  }
`
const StartRow=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    width:100%;
    margin-left:20px;
    margin-bottom: 10px;
    @media (min-width: 1440px) {
    //desktop
    margin-left: 130px;
  }
`

const Button = styled.button`
  height: 42px;
  width: 50px;
  color:black;
  background: #F6F3F3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 20px 20px;
  outline:none;
  border:1px solid rgba(0,0,0,0);
  margin-right: 10px;
  &:hover {
    background:#ECF8FF;
  }
  &:active {
    background: #ECF8FF;
  }
`

const Image=styled.img`
  width:100px;
    height:100px;
@media (min-width: 430px) and (max-width: 1440px) {
    //between
    width:70px;
    height:70px;
  }
  @media (max-width: 430px) {
    //iphone
    width:60px;
    height:60px;
  }
`
const ColumnWrapper=styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

function Clothes({color,height,num,time}) {
  const dispatch=useDispatch();
  const [weatherState,setWeatherState]=useState();
  const [myState, setMyState] = useState();
useEffect(() => {
  dispatch(
    weatherMain(
      window.localStorage.getItem('lat'),
      window.localStorage.getItem('lon')
    )
  ).then(response => {
    setWeatherState({ status: 'pending' })
    const data = response.payload.ootdInfo.document;
    console.log(data)
    setTimeout(
      () => setWeatherState({ status: 'resolved', member: data }),
      600
    );

    setTimeout(
      () => setMyState({
        "image1":weatherState?.member?.age10.item1,
        "image2":weatherState?.member?.age10.item2,
        "image3":weatherState?.member?.age10.item3,
        "image4":weatherState?.member?.age10.item4,
        "text1":weatherState?.member?.age10.item1Desc,
        "text2":weatherState?.member?.age10.item2Desc,
        "text3":weatherState?.member?.age10.item3Desc,
        "text4":weatherState?.member?.age10.item4Desc
    }),
      600
    );
  })
}, [])

    
    
    const getData = async () => {
        try {
            setMyState({
                "image1":weatherState?.member?.age10.item1,
                "image2":weatherState?.member?.age10.item2,
                "image3":weatherState?.member?.age10.item3,
                "image4":weatherState?.member?.age10.item4,
                "text1":weatherState?.member?.age10.item1Desc,
                "text2":weatherState?.member?.age10.item2Desc,
                "text3":weatherState?.member?.age10.item3Desc,
                "text4":weatherState?.member?.age10.item4Desc
            });
            console.log(myState);
          }catch (e) {
          console.log("error")
          console.log(myState);
        }
      }
      const getData2 = async () => {
        try {
          setMyState({
            "image1":weatherState?.member?.age20.item1,
            "image2":weatherState?.member?.age20.item2,
            "image3":weatherState?.member?.age20.item3,
            "image4":weatherState?.member?.age20.item4,
            "text1":weatherState?.member?.age20.item1Desc,
                "text2":weatherState?.member?.age20.item2Desc,
                "text3":weatherState?.member?.age20.item3Desc,
                "text4":weatherState?.member?.age20.item4Desc
        });
            console.log(myState);
          }catch (e) {
          console.log("error")
          console.log(myState);
        }
      }
      const getData3 = async () => {
        try {
          setMyState({
            "image1":weatherState?.member?.age30.item1,
            "image2":weatherState?.member?.age30.item2,
            "image3":weatherState?.member?.age30.item3,
            "image4":weatherState?.member?.age30.item4,
            "text1":weatherState?.member?.age30.item1Desc,
                "text2":weatherState?.member?.age30.item2Desc,
                "text3":weatherState?.member?.age30.item3Desc,
                "text4":weatherState?.member?.age30.item4Desc
        });
            console.log(myState);
          }catch (e) {
          console.log("error")
          console.log(myState);
        }
      }
      const getData4 = async () => {
        try {
          setMyState({
            "image1":weatherState?.member?.age40.item1,
            "image2":weatherState?.member?.age40.item2,
            "image3":weatherState?.member?.age40.item3,
            "image4":weatherState?.member?.age40.item4,
            "text1":weatherState?.member?.age40.item1Desc,
                "text2":weatherState?.member?.age40.item2Desc,
                "text3":weatherState?.member?.age40.item3Desc,
                "text4":weatherState?.member?.age40.item4Desc
        });
            console.log(myState);
          }catch (e) {
          console.log("error")
          console.log(myState);
        }
      }
      const getData5 = async () => {
        try {
          setMyState({
            "image1":weatherState?.member?.age50.item1,
            "image2":weatherState?.member?.age50.item2,
            "image3":weatherState?.member?.age50.item3,
            "image4":weatherState?.member?.age50.item4,
            "text1":weatherState?.member?.age50.item1Desc,
                "text2":weatherState?.member?.age50.item2Desc,
                "text3":weatherState?.member?.age50.item3Desc,
                "text4":weatherState?.member?.age50.item4Desc
        });
            console.log(myState);
          }catch (e) {
          console.log("error")
          console.log(myState);
        }
      }
      

    return (
        <Wrapper><Row>
            <BoldText>{"#OOTD 추천"}</BoldText>
            <Button onClick={getData} > 10대 </Button>
            <Button onClick={getData2} > 20대 </Button>
            <Button onClick={getData3} > 30대 </Button>
            <Button onClick={getData4} > 40대 </Button>
            <Button onClick={getData5} > 50대 </Button>
            </Row>
            <Row>
              <ColumnWrapper>
            <Image style={{marginRight:"10px"}}src={myState?.image1} />
            <Text>{myState?.text1}</Text>
            </ColumnWrapper>
            <ColumnWrapper>
            <Image style={{marginRight:"10px"}} src={myState?.image2} />
            <Text>{myState?.text2}</Text>
            </ColumnWrapper>
            <ColumnWrapper>
            <Image style={{marginRight:"10px"}} src={myState?.image3} />
            <Text>{myState?.text3}</Text>
            </ColumnWrapper>
            <ColumnWrapper>
            <Image style={{marginRight:"10px"}} src={myState?.image4} />
            <Text>{myState?.text4}</Text>
            </ColumnWrapper>
            </Row>   
        </Wrapper>

    )
}
export default Clothes;

