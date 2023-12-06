import { SearchBar } from '../components/Searchbar/SearchBar';
import {SearchResultsList} from '../components/Searchbar/SearchResultsList';
import Map from '../components/Map/Map';
import { useState } from "react";


import "../components/Searchbar/SearchBar.css"
import "../components/Searchbar/SearchResultsList.css"
import "../components/Searchbar/SearchResult.css"


const Mappage = () => {
    const [results, setResults] = useState([]);

  return (
<div className='col-md-8 '>
<Map />
<section className='home-search'>
    <div className='container'>
    <SearchBar setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />}
    </div>
  </section>
</div>  )
}

export default Mappage


