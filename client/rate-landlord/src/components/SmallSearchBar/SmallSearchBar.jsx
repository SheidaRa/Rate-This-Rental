import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SmallSearchBar.css";

export const SmallSearchBar = ({ setResults }) => {
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
    <div className="form-row"> {/* Use Bootstrap's input group */}
      <div className="small-search-bar">
        <input
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};