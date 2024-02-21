import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import Category from './components/Category'
import { filterData, apiUrl } from './data'
import Spinner from './components/Spinner'
import { toast } from "react-toastify";

const App = () => {
  const [category, setCategory] = useState(filterData[0].title);
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchdata = async () => {
    setLoading(true);
    try {
      const coursedata = await fetch(apiUrl);
      const allcourses = await coursedata.json();
      setCourses(allcourses.data);
    } catch (error) {
      toast.error("Unable to fetch data form API");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchdata();
  }, [])

  return (
    <div className='bg-[#444a58] h-[100vh] overflow-y-auto'>
      <Navbar />
      <div className='flex gap-y-[25px] mt-[20px] flex-col w-[50vw] m-auto'>
        <Category category={category} setCategory={setCategory} filterData={filterData} />
        {
          loading ? <Spinner /> : <Grid courses={courses} category={category} />
        }
        

      </div>
    </div>
  )
}

export default App