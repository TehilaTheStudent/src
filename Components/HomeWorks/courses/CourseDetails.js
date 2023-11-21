import { useParams } from 'react-router-dom'
import AllCourses from './Data'
const CourseDetails=()=>{
   let code=useParams().courseCode
   
let courseObject=AllCourses.find(course=>course.code==code)
   return  <>
   <div style={{border:'5px dotted hotpink'}}>
      <h3>the course details: </h3>
   <p>name: {courseObject.nameCourse}</p>
   <p>price: {courseObject.price}</p>
   <p>how many lessons: {courseObject.numLessons}</p> 
<img src={require( `${courseObject.imagePath}`)}></img>
   </div>
   </>
}
export default CourseDetails