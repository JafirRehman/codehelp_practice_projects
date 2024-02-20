import React, { useState } from 'react'

const Card = (props) => {
  const data = props.data;
  const [status, setStatus] = useState('read more')
  const [discription,setDiscription]=useState(`${data.info.substring(0,150)}.  .  .  .`)
  const removeitem = props.removeitem;
  
  return (
    <div className='flex bg-white flex-col justify-center w-[350px] p-[10px] shadow-2xl rounded-[20px]'>
      <img className='h-[200px] w-[100%] rounded-[20px]' src={data.image}></img>
      <h1>{data.price}</h1>
      <h2>{data.name}</h2>
      <p>
        {discription}
        <span onClick={() => status === "read more" ? [setStatus('show less'),setDiscription(data.info)] : [setStatus('read more'),setDiscription(`${data.info.substring(0,150)} . . . .`)]} className=" cursor-pointer underline text-blue-700">{status}</span>
      </p>
      <button onClick={() => removeitem(data.id)} className="mt-[40px] bg-red-700 text-white w-[200px] rounded-full self-center h-[30px]">Not Interested</button>
    </div>
  )
}

export default Card