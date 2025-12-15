import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Template from './components/template'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>I'm coding!</h1>
      <Template username="Mayuri" btnText="Today"/>
      <Template username="Kapil" btnText="Tomorrow"/>
    </>
  )
}

export default App
