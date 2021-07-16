import React from "react"
import styled from "styled-components"
import { useState } from "react";
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
const Styled = styled.div`
  background: ${props => props.color || "black"};
  height:${props => props.height || 50}px;
  width:20px;
  margin-bottom: 5px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
`
const Text=styled.div`
    background: "rgba( 255, 255, 255, 0 )";
    color:black;
    font-size:  ${props => props.size || 16}px;
    font-family: 'NotoSans';

    margin-top: 15px;
    margin-right: 60px;

   @media (min-width: 375px) and (max-width: 1440px) {
    //between
    margin-left: 20px;
    font-size:  ${props => props.size-3 || 16}px;
  }
`

const Row=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-bottom: 50px;
    width:100%;
`
const StartRow=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    width:100%;
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
@media (min-width: 375px) and (max-width: 1440px) {
    //between
    width:70px;
    height:70px;
  }
`

function Clothes({color,height,num,time}) {
    const [myState, setMyState] = useState({
            "image1":"",
            "image2":"",
            "image3":"",
            "image4":""

    });
    const getData = async () => {
        try {
            setMyState({
                "image1":pants,
                "image2":slippers,
                "image3":tshirt,
                "image4":umbrella
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
                "image1":"",
                "image2":"",
                "image3":"",
                "image4":""
            });
            console.log(myState);
          }catch (e) {
          console.log("error")
          console.log(myState);
        }
      }
      

    return (
        <Wrapper><Row>
            <Text>{"#OOTD 추천"}</Text>
            <Button onClick={getData} > 10대 </Button>
            <Button onClick={getData2} > 20대 </Button>
            <Button onClick={getData} > 30대 </Button>
            <Button onClick={getData2} > 40대 </Button>
            <Button onClick={getData} > 50대 </Button>
            </Row>
            <Row>
            <Image style={{marginRight:"10px"}}src={myState.image1} />
            <Image style={{marginRight:"10px"}} src={myState.image2} />
            <Image style={{marginRight:"10px"}} src={myState.image3} />
            <Image style={{marginRight:"10px"}} src={myState.image4} />
            </Row>   <StartRow>
            <Text size="16">{"오늘은 비가 오니 샌들을 신는게 어떨까요?"}</Text></StartRow>   
        </Wrapper>

    )
}
export default Clothes;