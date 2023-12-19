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
import LandlordProfile from './pages/LandlordProfile';
import Rental from './components/Property/Rental';
import Footer from './components/Footer/Footer';

import "./components/Searchbar/SearchBar";
import "./components/Searchbar/SearchResultsList.css";
import "./components/Searchbar/SearchResult.css";
import UserProfile from './pages/UserProfile';
import Mappage from './pages/Map';
import ResourcePage from './pages/Resources';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Outlet />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contacts />} />
          <Route exact path="/resources" element={<ResourcePage />} />
          <Route exact path="/wip/:id" element={<Wip />} />
          <Route exact path="/signin" element={<Authentication />} />
          <Route exact path="/llp/:id" element={<LandlordProfile/>} />
          <Route exact path="/Up" element={<UserProfile/>} />
          <Route path="/rentals/:placeId" element={<Rental />} />
        </Routes>
      </Router>

      <Footer/>



    </div>

  );
}

export default App;
