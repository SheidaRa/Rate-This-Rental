import React from 'react'
import { SearchBar } from '../components/Searchbar/SearchBar';
import {SearchResultsList} from '../components/Searchbar/SearchResultsList';
import { useState } from "react";

import "../components/Searchbar/SearchBar.css"
import "../components/Searchbar/SearchResultsList.css"
import "../components/Searchbar/SearchResult.css"



const Home = () => {

  const [results, setResults] = useState([]);

  return (

<div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>  )
}

export default Home