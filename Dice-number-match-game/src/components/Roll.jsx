import React from 'react'
import styled from 'styled-components'

function Roll({roleDice, currentDice}) {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice-parts/dice_${currentDice}.png`}></img>
      </div>
      <p>Clivk on Dice to roll</p>
    </DiceContainer>
  )
}

export default Roll


const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .dice {
        cursor: pointer;
    }

    p {
        font-size: 24px;
    }
`