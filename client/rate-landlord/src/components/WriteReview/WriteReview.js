import React, {useState} from 'react'
import "./WriteReview.css"
import Rating from '../Rating/Rating'
import { IoMdClose } from "react-icons/io";
import { IoIosStar } from 'react-icons/io';
import { IoIosStarOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

import { API_URL } from '../../constants';

const WriteReview = ({ place_id, rental_id, isVisible, setVisibility, resetVisibility, loandlord_id, landlord_name }) => {
    const navigate = useNavigate()
    const [content, setContent] = useState("");

    const handleContentChange = (event) => {
        setContent(event.target.value);
    }

    const [location, setLocation] = useState(3)

    const handleLocationClick = (iconIndex) => {
        setLocation(iconIndex);
      };

    const [maintenance, setMaintenance] = useState(3)

    const handleMaintenanceClick = (iconIndex) => {
        setMaintenance(iconIndex);
    };

    const [responsiveness, setResponsiveness] = useState(3)

    const handleResponsivenessClick = (iconIndex) => {
        setResponsiveness(iconIndex);
        };

    const [rent, setRent] = useState(3)

    const handleRentClick = (iconIndex) => {
        setRent(iconIndex);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        resetVisibility();
        const access_token = localStorage.getItem('access_token')
        const reviewData = {
            content,
            location,
            maintenance,
            responsiveness,
            rent,
        };

        try {
            const response = await fetch(`${API_URL}/api/v1/rentals/${place_id}/reviews`, {
              method: "POST",
              body: JSON.stringify(reviewData),
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${access_token}`
              },
            })

            if (response.ok) {
                window.location.reload();
              }
         } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again later.");
          }


        setLocation(3);
        setMaintenance(3);
        setResponsiveness(3);
        setRent(3);
        setContent("");
        window.location.reload(false);
    }

    const handleClose = () => {
        resetVisibility();
        setLocation(3);
        setMaintenance(3);
        setResponsiveness(3);
        setRent(3);
        setContent("");
    }

  return (
    <div className='write-review-container' style={{display: isVisible ? 'block' : 'none' }}>
        <div className='write-review'>
            <div className='row'>
                <div className='col-6 write-review-title offset-5'>
                    <p>Write a review</p>
                </div>
                <button onClick={() => handleClose()}><IoMdClose /></button>
                <form onSubmit={handleSubmit}>
                    <div className='form-group row'>
                        <label for="landlord-select" className='col-sm-3 col-6 col-form-label'>Land Lord name</label>
                        <div className='col-sm-9 col-6'>
                            <select name='landlord' id='landlord-select'>
                                <option value="JonhDoe">{landlord_name}</option>
                            </select>
                        </div>
                    </div>
                    <textarea value={content} onChange={handleContentChange} id='review' placeholder='Write a review...'></textarea>
                    <div className='row form-rating-row'>
                        <div className='col-md-6'>

                            <div className='rate-row'>
                                <span>Location</span>
                                <div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleLocationClick(1)}>
                                        <input type="radio" id='location-1' name='location' checked={location === 1} style={{ display: 'none' }} readOnly />
                                        <IoIosStar />
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleLocationClick(2)}>
                                        <input type="radio" id='location-2' name='location' checked={location === 2} style={{ display: 'none' }} readOnly />
                                        {location >= 2 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleLocationClick(3)}>
                                        <input type="radio" id='location-3' name='location' checked={location === 3} style={{ display: 'none' }} readOnly />
                                        {location >= 3 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleLocationClick(4)}>
                                        <input type="radio" id='location-4' name='location' checked={location === 4} style={{ display: 'none' }} readOnly />
                                        {location >= 4 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleLocationClick(5)}>
                                        <input type="radio" id='location-5' name='location' checked={location === 5} style={{ display: 'none' }} readOnly />
                                        {location >= 5 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                </div>
                            </div>

                            <div className='rate-row'>
                                <span>Maintenance</span>
                                <div>

                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleMaintenanceClick(1)}>
                                        <input type="radio" id='maintenance-1' name='maintenance' checked={maintenance === 1} style={{ display: 'none' }} readOnly />
                                        <IoIosStar />
                                    </label>
                                    </div>

                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleMaintenanceClick(2)}>
                                        <input type="radio" id='maintenance-2' name='maintenance' checked={maintenance === 2} style={{ display: 'none' }} readOnly />
                                        {maintenance >= 2 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>

                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleMaintenanceClick(3)}>
                                        <input type="radio" id='maintenance-3' name='maintenance' checked={maintenance === 3} style={{ display: 'none' }} readOnly />
                                        {maintenance >= 3 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleMaintenanceClick(4)}>
                                        <input type="radio" id='maintenance-4' name='maintenance' checked={maintenance === 4} style={{ display: 'none' }} readOnly />
                                        {maintenance >= 4 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>

                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleMaintenanceClick(5)}>
                                        <input type="radio" id='maintenance-5' name='maintenance' checked={maintenance === 5} style={{ display: 'none' }} readOnly />
                                        {maintenance >= 5 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <div className='col-md-6'>
                            <div className='rate-row'>
                                <span>Responsiveness</span>
                                <div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleResponsivenessClick(1)}>
                                        <input type="radio" id='responsiveness-1' name='responsiveness' checked={responsiveness === 1} style={{ display: 'none' }} readOnly />
                                        <IoIosStar />
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleResponsivenessClick(2)}>
                                        <input type="radio" id='responsiveness-2' name='responsiveness' checked={responsiveness === 2} style={{ display: 'none' }} readOnly />
                                        {responsiveness >= 2 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleResponsivenessClick(3)}>
                                        <input type="radio" id='responsiveness-3' name='responsiveness' checked={responsiveness === 3} style={{ display: 'none' }} readOnly />
                                        {responsiveness >= 3 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleResponsivenessClick(4)}>
                                        <input type="radio" id='responsiveness-4' name='responsiveness' checked={responsiveness === 4} style={{ display: 'none' }} readOnly />
                                        {responsiveness >= 4 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleResponsivenessClick(5)}>
                                        <input type="radio" id='responsiveness-5' name='responsiveness' checked={responsiveness === 5} style={{ display: 'none' }} readOnly />
                                        {responsiveness >= 5 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                </div>
                            </div>

                            <div className='rate-row'>
                                <span>Rent and Fees</span>
                                <div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleRentClick(1)}>
                                        <input type="radio" id='rent-1' name='rent' checked={rent === 1} style={{ display: 'none' }} readOnly />
                                        <IoIosStar />
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleRentClick(2)}>
                                        <input type="radio" id='rent-2' name='rent' checked={rent === 2} style={{ display: 'none' }} readOnly />
                                        {rent >= 2 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleRentClick(3)}>
                                        <input type="radio" id='rent-3' name='rent' checked={rent === 3} style={{ display: 'none' }} readOnly />
                                        {rent >= 3 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleRentClick(4)}>
                                        <input type="radio" id='rent-4' name='rent' checked={rent === 4} style={{ display: 'none' }} readOnly />
                                        {rent >= 4 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                    <div className='form-check form-check-inline'>
                                    <label onClick={() => handleRentClick(5)}>
                                        <input type="radio" id='rent-5' name='rent' checked={rent === 5} style={{ display: 'none' }} readOnly />
                                        {rent >= 5 ? <IoIosStar /> : <IoIosStarOutline/>}
                                    </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 form-submit-div'>
                            <input type='submit' value='Submit' className='form-submit'/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default WriteReview
