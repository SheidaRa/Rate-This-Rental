import React, { useEffect, useState } from 'react';
import './CSS/LandlordProfile.css';
import { useParams } from 'react-router-dom';
import { API_URL } from '../constants'
import { Link } from 'react-router-dom';

const LandlordProfile = () => {

  const { id } = useParams();
  const [landlord, setLandlord] = useState(null)
  const [name, setName] = useState("")
  const [properties, setProperties] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [propertiesNumber, setPropertiesNumber] = useState(0)
  const [allReviews, setAllReviews] = useState([]);
  const [overall, setOverall] = useState(0)

const [errorMessage, setErrorMessage] = useState(null)
  useEffect(() => {
    const access_token = localStorage.getItem('access_token')
    const fetchLandlord = async () => {
        try {
          const response = await fetch(`${API_URL}/api/v1/landlords/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${access_token}`,
            },
          });
          const data = await response.json();
          setLandlord(data);   
          console.log('landlord: ' + data);
        } catch (error) {
            console.error(error);
            setErrorMessage("Error fetching landlord details");
          }
        };
  
        fetchLandlord();
  }, [id]);

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (landlord) {
      setName(landlord.name)
    }
    const fetchProperties = async () => {
      setIsLoading(true);
      try {
        if (landlord) {
          const response = await fetch(`${API_URL}/api/v1/rentals/${landlord.id}/by_landlord/`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${access_token}`,
            },
          });
  
          if (response.ok) {
            const data = await response.json();
            setProperties(data);
            console.log('Properties: ', data);
          } else {
            console.error('Failed to fetch properties');
          }
        }
      } catch (error) {
        console.error(error);
        setErrorMessage('Error fetching properties');
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchProperties();
  }, [landlord]);
  
  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    
    const fetchReviewsByLandlord = async () => {
      try {
        const response = await fetch(`${API_URL}/api/v1/rentals/${landlord.id}/by_landlord`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
        });
  
        const data = await response.json();
        
        // update reviews
        if (data && Array.isArray(data)) {
          const reviews = data.reduce((acc, rental) => {
            if (rental.reviews && Array.isArray(rental.reviews)) {
              acc.push(...rental.reviews);
            }
            return acc;
          }, []);
          
          setAllReviews(reviews);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
  
    fetchReviewsByLandlord();
  }, [landlord]);

  useEffect(() => {
    if (properties) {
      setPropertiesNumber(properties.length)
    }
  }, [properties])

  useEffect(() => {
    if (allReviews) {
      const sumOfFields = allReviews.reduce((acc, review) => {
        acc.location += review.location;
        acc.responsiveness += review.responsiveness;
        acc.maintenance += review.maintenance;
        acc.rent += review.rent;
        return acc;
      }, {
        location: 0,
        responsiveness: 0,
        maintenance: 0,
        rent: 0,
      });
      
      // Compute average garde
      const numberOfReviews = allReviews.length;
      const averageLocation = sumOfFields.location / numberOfReviews;
      const averageResponsiveness = sumOfFields.responsiveness / numberOfReviews;
      const averageMaintenance = sumOfFields.maintenance / numberOfReviews;
      const averageRent = sumOfFields.rent / numberOfReviews;
      setOverall( ((averageLocation + averageResponsiveness + averageMaintenance + averageRent)/4).toFixed(2))
    }
  }, [allReviews])

  const profile = {
    name: name,
    profilePic: 'https://via.placeholder.com/150',
    properties: properties,
    aboutMe: 'I am ' + name,
    numberOfProperties: properties.length,
    numberOfReviews: allReviews.length,
    averageRating: overall,
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
            <h5>Number of Properties: {profile.numberOfProperties}</h5>
            <h5>Number of Reviews: {profile.numberOfReviews}</h5>
            <h5>Average Rating: {isNaN(profile.averageRating) ? 'Not rated yet' : profile.averageRating }</h5>
        </div>
      </div>

      <div className='row'>
        <div className="col-md-10 offset-md-1">
          <h2>About Me</h2>
          <p>{profile.aboutMe}</p>
        </div>
      </div>

    </div>
      <div className='row'>
        <div className="col-md-10 offset-md-1">
          <h2>Properties</h2>
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
          </div>
        </div>
      </div>
    </div>



  );
};

export default LandlordProfile;
