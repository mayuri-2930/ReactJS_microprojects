import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
    // const [data, setData] = useState(0);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mayuri-2930')
    //     .then(response => response.json)
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
            
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-amber-400/40 p-3 text-2xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Pic" width={300}/></div>
  )
}

export default Github
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mayuri-2930')
    return response.json()
}