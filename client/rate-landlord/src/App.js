import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Wip from './pages/Wip';
import Authentication from './pages/Authentication';
import EditButton from './pages/LandlordProfile';

import { SearchBar } from './components/Searchbar/SearchBar';
import { SearchResultsList } from './components/Searchbar/SearchResultsList';
import "./components/Searchbar/SearchBar";
import "./components/Searchbar/SearchResultsList.css";
import "./components/Searchbar/SearchResult.css";
import InfoCard from './components/Cards/InfoCard';
import Button from './components/Button/Button';

function App() {

  const [results, setResults] = useState([]);


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Outlet />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contacts />} />
          <Route exact path="/wip" element={<Wip />} />
          <Route exact path="/signin" element={<Authentication />} />
          <Route exact path="/llp" element={<EditButton/>} />

        </Routes>
      </Router>




    </div>

  );
}

export default App;
