// import List from './Components/toDoList'
// import logo from './logo.svg';
// import Father1 from './Components/HomeWorks/Father';
// import Home from './Components/Home';
// import BackgroundHourdDiv from './Components/HomeWorks/Background';
// import Func from './Components/FuncComp';
// import ClassList from './Components/HomeWorks/toDoList_class_component'
// import FunctionList from './Components/HomeWorks/toDoList_function_component'
import Home from './Components/teacherLesson/Home'
import Login from './Components/teacherLesson/Login'
import Details from './Components/teacherLesson/Details'
import About from './Components/teacherLesson/About'
import List from './Components/teacherLesson/List'
import NotFound from './Components/teacherLesson/NotFound'
import NavBar from './Components/teacherLesson/NavBar'
import LogInComp from './Components/HomeWorks/courses/LogIn'
import HomeComp from './Components/HomeWorks/courses/Home'
import CourseDetailsComp from './Components/HomeWorks/courses/CourseDetails'
import './App.css'
//import Shop from './Components/HomeWorks/my_shop/MyShop'
import { useNavigate, BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (

    <div className="App">
      <h1 className='centerHeader'>Tehila Aharonovich</h1><h2 className='centerHeader'>H.W. REACT</h2>
      {/* <Father1></Father1> */}
      {/* <List></List>
<BackgroundHourdDiv></BackgroundHourdDiv>
<Func></Func> */}
      {/* <ClassList></ClassList>
<FunctionList></FunctionList> */}
      {/* <Shop></Shop> */}
      <BrowserRouter>
        <Routes>



          <Route path='/' element={<LogInComp></LogInComp>}></Route>
          <Route path='homePage/:userName' element={<HomeComp></HomeComp>}>   
           <Route path='courseDetails/:courseCode' element={<CourseDetailsComp></CourseDetailsComp>}></Route>
           </Route>
      
        </Routes>

      </BrowserRouter>
      
      <h2>end</h2>
    </div>
  );
}

export default App;
