import React from 'react'
import Card from './Card'


const Grid = (props) => {
    const alltotalcourses = props.courses;
    const category = props.category;


    function getcourses() {
        if (category == "All") {
            let totalcourses = [];
            Object.values(alltotalcourses).map((abccourses) => {
                abccourses.map((abcourse) => {
                    totalcourses.push(abcourse)
                })
            })
            return totalcourses
            
        } else {
            return alltotalcourses[category];
        }
    }

    return (
        <div className='flex gap-[10px] flex-wrap justify-center'>
            {
                getcourses().map((onecourse)=>(
                    <Card key={onecourse.id} course={onecourse} />
                ))
            }
        </div>
    )
}

export default Grid