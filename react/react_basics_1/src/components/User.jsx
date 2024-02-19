import React, { useState } from 'react'
import Datecomponent from "./Datecomponent"
const User = (props) => {
  const [title,setTitle]=useState(props.oneuser.title);

  return (
    <div className="bg-blue-500 flex justify-around text-white">
      <Datecomponent ourdate={props.oneuser.date} />
      <p>{props.oneuser.price}</p>
      <h1>{title}</h1>
      <button onClick={()=> setTitle('ali')}> change</button>
    </div>
  )
}

export default User