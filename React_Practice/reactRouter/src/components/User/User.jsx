import React from 'react'
import { useParams } from "react-router-dom";

function User() {

    const {userid} = useParams()
  return (
    <div className='bg-amber-400/50 text-2xl text-black text-center p-3'>User: {userid}</div>
  )
}

export default User