import React, { useEffect, useState } from 'react'
import "./Nearby.css"
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { API_URL } from '../../constants'

const Nearby = ({image, housenumber, street, place_id}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [reviewList, setReviewList] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const [location, setLocation] = useState(0);
    const [responsiveness, setResponsiveness] = useState(0);
    const [maintenance, setMaintenance] = useState(0);
    const [rent, setRent] = useState(0);
    const [nearby, setNearby] = useState([])

    const [overall, setOverall] = useState(0)

    useEffect(() => {
      if (reviewList.length > 0) {
        let totalLocation = 0;
        let totalResponsiveness = 0;
        let totalMaintenance = 0;
        let totalRent = 0;
    
        reviewList.forEach((review) => {
          totalLocation += review.location;
          totalResponsiveness += review.responsiveness;
          totalMaintenance += review.maintenance;
          totalRent += review.rent;
        });
    
        const averageLocation = totalLocation / reviewList.length;
        const averageResponsiveness = totalResponsiveness / reviewList.length;
        const averageMaintenance = totalMaintenance / reviewList.length;
        const averageRent = totalRent / reviewList.length;

        const roundedAverageLocation = Math.round(averageLocation);
        const roundedAverageMaintenance = Math.round(averageMaintenance);
        const roundedAverageResponsiveness = Math.round(averageResponsiveness);
        const roundedAverageRent = Math.round(averageRent);

        setLocation(roundedAverageLocation);  
        setResponsiveness(roundedAverageResponsiveness); 
        setMaintenance(roundedAverageMaintenance); 
        setRent(roundedAverageRent); 
        setOverall(( Number(averageLocation + averageMaintenance + averageResponsiveness + averageRent) / 4).toFixed(2));
      }
      else {
        setLocation(0);
        setMaintenance(0);
        setResponsiveness(0);
        setRent(0);
        setOverall(0);
      }
    }, [reviewList]);

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        const fetchReviewList = async () => {
            setIsLoading(true);
            try {
              const response = await fetch(`${API_URL}/api/v1/rentals/${place_id}/reviews`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${access_token}`,
                },
              });
              const data = await response.json();
              await setReviewList(data);
              console.log(reviewList);
            } catch (error) {
                console.error(error);
                setErrorMessage("Error fetching review list");
              } finally {
                setIsLoading(false);
              }
            };
  
            fetchReviewList();
    }, [place_id]);

    const filledStars = Array.from({ length: Math.round(overall) }, (_, index) => (
        <IoIosStar key={index} />
      ));
    
      const emptyStars = Array.from({ length: 5 - Math.round(overall) }, (_, index) => (
        <IoIosStarOutline key={index} />
      ));

  return (
    <>
        <div className='row nearby'>
            <div className='col-4'>
                <img className='nearby-img' src={image}></img>
            </div>
            <div className='col-7'>
                <p className='nearby-address'><Link to={`/wip/${place_id}`}>{housenumber + ' ' + street}</Link></p>
                <span className='stars'>
                    {filledStars}
                    {emptyStars}
                </span>
                <p>{reviewList ? reviewList.length + ' reviews' : 'No reviews yet'}</p>
            </div>
        </div>
    </>
  )
}

export default Nearby