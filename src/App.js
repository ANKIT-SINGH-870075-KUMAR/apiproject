import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Component/Header/Header.js';
import Course from './Component/Courses/Course.js';
import CourseDetail from './Component/CourseDetail/CourseDetail.js';
import User from './Component/Users/User.js';
import Studentadmin from './Component/Studentadmin/Studentadmin.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Course />} />
          <Route path='/Course' element={<Course />} />
          <Route path='/Course/:id' element={<CourseDetail/>} />
          <Route path='/User' element={<User />} />
          <Route path='/Studentadmin/:name' element={<Studentadmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
