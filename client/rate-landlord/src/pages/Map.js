import Map from '../components/Map/Map';
import { useState } from "react";
import SmallSearchBar from '../components/SmallSearchBar/SmallSearchBar';

import "../components/Searchbar/SearchBar.css"
import "../components/Searchbar/SearchResultsList.css"
import "../components/Searchbar/SearchResult.css"
import './CSS/Map.css'

const Mappage = () => {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
    <div className='map-page-container'>
      <div className='row'>
        <div className='col-md-4'>
          <div className='map-search-container'>
            <SmallSearchBar selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
          </div>
        </div>
        <div className='col-md-8'>
          <div className='map-col-container'>
            <Map selectPosition={selectPosition} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mappage;
