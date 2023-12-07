import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
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

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    
    <>
    <form className="form-row" onSubmit={handleSubmit}> {/* Use Bootstrap's input group */}
    <div >
      <input
        type="text"
        placeholder="Enter an address, neighborhood, city, or ZIP code"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
                  // Search
        const params = {
          q: searchText,
          format: "json",
          addressdetails: 1,
          polygon_geojson: 0,
        };
        const queryString = new URLSearchParams(params).toString();
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            console.log(JSON.parse(result));
            setListPlace(JSON.parse(result));
          })
          .catch((err) => console.log("err: ", err));
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
        };
        const queryString = new URLSearchParams(params).toString();
        console.log("QueryString: " + queryString)
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        fetch(`${NOMINATIM_BASE_URL}${queryString}`, requestOptions)
          .then((response) => response.text())
          .then((result) => {
            console.log(JSON.parse(result));
            setListPlace(JSON.parse(result));
          })
          .catch((err) => console.log("err: ", err));
      }}
      >
        <FaSearch />
      </button>
    </div>
  </form>
  <List component="nav" aria-label="main mailbox folders">
          {Array.isArray(listPlace) && listPlace.map((item) => {
            return (
              <div key={item?.place_id}>
                <ListItem
                  button
                  onClick={() => {
                    navigate(`/wip/${item.place_id}`);
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
