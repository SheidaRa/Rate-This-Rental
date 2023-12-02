import React from 'react';
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import "./Rating.css"

const Rating = ({label, grade}) => {

  const filledStars = Array.from({ length: grade }, (_, index) => (
    <IoIosStar key={index} />
  ));

  const emptyStars = Array.from({ length: 5 - grade }, (_, index) => (
    <IoIosStarOutline key={index} />
  ));

  return (
    <>
        <span className='label'>{label}</span><br></br>
        <span className='stars'>
            {filledStars}
            {emptyStars}
        </span>
    </>
  )
}

export default Rating