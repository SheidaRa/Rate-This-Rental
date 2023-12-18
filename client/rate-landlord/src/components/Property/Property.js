import React, {useEffect, useState} from 'react';
import "./Property.css";
import Rating from '../Rating/Rating';
import WriteReview from '../WriteReview/WriteReview';
import BecomeLandlord from '../BecomeLandlord/BecomeLandlord';
import { API_URL } from '../../constants';
import { Link } from 'react-router-dom';

const Property = ({ house_number, road, city, state, postcode, place_id, rental_id, lord, rating, location, responsiveness, maintenance, rent}) => {

  const [isVisible, setVisibility] = useState(false);

  const handleReviewBtnClick = () => (
    setVisibility(true)
  )

  const resetVisibility = () => (
    setVisibility(false)
  )

  const [landlord_id, setLandlord_id] = useState(0)
  const [landlord, setLandlord] = useState(null)
  const [name, setName] = useState("")
  const [errorMessage, setErrorMessage] = useState(null);
useEffect(() => {
  const access_token = localStorage.getItem('access_token')
  const fetchProfile = async () => {
      try {
        const response = await fetch(`${API_URL}/api/v1/landlords/${lord}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${access_token}`,
          },
        });
        const data = await response.json();
        setLandlord(data);
        console.log('landlord: ' + lord);
      } catch (error) {
          console.error(error);
          setErrorMessage("Error fetching profile details");
        }
      };

      fetchProfile();
}, []);

useEffect(() => {
  if (landlord) {
    setName(landlord.name);
    setLandlord_id(landlord.id);
  }
}, [landlord]); 
  
  return (
    <>
      <div className='row'>
        <div className='col-md-12 col-6'>
          <div className='row address'><h2>{house_number} {road}</h2></div>
          <div className='row '><p>{city}, {state} {postcode}</p></div>
          <div className='row'><p>Current Land lord: {lord ? <Link to={`/llp/${landlord_id}`}> {name} </Link> : <BecomeLandlord place_id={place_id}/>}</p></div>
        </div>
        <div className='col-md-12 col-6'>
          <div className='row overall'><img src='/photos/icons/star.png'></img><span>{rating > 0 ? rating : "Not rated yet"}</span></div>
        </div>
      </div>
      <div className='row'><p>Rating Breakdown</p></div>
      <div className='row'>
        <div className='col-md-12 col-6'>
          <div className='row rating'><Rating label='Location' grade={location} /></div>
          <div className='row rating'><Rating label='Responsiveness' grade={responsiveness} /></div>
        </div>
        <div className='col-md-12 col-6'>
          <div className='row rating'><Rating label='Maintenance' grade={maintenance} /></div>
          <div className='row rating'><Rating label='Rent and Fees' grade={rent} /></div>
        </div>
      </div>
          <div className='row'><p>Did you live here ?</p></div>
          <div className='row'>
              {lord ? <span>
                  <button className='review-btn' onClick={handleReviewBtnClick}>
                      Write a review
                  </button>
              </span> : <span>You cannot review a property if no one claimed it</span>}
          </div>
        <WriteReview place_id={place_id} rental_id={rental_id} isVisible={isVisible} setVisibility={setVisibility} resetVisibility={resetVisibility} landlord_id={landlord_id} landlord_name={name}/>
    </>
  )
}

export default Property
