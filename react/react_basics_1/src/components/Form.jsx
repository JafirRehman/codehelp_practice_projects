import React, { useState } from 'react'
import { useContext } from 'react';
import {Updatedatacontext} from "../App"
const Form = () => {
    const ourcontextfunction=useContext(Updatedatacontext)
    
    const [newuser,setNewuser]=useState({
        title:'',
        price:'',
        date:'',
    });
    function updatevalues(e){
        setNewuser({...newuser,[e.target.name]:e.target.value})
    }
    function createnewuser(e){
        e.preventDefault();
        const ourcreateduser={
            title:newuser.title,
            price:newuser.price,
            date:new Date(newuser.date),
        }
        console.log(ourcreateduser);
        ourcontextfunction(ourcreateduser)
        /* if you use props to send setAlldata and alldata directly
        setAlldata([...alldata,ourcreateduser])*/
    }
  return (
    <div className="flex flex-col gap-[30px]">
        <form onSubmit={createnewuser}>
            <div>
                <label>title</label>
                <input type='text' name='title' value={newuser.title} onChange={updatevalues}></input>
            </div>
            <div>
                <label>price</label>
                <input type='text' name='price' value={newuser.price} onChange={updatevalues}></input>
            </div>
            <div>
                <label>date</label>
                <input type='date' name='date' value={newuser.date} onChange={updatevalues}></input>
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}
export default Form