import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import { SearchBar } from './components/Searchbar/SearchBar';
import {SearchResultsList} from './components/Searchbar/SearchResultsList';

function App() {
  
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Outlet />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/contact" element={<Contacts/>}/>
          </Routes>
      </Router>
      
      
    </div>

  );
}

export default App;
