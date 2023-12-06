import { SearchBar } from '../components/Searchbar/SearchBar';
import {SearchResultsList} from '../components/Searchbar/SearchResultsList';
import { SmallSearchBar } from '../components/SmallSearchBar/SmallSearchBar';
import Map from '../components/Map/Map';
import { useState } from "react";


import "../components/Searchbar/SearchBar.css"
import "../components/Searchbar/SearchResultsList.css"
import "../components/Searchbar/SearchResult.css"
import './CSS/Map.css'

const Mappage = () => {
    const [results, setResults] = useState([]);

  return (
    <div className='map-container'>
<Map />
<div className='map-search-container'>

    <SmallSearchBar setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      </div>
  )
}

export default Mappage


