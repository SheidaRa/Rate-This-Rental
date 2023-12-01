import React from 'react'

const Nearby = ({image, address, rating, reviews}) => {
  return (
    <>
        <div className='row'>
            <div className='nearby-img'>
                <img src={image}></img>
            </div>
        </div>
    </>
  )
}

export default Nearby