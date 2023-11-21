import logo from './logo.svg';
import './App.css';
// import Home from './Components/lesson1/Home'
import ToDoList from './Components/lesson2/ToDoLIst2'
import Shop from './Components/lesson3/Shop'
import Book from './Components/lesson3/Book'
import AddForm from './Components/lesson3/AddForm'
import Button from './Components/lesson4/ButtonTurnOn'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Components/lesson5/Home'
import Login from './Components/lesson5/Login'
import Details from './Components/lesson5/Details'
import About from './Components/lesson5/About'
import List from './Components/lesson5/List'
import NotFound from './Components/lesson5/NotFound'
import NavBar from './Components/lesson5/NavBar'

//  npm i react-router-dom@6


function App() {
  let book = {
    name: "acvbc",
    price: 45
  }
  return (
    <div className="App">
      <h1> ברוכים הבאים לאתר שלנו</h1>

      <BrowserRouter>

        <NavBar></NavBar>

        <Routes>

          <Route path="" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>

          <Route path="list" element={<List />}>
            <Route path="loginnnn" element={<Login />}>   </Route>
            <Route path="list" element={<List />}>   </Route>
            <Route path="home" element={<Home />}>   </Route>

          </Route>
          
          <Route path="details/:id" element={<Details />}></Route>
          <Route path="loginnnn" element={<Login />}></Route>
          <Route path="*" element={<NotFound />}></Route>

        </Routes>
      </BrowserRouter>
      {/* <ToDoList></ToDoList> */}
      {/* <Father></Father>

<Background></Background>
<Background></Background>
<Background></Background> */}

      {/* <Home></Home> */}
      {/* <Home></Home>
<Home></Home> */}

      {/* <h1>hello</h1> */}
      {/* <Shop/> */}
      {/* <Button></Button> */}
      {/* <Book oneBook={book} price= {90}></Book> */}

    </div>
  );
}

export default App;
