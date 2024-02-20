import React from 'react';
import data from './data';
import Tours from './components/Tours';

const App = () => {
  return (
    <>
      <Tours data={data}/>
    </>
  )
}

export default App