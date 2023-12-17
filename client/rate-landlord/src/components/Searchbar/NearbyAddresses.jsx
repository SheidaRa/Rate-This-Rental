import React, { useState, useEffect } from "react";
import { API_URL } from '../../constants';

const NearbyAddresses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [nearbyAddresses, setNearbyAddresses] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch(`${API_URL}/api/v1/addresses?search=${searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setNearbyAddresses(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="nearby-addresses">
      <input
        type="text"
        placeholder="Search for a location..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {nearbyAddresses.length > 0 && (
        <>
          <h3>Nearby locations</h3>
          <ul>
            {nearbyAddresses.map((address) => (
              <li key={address.id}>
                <a href={`http://maps.google.com/maps?q=${address.latitude},${address.longitude}`}>
                  {address.address} ({address.distance.toFixed(2)} miles)
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default NearbyAddresses;
