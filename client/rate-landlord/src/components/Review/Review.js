import React, {useEffect, useState} from 'react';
import "./Review.css";
import moment from 'moment';
import Rating from '../Rating/Rating';
import "./Review.css";

const Review = ({placeId, userId, location, responsiveness, maintenance, rent, date, lord, content}) => {

    const [timePast, setTimePast] = useState('');

    useEffect(() => {
        const datePassed = moment(date).utc().format('MM/DD/YYYY');
        // const datePassed = moment(date, 'MM/DD/YYYY');

        const difference = moment().diff(datePassed);

        const formattedDuration = moment.duration(difference).humanize();

        setTimePast(formattedDuration.charAt(0).toUpperCase() + formattedDuration.slice(1));
    }, [date]);

  return (
    <div className='review'>
        <div className='row review-first-row'>
            <div className='col-lg-2 col-3 '>
                <div className='review-overall'>
                    <div className='row'>
                        <span>Overall</span>
                    </div>
                    <div className='row'>
                        <span className='review-overall-grade'>{(location + responsiveness + maintenance + rent)/4}</span>
                    </div>
                </div>
            </div>
            <div className='col-lg-10 col-9'>
                <div className='row'>
                    <p>{timePast} ago</p>
                </div>
                <div className='row'>
                    <p>Landlord: {lord}</p>
                </div>
            </div>
        </div>
        <div className='row review-bottom-row'>
            <div className='col-md-3'>
                <div className='row'>
                    <div className='col-md-12 col-3'>
                        <div className=' rating'><Rating label='Location' grade={location} /></div>
                    </div>
                    <div className='col-md-12 col-3'>
                        <div className=' rating'><Rating label='Responsiveness' grade={responsiveness} /></div>
                    </div>
                    <div className='col-md-12 col-3'>
                        <div className=' rating'><Rating label='Maintenance' grade={maintenance} /></div>
                    </div>
                    <div className='col-md-12 col-3'>
                        <div className=' rating'><Rating label='Rent and Fees' grade={rent} /></div>
                    </div>
                </div>
            </div>
            <div className='col-md-9'>
                <p>
                    {content}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Review
