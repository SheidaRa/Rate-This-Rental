import React, { useEffect, useState } from 'react';

import { API_URL } from '../../constants';

const handleBecomeLandlord = async (place_id, profile2) => {
    const access_token = localStorage.getItem('access_token');
    const resourceOwnerString = localStorage.getItem('resource_owner');
    const resourceOwner = JSON.parse(resourceOwnerString);
    const lord_id = parseInt(resourceOwner.id, 10);
  
    console.log("lord id " + lord_id);
  
    // update landlord field
    const response = await fetch(`${API_URL}/api/v1/rentals/${place_id}/become_landlord`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`
      },
      body: JSON.stringify({
        lord_id: lord_id
      })
    });
  
    if (response.ok) {
      console.log('Landlord updated successfully');
  
      // create a landlord entry
      const createLandlordResponse = await fetch(`${API_URL}/api/v1/landlords`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
        },
        body: JSON.stringify({
          id: lord_id,
          name: profile2.name
        })
      });
  
      if (createLandlordResponse.ok) {
        console.log('Landlord created successfully');
        window.location.reload();
        // Ajoutez ici toute logique supplémentaire après la création
      } else {
        console.error('Failed to create landlord');
        window.location.reload();
      }
    } else {
      console.error('Failed to update landlord');
    }
  }  

const BecomeLandlord = ({ place_id }) => {

    const [profile2, setProfile] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    const access_token = localStorage.getItem('access_token')
    const fetchProfile = async () => {
        try {
          const response = await fetch(`${API_URL}/api/v1/profiles`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${access_token}`,
            },
          });
          const data = await response.json();
          setProfile(data);
          console.log('profile: ' + profile2);
        } catch (error) {
            console.error(error);
            setErrorMessage("Error fetching profile details");
          }
        };
  
        fetchProfile();
  }, []);

  return (
    <button className='review-btn' onClick={() => handleBecomeLandlord(place_id, profile2)}>
      Become landlord
    </button>
  );
}

export default BecomeLandlord;
