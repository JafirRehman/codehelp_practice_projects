import React from 'react'
import User from './User'
const Card = (props) => {
  return (
    <div className="bg-yellow-400">
        {
            props.bigdata.map((user,index)=>{
                return <User key={index} oneuser={user}/>
            })
        }
    </div>
  )
}

export default Card