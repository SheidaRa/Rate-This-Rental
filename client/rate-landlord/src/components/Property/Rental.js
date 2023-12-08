import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import { API_URL } from '../../constants';

const Rental = () => {
  const { id } = useParams(); // Access the rentalId from the URL
  const [ rental, setRental ] = useState(null);
  const [ address, setAddress ] = useState(null);
  const [ landlord, setLandlord ] = useState(null);

  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/v1/rentals/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setRental(data.rental);
        setAddress(data.address);
        setLandlord(data.landlord);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]); // Only re-fetch when rentalId changes

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!rental) {
    return <p>No rental found.</p>;
  }

  return (
    <div className="rental-details">
      <h2>Rental Details</h2>
      <div className="address">
        <h3>Address</h3>
        <p>{address.street}</p>
        {address.unit && <p>Unit: {address.unit}</p>}
        <p>{address.city}, {address.state} {address.zip}</p>
      </div>
      <div className="landlord">
        <h3>Landlord</h3>
        <p>{landlord.name}</p>
      </div>
      {/* Add additional rental details here */}
    </div>
  );
};

export default Rental;
