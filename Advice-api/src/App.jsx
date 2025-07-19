import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/accadian'
import Random from './components/Random-color-generator/Index'
import StarRating from './components/Rating-star/Index'
import Slider from './components/slider-img'
import ScrollIndicator from './components/scroller/Index'
import TicTacToe from './components/tictactoae'
import MenuList from './components/tree-view/menu-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordion />
      { <Random /> }
      { < StarRating/> }
      {/* <Slider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      {/* <GithubProfileFinder/> */}

      <TicTacToe/>
    </>
  )
}

export default App
