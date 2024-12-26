// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';



const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
    
    <Route index element={<Home/>}/>
    <Route  path="about" element={<About/>}/>
    <Route  path="contact" element={<Contact/>}/>
    
    
    
    </Route>
   </Routes>
   </BrowserRouter>
  );
};

export default App;
