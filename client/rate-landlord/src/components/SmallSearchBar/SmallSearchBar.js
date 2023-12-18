import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { FaSearch } from "react-icons/fa";
import "./SmallSearchBar.css";
import { useNavigate } from 'react-router-dom';

const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";
const params = {
  q: "",
  format: "json",
  addressdetails: "addressdetails",
};

export default function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState([]);
  const [searching, setSearching] = useState(false);
  const [noResult, setNoresult] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setListPlace([]);
    setSearching(true);
    setNoresult(false);
  }

  return (
    
    <>
    <form className="form-row" onSubmit={handleSubmit}> {/* Use Bootstrap's input group */}
    <div className="small-search-bar">
      <input
        type="text"
        placeholder="Enter an address, neighborhood, city, or ZIP code"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
          if (event.target.value == ""){
            setListPlace([]);
            setNoresult(false);
          }
        }}
      />
      <button
      type="submit"
      onClick={() => {
        // Search
        const params = {
          q: searchText,
          format: "json",
          addressdetails: 1,
          polygon_geojson: 0,
          limit: 1
        };
        const queryString = new URLSearchParams(params).toString();
        console.log("QueryString: " + queryString)
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
          .then((response) => response.text())
          .then(async(result) => {
            const parsedResult = JSON.parse(result);

            if (Array.isArray(parsedResult) && parsedResult.length > 0) {
              const validResults = [];
          
              const fetchAndTest = async (place) => {
                const placeId = place?.place_id;
          
                const detailsResponse = await fetch(`https://nominatim.openstreetmap.org/details.php?place_id=${placeId}&format=json`);
                const detailsResult = await detailsResponse.json();
          
                console.log("Details result:", detailsResult);
          
                if (detailsResult?.addresstags?.housenumber && detailsResult?.addresstags?.street && detailsResult?.addresstags?.city ) {
                  validResults.push(place);
                }
              };
          
              await Promise.all(parsedResult.map(fetchAndTest));

              setListPlace(validResults);
              setSearching(false);
              console.log(listPlace);
              if (validResults.length == 0) {
                setNoresult(true);
              }
            } else {
              console.log("Invalid results:", parsedResult);
              setNoresult(true);
              setSearching(false);
            }
          })
          .catch((err) => console.log("Fetch error:", err));
      }}
      >
        <FaSearch />
      </button>
    </div>
  </form>
  {searching && <p className="searching">Searching for corresponding addresses...</p>}
  {noResult && <p className="noResults">No results found...</p>}
  <List component="nav" aria-label="main mailbox folders">
          {Array.isArray(listPlace) && listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <ListItem
                  button
                  onClick={() => {
                    navigate(`/wip/${item.place_id}`);
                    setListPlace([]);
                  }}
                >
                  <ListItemIcon>
                    <img
                      src="/pin.svg"
                      alt="Placeholder"
                      style={{ width: 38, height: 38 }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item?.display_name} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
  </>

  );
}
