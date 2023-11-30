import './App.css';
import * as React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import 'bootstrap/dist/css/bootstrap.min.css';

import { SearchBar } from './components/Searchbar/SearchBar';
import {SearchResultsList} from './components/Searchbar/SearchResultsList';
import "./components/Searchbar/SearchBar"
import "./components/Searchbar/SearchResultsList.css"
import "./components/Searchbar/SearchResult.css"
import InfoCard from './components/Cards/InfoCard';

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

    <div className=" search-bar-container">
      <div className="search-bar">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>  

    <section className='section'>

<div className='row'>

<div className='col-lg-4 offset-lg-2'>

  <InfoCard  title={'Renters Impowerment'}  info={'We believe in the power of community. Your reviews and ratings help renters make informed choices and encourage landlords to excel in their service. Together, we are creating a transparent  environment that strengthens our community.'}  image={'/photos/icons/why1.png'} />

  </div>

  <div className='col-lg-4'>

  <InfoCard title={'Stay Annonomous'} info={'Rate Your Landlord values your privacy, offering the option to submit reviews anonymously, ensuring you can candidly share your experiences without revealing your identity. Your voice, your choice.'} image={'/photos/icons/why2.png'} />

  </div>
  </div>

  </section>


 
      
      
    
    </div>

  );
}

export default App;
