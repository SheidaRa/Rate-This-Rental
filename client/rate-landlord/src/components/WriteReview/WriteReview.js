import React, {useState} from 'react'
import "./WriteReview.css"
import Rating from '../Rating/Rating'

const WriteReview = ({ isVisible, setVisibility, resetVisibility }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        resetVisibility()
    }
  return (
    <div className='write-review-container' style={{display: isVisible ? 'block' : 'none' }}>
        <div className='write-review'>
            <div className='row'>
                <div className='col-12 write-review-title'>
                    <p>Write a review</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-group row'>
                        <label for="landlord-select" className='col-sm-3 col-6 col-form-label'>Land Lord name</label>
                        <div className='col-sm-9 col-6'>
                            <select name='landlord' id='landlord-select'>
                                <option value="JonhDoe">John Doe</option>
                            </select>
                        </div>
                    </div>
                    <textarea id='review' placeholder='Write a review...'></textarea> 
                    <div className='row form-rating-row'>
                        <div className='col-md-6'>
                            <div className='row rating'><Rating label='Location' grade={4} /></div>
                            <div className='row rating'><Rating label='Maintenance' grade={4} /></div>
                        </div>
                        <div className='col-md-6'>
                            <div className='row rating'><Rating label='Responsiveness' grade={4} /></div>
                            <div className='row rating'><Rating label='Rent and Fees' grade={4} /></div>
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