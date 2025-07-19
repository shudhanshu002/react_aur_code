import React from 'react'
import "./startGame.css"
 
function StartGame({toggle}) {
  return (
    <div className="startGame">
      <div className="startGameWrapper">
        <div className="mainImg">
          <img src="/images/image.png" alt="" className="image" />
        </div>
        <div className="sideTxt">
          <h1 className="mainTxt">Dice game</h1>
          <button onClick={toggle} className="playBtn">Play Now</button>
        </div>
      </div>
    </div>
  )
}

export default StartGame
