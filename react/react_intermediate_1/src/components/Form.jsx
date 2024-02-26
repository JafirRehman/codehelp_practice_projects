
import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [formdata, setFormdata] = useState({
    firstname: '',
    lastname: '',
    email: '',
    country: 'qatar',
    streetaddress: '',
    city: '',
    state: '',
    postelcode: '',
    comments: true,
    candidates: true,
    offers: true,
    notifications:''
  })
  function updatevalues(e) {
    setFormdata({ ...formdata, [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  }
  function submitdata(e) {
    e.preventDefault()
    let data = Object.keys(formdata).map((key) => `${key} = ${formdata[key]}`);
    data = data.join(" \n");
    alert(data);
  }
  return (
    <div className='w-[50vw] shadow-2xl my-10'>
      <form onSubmit={submitdata} className='flex flex-col p-6 gap-3'>
        <label htmlFor='firstname' className='font-bold text-[15px]'>First Name</label>
        <input id='firstname' value={formdata.firstname} name='firstname' onChange={updatevalues} placeholder='Jafir' className='outline-blue-500 px-3 border h-10 rounded-md border-blue-400' type='text'></input>
        <label htmlFor='lastname' className='font-bold text-[15px]'>Last Name</label>
        <input id='lastname' value={formdata.lastname} name='lastname' onChange={updatevalues} placeholder='Rehman' className='outline-blue-500 px-3 border h-10 rounded-md border-blue-400' type='text'></input>
        <label htmlFor='email' className='font-bold text-[15px]'>Email Address</label>
        <input id='email' value={formdata.email} name='email' onChange={updatevalues} placeholder='jafir@gmail.com' className='outline-blue-500 px-3 border h-10 rounded-md border-blue-400' type='email'></input>
        <label htmlFor='country' className='font-bold text-[15px]'>Country</label>
        <select id='country' name='country' value={formdata.country} onChange={updatevalues} className='outline-blue-500 px-3 border h-10 rounded-md border-blue-400'>
          <option value='pakistan'>Pakistan</option>
          <option value='qatar'>Qatar</option>
          <option value='australia'>Australia</option>
        </select>
        <label htmlFor='streetaddress' className='font-bold text-[15px]'>Street Address</label>
        <textarea id='streetaddress' value={formdata.streetaddress} name='streetaddress' onChange={updatevalues} placeholder='1234 Main Street' className='outline-blue-500 px-3 border h-20 rounded-md border-blue-400'></textarea>
        <label htmlFor='city' className='font-bold text-[15px]'>City</label>
        <input id='city' value={formdata.city} name='city' onChange={updatevalues} placeholder='Multan' className='outline-blue-500 px-3 border h-10 rounded-md border-blue-400' type='text'></input>
        <label htmlFor='state' className='font-bold text-[15px]'>State/Province</label>
        <input id='state' value={formdata.state} name='state' onChange={updatevalues} placeholder='Punjab' className='outline-blue-500 px-3 border h-10 rounded-md border-blue-400' type='text'></input>
        <label htmlFor='postelcode' className='font-bold text-[15px]'>ZIP / Postal code</label>
        <input id='postelcode' value={formdata.postelcode} name='postelcode' onChange={updatevalues} placeholder='34545' className='outline-blue-500 px-3 border h-10 rounded-md border-blue-400' type='text'></input>
        <label className='font-bold text-[15px]'>By Email</label>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-6 items-baseline'>
            <input type='checkbox' id='comments' name='comments' checked={formdata.comments} onChange={updatevalues} />
            <div>
              <label htmlFor='comments' className='font-bold text-[13px]'>Comments</label>
              <p className='text-[13px] text-slate-500/75'>Get Notified when someone post a comment</p>
            </div>
          </div>
          <div className='flex gap-6 items-baseline'>
            <input type='checkbox' id='candidates' name='candidates' checked={formdata.candidates} onChange={updatevalues} />
            <div>
              <label htmlFor='candidates' className='font-bold text-[13px]'>Candidates</label>
              <p className='text-[13px] text-slate-500/75'>Get Notified when someone post a comment</p>
            </div>
          </div>
          <div className='flex gap-6 items-baseline'>
            <input type='checkbox' id='offers' name='offers' checked={formdata.offers} onChange={updatevalues} />
            <div>
              <label htmlFor='offers' className='font-bold text-[13px]'>Offers</label>
              <p className='text-[13px] text-slate-500/75'>Get Notified when someone post a comment</p>
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h1 className='font-bold text-[13px]'>Push Notifications</h1>
          <p className='text-[13px] text-slate-500/75'>These are delivered via SMS to Your Mobile Phone</p>
          <div className='flex flex-col mt-2 gap-1'>
            <div>
              <input onChange={updatevalues} type='radio' name='notifications' id='radio1' value='everything' />
              <label htmlFor='radio1' className='font-bold text-[13px] ml-4'>Everything</label>
            </div>
            <div>
              <input onChange={updatevalues} type='radio' name='notifications' id='radio2' value='same as email' />
              <label htmlFor='radio2' className='font-bold text-[13px] ml-4'>Same As Email</label>
            </div>
            <div>
              <input onChange={updatevalues} type='radio' name='notifications' id='radio3' value='no push notifications'/>
              <label htmlFor='radio3' className='font-bold text-[13px] ml-4'>No Push Notifications</label>
            </div>
          </div>
        </div>
        <button type='submit' className='bg-blue-700 text-white rounded-md font-bold h-10 mt-5'>Submit</button>
      </form>
    </div>
  )
}

export default Form