import React, { useEffect, useState } from 'react'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";


const Card = (props) => {
  const [status,setStatus]=useState([])
  const course=props.course

  function likebutton(id){
    if(status.includes(id)){
      setStatus(status.filter((buttonid)=> buttonid!==id))
      toast.warning('Like Remove !')
    }else{
      setStatus([...status,id])
      toast.success("Thankyou For Your Motivation !")
    }
  }
  return (
    <div className='text-white rounded-xl h-[250px] max-w-[220px] bg-[#282C35] hover:scale-105'>
        <div className='max-h-[220px] relative'>
            <img src={course.image.url}  alt={course.image.alt} className='rounded-xl'></img>
            <button className='absolute -bottom-2 right-1.5 text-[20px] bg-white rounded-full w-6 h-6' onClick={()=> likebutton(course.id)}>{ status.includes(course.id) ? <FcLike className='m-auto'/> : <FcLikePlaceholder className='m-auto'/> }</button>
        </div>
        <div className='p-[10px]'>
            <h1 className='font-bold text-[15px]'>{course.title}</h1>
            <p className='text-[13px] pt-[5px]'>{`${course.description.substring(0,70)}...`}</p>
        </div>
    </div>
  )
}

export default Card