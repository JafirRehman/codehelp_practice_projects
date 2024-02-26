import React from 'react'
import Card from './components/Card'
import reviews from './data'

const App = () => {
  return (
    <div className='h-[100vh] bg-[#212121] flex items-center pt-12 flex-col'>
      <h1 className='text-white text-[35px]  font-bold'>Our Testimonials</h1>
      <div className='border-[1.5px] w-[135px] border-purple-700 '></div>
      <Card alldata={reviews}/>
    </div>
  )
}

export default App