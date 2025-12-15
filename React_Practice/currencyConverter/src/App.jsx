import { useState } from 'react'
import useCurrencyInfo, { Input } from './hooks/useCurrencyInfo'
import './App.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convAmount, setConvAmount] = useState (0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvAmount(amount)
    setAmount(convAmount)
    }
  
  const convert= () => {
    setConvAmount(amount * currencyInfo[to])
  }
  return (
    <>
      <h1 className='text-3xl bg-orange-400 '>Currency App</h1>
    </>
  )
}

export default App
