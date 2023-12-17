import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constants";

const Rental = () => {
// Get place_id from URL parameter
const { placeId } = useParams();

// State variables
const [rental, setRental] = useState(null);
const [isLoading, setIsLoading] = useState(true);
const [errorMessage, setErrorMessage] = useState(null);

// Fetch rental details on mount
useEffect(() => {
  const fetchRental = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/v1/rentals/${placeId}`);
      const data = await response.json();
      if (data) {
        setRental(data);
      } else if (response.status === 204) {
        // No rental found, send CREATE request
        const createResponse = await fetch(`${API_URL}/api/v1/rentals`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ placeId }),
        });
        if (createResponse.ok) {
          const newRental = await createResponse.json();
          setRental(newRental);
        } else {
          setErrorMessage("Failed to create rental!");
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error fetching rental details");
    } finally {
      setIsLoading(false);
    }
  };

  fetchRental();
}, []);

// Render loading indicator or rental details
if (isLoading) {
  return <p>Loading...</p>;
} else if (errorMessage) {
  return <p>{errorMessage}</p>;
} else if (rental) {
  return (
    <div>
      <h2>Rental details for place ID: {placeId}</h2>
      <p>Landlord: {rental.landlord}</p>
      {/* Add more details to display based on your rental schema */}
    </div>
  );
} else {
  // No rental found and creation failed, display error message and offer retry
  return (
    <div>
      <p>No rental found for place ID: {placeId}</p>
      <p>Creating rental failed. Please try again later.</p>
    </div>
  );
}
};

export default Rental;
