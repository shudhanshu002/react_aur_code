import React, { useState } from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Number-selector'
import Roll from './Roll'
import Rules from './Rules'
import styled from 'styled-components'

function GamePlay() {

  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min , max) => {
    return Math.floor(Math.random() *(max-min)+min);
  }

  const roleDice = () => {
    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined)
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <Totalscore score = {score} />
        <Numberselector 
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          />
      </div>
      <Roll currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <button className="resetScore" onClick={resetScore}>Reset Score</button>
        <button className="setShowRules" onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </button>
      </div>

      {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .resetScore , .setShowRules{
    width: 150px;
    height: 50px;
    font-size: 19px;
    background-color: black;
    color: white;
    border: none;
    padding: 10px 20px;
    transition: background-color 0.3s ease-in;

  }

  .resetScore:hover, .setShowRules:hover {
    background-color: white;
    color: black;
  }
`;
