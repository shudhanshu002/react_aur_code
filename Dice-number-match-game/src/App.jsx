import { useState } from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

function App() {

  const[start,setStart] = useState(false);

  const toggleStart = () => {
    setStart((prev) => !prev)
  }
  return (
    <>
      {start ? <GamePlay/> : <StartGame toggle = {toggleStart}/>}
    </>
  )
}

export default App
