import Map from '../components/Map/Map';
import { useState } from "react";
import SmallSearchBar from '../components/SmallSearchBar/SmallSearchBar'
import SearchBox from '../components/SmallSearchBar/SmallSearchBar';


import "../components/Searchbar/SearchBar.css"
import "../components/Searchbar/SearchResultsList.css"
import "../components/Searchbar/SearchResult.css"


const Mappage = () => {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
<div className='col-md-8 '>
<div className='map-container'>
      <SearchBox selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
    </div>
<Map selectPosition={selectPosition} />
    
</div>  )
}

export default Mappage


