import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='bg-yellow-800 text-black p-4 rounded-xl'>Tailwind css</h1>
      <Card username="Ashwin" btnText='engage me'/>
      <Card username="Navin" btnText='hover me' ttn="married"/>
    </>
  )
}

export default App
