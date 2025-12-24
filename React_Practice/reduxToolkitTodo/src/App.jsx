import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo.jsx'
import './App.css'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold">Learning Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
