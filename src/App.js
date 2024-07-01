import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import Yangiliklar from './pages/yangiliklar/yangiliklar';
import About from './pages/about/about';
import Talim from './pages/talim-tarbiya/talim';
import Pupils from './pages/o\'quvchilar/o\'quvchilar';
import Qabul from './pages/qabul/qabul';
import Elon from './pages/elon/elon';
import Elon2 from './pages/elon/elon2';
import NFound from './pages/404/nfound';
import New from './pages/yangiliklar/new';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  const data = {
    email: "sdsf@sf.sf",
    username: "sdfsdf",
    password: "sdfsdf",
  }

  return (
    <div className="App">
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/yangiliklar' element={<Yangiliklar/>}></Route>
                <Route path='/biz-haqimizda' element={<About/>}></Route>
                <Route path='/talim-tarbiya' element={<Talim/>}></Route>
                <Route path="/o'quvchilar" element={<Pupils/>}></Route>
                <Route path="/qabul" element={<Qabul/>}></Route>
                <Route path="/elon" element={<Elon/>}></Route>
                <Route path='/ad' element={<Elon2/>}></Route>
                <Route path='/not-found' element={<NFound/>}></Route>
                <Route path='/new' element={<New/>}></Route>
              </Routes>
            </BrowserRouter>
    </div>
  );
}

export default App;
