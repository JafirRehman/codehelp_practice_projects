import React from 'react'

const Category = (props) => {
  const category = props.category
  const setCategory = props.setCategory
  const filterData = props.filterData
  return (
    <div className=' flex gap-x-[20px] justify-center'>
      {
        filterData.map((filter) => (
          <div key={filter.id} className={`h-[35px]  hover:border-b-[2px] ${category===filter.title && "border-b-[2px]"}`}>
            <button key={filter.id} className={`text-white text-[12px] rounded font-bold px-[9px] py-[5px]
                ${category === filter.title ? "bg-[#282C35]" : "bg-[#39404d]"}
                `} onClick={() => setCategory(filter.title)}>{filter.title}</button>
          </div>
        ))
      }
    </div>
  )
}

export default Category