import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-group mb-3"> {/* Use Bootstrap's input group */}
    <span className="input-group-text" id="search-icon">
      <FaSearch />
      </span>
      <input
      type="text"
      className="form-control" // Apply Bootstrap's form-control class
      placeholder="Type to search..."
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      />
      </div>
      );
    };


       // <div className="input-wrapper">
    //   <FaSearch id="search-icon" />
    //   <input
    //     placeholder="Type to search..."
    //     value={input}
    //     onChange={(e) => handleChange(e.target.value)}
    //   />
    // </div>
    

