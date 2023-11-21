import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Outlet />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contacts/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
