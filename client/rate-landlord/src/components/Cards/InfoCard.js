import React from 'react'
import "./InfoCard.css";

const InfoCard = ({ title, info,  image = '/photos/icons/placeholder.jpg' }) => {
    return (
        <div className='info-card'>
            <div className='info-img'>
                <img src={image} />
            </div>
            <h3>{title}</h3>
            <h4>{info}</h4>

        </div>
    )
}

export default InfoCard