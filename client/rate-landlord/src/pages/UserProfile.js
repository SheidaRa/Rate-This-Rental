import React, { useEffect, useState } from 'react';
import './CSS/UserProfile.css';
import { API_URL } from '../constants';
import { Link } from 'react-router-dom';

const LandlordProfile = () => {

  const [profile2, setProfile] = useState(null)
  const [name, setName] = useState("")
  const [errorMessage, setErrorMessage] = useState(null);
  const [reviewList, setReviewList] = useState([]);
  const [rentalList, setRentalList] = useState([]);
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

useEffect(() => {
  const access_token = localStorage.getItem('access_token');
  if (profile2) {
    setName(profile2.name)
  }
  const fetchReviews = async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/reviews/by_user/${profile2.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      });

      const data = await response.json();
      setReviewList(data);

      // Fetch and store rentals for each review
      const rentalsPromises = data.map(async (review) => {
        const rentalResponse = await fetch(`${API_URL}/api/v1/rentals/${review.rental_id}/by_id`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
        });
        const rentalData = await rentalResponse.json();
        return rentalData;
      });

      // Wait for all rentals promises to resolve
      const rentalsResults = await Promise.all(rentalsPromises);

// Get rid of duplicates
const uniqueRentalList = rentalsResults.filter(
  (rental, index, self) =>
    index ===
    self.findIndex((r) => r.id === rental.id)
);

// Set the list of rentals
setRentalList(uniqueRentalList);

      console.log('Review list: ', reviewList);
      console.log('Rental list: ', rentalList);
    } catch (error) {
      console.error(error);
      setErrorMessage('Error fetching review and rental lists');
    }
  };

  if (profile2) {
    fetchReviews();
  }
}, [profile2]);


  const profile = {
    name: name,
    profilePic: 'https://via.placeholder.com/150',
    properties: rentalList,
    aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    numberOfProperties: 5,
    numberOfReviews: reviewList.length,
    averageRating: 4.5,
  };

  return (
    <div className="container profile-container">
    <div className="profile-info">
      <div className="row mt-4">
        <div className="col-md-4 offset-md-1">
          <img src={profile.profilePic} alt="Profile" className="img-fluid" />
          <div className="mt-3">
          <h1>{profile2 ? `${profile.name}'s Profile` : 'Loading...'}</h1>
          </div>
          </div>
        <div className="col-md-6">
            <h5>Number of Reviews: {profile.numberOfReviews ? profile.numberOfReviews : '0'}</h5>
        </div>
      </div>
    </div>
      <div className='row'>
        <div className="col-md-10 offset-md-1">
          <h2>Properties reviewed</h2>
          <div className="row">
            {profile.properties.map((property, index) => (
              <div key={index} className="col-md-4 mb-3">
                <Link  to={`/wip/${property.place_id}`}>
                <div className="profile-card">
                  <img src={`/photos/nearby/${index % 4 +1}.png`} className="card-img-top" alt={`Property ${index + 1}`} />
                  <div className="card-body">
                    <h5 className="card-title">{property.housenumber} {property.street}<br/>{property.city}</h5>
                  </div>
                </div>
                </Link>
              </div>
              
            ))}
            {profile.properties.length == 0 && <div className='col-12'>No properties reviewed</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordProfile;
