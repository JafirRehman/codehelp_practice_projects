import React, { useState } from 'react'
import Spinner from './Spinner'
import useGif from './useGif'

const Specialgif = () => {
    const [giftag,setGiftag]=useState('car')
    const {gif,loading,fetchdata}=useGif(giftag);
    return (
        <div className='bg-blue-500 py-10 flex flex-col items-center'>
            <div className='bg-yellow-500 w-[30vw] flex items-center justify-center h-[50vh]'>
                {
                    loading ? <Spinner /> : <img className='w-full h-full' src={gif} />
                }
            </div>
            <input value={giftag} onChange={(e)=>setGiftag(e.target.value)} className='w-[30vw] h-[50px] my-10 text-center'/>
            <button onClick={() => fetchdata(giftag)} className='w-[200px] h-[50px] bg-pink-500 object-cover'>Get random Gif</button>
        </div>
    )
}

export default Specialgif;