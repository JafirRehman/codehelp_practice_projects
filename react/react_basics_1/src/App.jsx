import React, { useState } from 'react'
import Card from './components/Card'
import Form from './components/Form';
import { createContext } from 'react';


const Updatedatacontext=createContext();
const App = () => {
  const data=[{
    title:"jafir",
    date:new Date(2023, 3, 17),
    price:56
  },{
    title:"jafir",
    date:new Date(2023, 3, 17),
    price:8989
  }]
  const [alldata,setAlldata]=useState(data);
  function updatealldata(newobject){
    setAlldata([...alldata,newobject])
  }
  return (
    <Updatedatacontext.Provider value={updatealldata}>
      <Form/>
      <Card bigdata={alldata}/>
    </Updatedatacontext.Provider>
    
  )
}

/* we can also send setAlldata and alldata directly but to avoid prop driling we use context api
 * 
 * <Form setAlldata={setAlldata} alldata={alldata}/>
 * <Card bigdata={alldata}/>
 */
export default App;
export {Updatedatacontext}