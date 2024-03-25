import React from "react";
import './App.css';
import './utils.css'

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

function App() {
  return (
    
  
    <Router>
      <div>
        <Navbar/>

        <Routes>
          <Route exact path="/" element={ <Home/> }></Route>

          <Route exact path="/About" element={<About />}></Route>

          <Route exact path="/Contact" element={<Contact />}></Route>
        </Routes>

      </div>
    </Router>
    
  );
};

export default App;
