import { useState } from 'react'
import CoursesDataArr from './Data'
import { Link, Outlet } from 'react-router-dom'
const CoursesList=()=>{
    const [numberLessonsFilter,setNumberLessonsFilter]=useState(0)
    return <>
    <p>courses list component</p>
    <p><label>search for courses with more lessons then:</label></p><input type='number' onChange={(e) => { setNumberLessonsFilter(e.target.value )}}></input>
    <nav>
    {CoursesDataArr.map((course,i)=>{return course.numLessons>=numberLessonsFilter?<p key={i}><Link to={"courseDetails/"+course.code} >link to: {course.nameCourse}</Link></p>:null})}
   </nav>
   <Outlet></Outlet>

    <p>end of the component: list of courses</p>
    </>

}
export default CoursesList