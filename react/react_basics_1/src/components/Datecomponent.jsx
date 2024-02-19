import React from 'react'

const Datecomponent = (props) => {
  return (
    <div className="bg-pink-600">
        <p>{props.ourdate.getDate()}</p>
        <p>{props.ourdate.toLocaleString('en-US', {month: 'long'})}</p> 
        <p>{props.ourdate.getFullYear()}</p>
    </div>
  )
}

export default Datecomponent