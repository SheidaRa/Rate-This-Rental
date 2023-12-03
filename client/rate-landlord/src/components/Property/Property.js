import React, {useState} from 'react'
import "./Property.css"
import Rating from '../Rating/Rating'
import WriteReview from '../WriteReview/WriteReview'

const Property = ({ address, city, state, zip, loard, rating, location, responsiveness, maintenance, rent}) => {

  const [isVisible, setVisibility] = useState(false);

  const handleReviewBtnClick = () => (
    setVisibility(true)
  )

  const resetVisibility = () => (
    setVisibility(false)
  )
  return (
    <>
      <div className='row'>
        <div className='col-md-12 col-6'>
          <div className='row address'><h2>{address}</h2></div>
          <div className='row '><p>{city}, {state} {zip}</p></div>
          <div className='row'><p>Current Land loard: {loard}</p></div>
        </div>
        <div className='col-md-12 col-6'>
          <div className='row overall'><img src='/photos/icons/star.png'></img><span>{rating}</span></div>
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
              <span>
                  <button className='review-btn' onClick={handleReviewBtnClick}>
                      Write a review
                  </button>
              </span>
          </div>
        <WriteReview isVisible={isVisible} setVisibility={setVisibility} resetVisibility={resetVisibility}/>
    </>
  )
}

export default Property