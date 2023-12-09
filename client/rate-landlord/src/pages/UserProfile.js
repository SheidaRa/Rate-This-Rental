import React from 'react';
import './CSS/UserProfile.css';


const LandlordProfile = () => {
  const profile = {
    name: 'John Doe',
    profilePic: 'https://via.placeholder.com/150',
    properties: [
      { name: 'Property 1', image: 'https://via.placeholder.com/150' },
      { name: 'Property 2', image: 'https://via.placeholder.com/150' },
      
    ],
    aboutMe: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    numberOfProperties: 5,
    numberOfReviews: 10,
    averageRating: 4.5,
  };

  return (
    <div className="container profile-container">
    <div className="profile-info">
      <div className="row mt-4">
        <div className="col-md-4 offset-md-1">
          <img src={profile.profilePic} alt="Profile" className="img-fluid" />
          <div className="mt-3">
          <h1>{profile.name}'s Profile</h1>
          </div>
          </div>
        <div className="col-md-6">
            <h5>Number of Reviews: {profile.numberOfReviews}</h5>
        </div>
      </div>
    </div>
      <div className='row'>
        <div className="col-md-10 offset-md-1">
          <h2>Properties reviewd</h2>
          <div className="row">
            {profile.properties.map((property, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="profile-card">
                  <img src={property.image} className="card-img-top" alt={`Property ${index + 1}`} />
                  <div className="card-body">
                    <h5 className="card-title">{property.name}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandlordProfile;
