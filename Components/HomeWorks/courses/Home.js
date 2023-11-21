import CoursesList from './CoursesList'
import { Outlet,Link, useParams } from "react-router-dom"
const Home=()=>{
    
    return <>
    <div>
        <h3>courses - home page</h3>
        <p>hello dear {useParams().userName}!</p>
    <p>courses for children!!!</p>
    <CoursesList></CoursesList>
    <h3>end of homePage</h3>
    </div>
    </>
}
export default Home