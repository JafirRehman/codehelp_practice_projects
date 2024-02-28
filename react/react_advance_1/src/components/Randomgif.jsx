import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'
import useGif from './useGif'


const Randomgif = () => {
    const {gif,loading,fetchdata}=useGif();
  return (
    <div className='bg-blue-500 py-10 flex flex-col items-center'>
        <div className='bg-yellow-500 w-[30vw] flex items-center justify-center h-[50vh]'>
            {
                loading ? <Spinner/> : <img className='w-full h-full' src={gif}/>
            }
        </div>
        <button onClick={()=> fetchdata()} className='mt-10 w-[200px] h-[50px] bg-pink-500 object-cover'>Get random Gif</button>
    </div>
  )
}

export default Randomgif