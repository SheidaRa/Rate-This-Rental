import React from 'react'
import "./Nearby.css"
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const Nearby = ({image, address, rating, reviews}) => {

    const filledStars = Array.from({ length: rating }, (_, index) => (
        <IoIosStar key={index} />
      ));
    
      const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
        <IoIosStarOutline key={index} />
      ));

  return (
    <>
        <div className='row nearby'>
            <div className='col-4'>
                <img className='nearby-img' src={image}></img>
            </div>
            <div className='col-7'>
                <p className='nearby-address'>{address}</p>
                <span className='stars'>
                    {filledStars}
                    {emptyStars}
                </span>
                <p>{reviews} reviews</p>
            </div>
        </div>
    </>
  )
}

export default Nearby