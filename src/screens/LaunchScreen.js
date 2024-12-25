import React from "react"
import styled from "styled-components"
import { Volume2 } from "react-feather"

export default function LaunchScreen({ startGame }) {
  return (
    <PageWrapper>
      <CenteredBox>
        <Title><p>Find The Invisible <s>Daddy</s> Teddy</p></Title>
        <Description>
          Drag your mouse (or finger) around to find Teddy. It’s hiding behind
          the Ooga Booga.
        </Description>
        <Tip>
          <Volume2 color="#252938" />
          Make sure you turn your audio on before playing.
        </Tip>
        <Button onClick={startGame}>Start Game</Button>
        <div>
          Made by <a href="https://x.com/0x_Scientist" target="_blank" style={{color: '#158af5'}}><u>0x_Scientist</u></a>
        </div>
        <div>
          Forked from <a href="https://github.com/JaviEzpeleta/findtheinvisibleruby" target="_blank" style={{color: '#158af5'}}><u>Javi</u></a>
        </div>
      </CenteredBox>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #f0f3f5;
  color: #252938;
`

const CenteredBox = styled.div`
  /* border: 1px solid black; */
  border-radius: 12px;
  margin: 2px;
  padding: 18px 24px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`

const Title = styled.h1`
  font-size: 25px;
  font-family: "Wotfard Semibold";
  display: flex;
  margin: 0px;
  color: ${({ theme }) => theme.blackText};
  will-change: transform, background-color, box-shadow;
`
const Description = styled.div`
  margin: 30px 0px;
`

const Tip = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  svg {
    margin-right: 8px;
  }
`

const Button = styled.button`
  width: 268px;
  font-size: 14px;
  will-change: transform, background-color, box-shadow;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(65deg, #8B4513 0, #A0522D 100%);
  box-shadow: 0 8px 16px rgba(139, 69, 19, 0.44);
  padding: 12px 18px;
  color: white;
  border-radius: 6px;
  font-weight: 500;
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.15);
  cursor: pointer;
  transition: all 0.12s ease-in-out;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :hover {
    background: linear-gradient(65deg, #A0522D 0, #8B4513 100%);
  }
  :active {
    transform: scale(0.98);
  }
  font-weight: 500;
  text-decoration: none;
  a {
    text-decoration: none;
  }
  &.disabled:hover {
    transform: scale(1);
  }
  font-family: "Wotfard Semibold";
  font-size: 24px;
  margin: 30px 0px;
`
