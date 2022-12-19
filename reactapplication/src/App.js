import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Content from './components/content';
import Sidebar from './components/navigation';


function App() {
  return (
    <BrowserRouter>
      <div className='app'>
      <Sidebar/>
        <Routes>
          <Route path='/' element={<Content/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
