import { useRef } from 'react';
import { useCallback, useEffect, useState } from 'react'
// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false);
  const [char, setChar] = useState(false)
  const [pass, setPass] = useState("")

  //useRef Hook
  const passRef= useRef(null)
  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (char) str += "!#$&*_"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    
    setPass(pass)
  }, [length, numAllowed, char, pass] )

  const copyPassToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(pass)
  }, [pass])
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, char, setPass])
  return (
    <>
     <h1 className='text-3xl text-center text-white'>Password Generator</h1>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-800 text-center justify-center content-center'>Test
      <div className="flex shadow rounded-lg my-3 overflow-hidden mb-4 gap-3 justify-center">
        <input 
        type="text" 
        value={pass}
        className='outline-none w-full py-1 px-3 bg-orange-50 text-black'
        placeholder='Password'
        readOnly
        ref={passRef}/>

        <button
        onClick = {copyPassToClipboard}
        className='outline-none shrink-0 py-0.5 px-3'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input 
                type="range"
                min={8}
                max={50}
                value={length}
                className='cursor-pointer'
                onChange={(e)=>{setLength(e.target.value)}}/>
                <label>Length: {length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={numAllowed}
                id='numInput'
                onChange ={()=> {
                  setNumAllowed((prev) => !prev);
                }}
                />
                <label>Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
                <input 
                type="checkbox"
                defaultChecked={char}
                id='charInput'
                onChange ={()=> {
                  setChar((prev) => !prev);
                }}
                />
                <label>Characters</label>
              </div>

      </div>
     </div>
    </>
  )
}

export default App
