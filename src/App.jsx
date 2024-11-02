import { useState } from 'react'
import './App.css'
import NavBar from './assets/components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <h1>this is my portfolio version 2</h1>
    <h1>test </h1>
      
    </>
  )
}

export default App
