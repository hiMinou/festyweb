import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';
function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
    return (
        <Wrap bgImage={backgroundImg}
                >
        
        
        
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                    
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>

                        {  rightBtnText &&

                            <RightButton>
                                {rightBtnText}
                            </RightButton>

                        } 
                        

                    
                        
                        
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section
const Wrap =  styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between; //alignement vertical
    align-items: center; //alignement horizontal
    background-image: ${props =>`url("/images/${props.bgImage}")` }
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    z-index: -1;
    height: 400px;
    width: 800px;
    flex-wrap: wrap;
    h1{
        color: #266041;
        
    }

    p{
        margin: 100px;
        color: #fffff;
        font-family: "PT Sans";
        font-size: 1.3rem;
        font-weight: large;
        background: linear-gradient(90deg, rgba(188,0,255,0.2218020997461485) 0%, rgba(228,243,243,1) 100%);

        
    }

    @media (max-width: 768px){
         width: 600px;
    }
    
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px){
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`
const RightButton = styled(LeftButton)`
    background-color: #C1A130;
    opacity:0.65;
    color: black;
`
const DownArrow = styled.img`
    height: 40px;
    hoverflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`


`