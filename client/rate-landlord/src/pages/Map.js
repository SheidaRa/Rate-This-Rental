import Map from '../components/Map/Map';
import { useState } from "react";
import SmallSearchBar from '../components/SmallSearchBar/SmallSearchBar'


import "../components/Searchbar/SearchBar.css"
import "../components/Searchbar/SearchResultsList.css"
import "../components/Searchbar/SearchResult.css"


const Mappage = () => {
  const [selectPosition, setSelectPosition] = useState(null);

  return (
<div className='col-md-8 '>
<Map selectPosition={selectPosition} />
<section className='home-search'>
    <div className='container'>
      <SmallSearchBar selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
    </div>
  </section>
</div>  )
}

export default Mappage


