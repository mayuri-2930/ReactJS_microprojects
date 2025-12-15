import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(5)
  // let counter = 15;

  const addValue = () => {
    // console.log("value added", counter+1);
    // counter = counter + 1;
    setCounter(counter+1)
  }

  const removeValue = () => {
    // console.log("value removed", counter-1);
    // counter = counter - 1;
    setCounter(counter-1)
  }

  return (
    <>
      <h1>My REACT</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value</button>
      
      <button
      onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
