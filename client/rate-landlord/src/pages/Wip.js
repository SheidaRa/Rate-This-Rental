import React, { useEffect, useState} from 'react'
import Slider from '../components/Slider/Slider'
import Property from '../components/Property/Property'
import Nearby from '../components/Nearby/Nearby'
import Review from '../components/Review/Review'
import Map from '../components/Map/Map'
import SmallSearchBar from '../components/SmallSearchBar/SmallSearchBar'
import { useParams } from 'react-router-dom';
import { API_URL } from '../constants'

import "../components/Searchbar/SearchBar.css"
import "../components/Searchbar/SearchResultsList.css"
import "../components/Searchbar/SearchResult.css"

const Wip = () => {

    const { id } = useParams();

    const [selectPosition, setSelectPosition] = useState(null);
    const placeId = id.toString();
    const [placeDetails, setPlaceDetails] = useState(null);
    const [rental, setRental] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const [reviewList, setReviewList] = useState([]);

    const [location, setLocation] = useState(0);
    const [responsiveness, setResponsiveness] = useState(0);
    const [maintenance, setMaintenance] = useState(0);
    const [rent, setRent] = useState(0);

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
        const fetchPlaceDetails = async () => {
          try {
            const response = await fetch(`https://nominatim.openstreetmap.org/details.php?place_id=${placeId}&format=json`);
            const data = await response.json();
            setPlaceDetails(data);
          } catch (error) {
            console.error('Error fetching place details:', error);
          }
        };

        fetchPlaceDetails();
      }, [placeId]);

    useEffect(() => {
        if (placeDetails) {
          setSelectPosition(placeDetails);
        }
      }, [placeDetails]);

    useEffect(() => {
        const access_token = localStorage.getItem('access_token')
        const fetchRental = async () => {
            setIsLoading(true);
            try {
              const response = await fetch(`${API_URL}/api/v1/rentals/${placeId}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${access_token}`,
                },
              });
              const data = await response.json();
              setRental(data);
            } catch (error) {
                console.error(error);
                setErrorMessage("Error fetching rental details");
              } finally {
                setIsLoading(false);
              }
            };

            fetchRental();
    }, []);

    useEffect(() => {
      const access_token = localStorage.getItem('access_token')
      const fetchReviewList = async () => {
          setIsLoading(true);
          try {
            const response = await fetch(`${API_URL}/api/v1/rentals/${placeId}/reviews`, {
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
  }, [placeId]);




  if (!placeDetails) {
    return <p>Loading place details...</p>;
  } else if (isLoading) {
    return <p>Loading...</p>;
  } else if (errorMessage) {
    return <p>{errorMessage}</p>;
  }




  return (
    <>
        <section className='slider'>
            <Slider />
        </section>
        <section className='wip-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Property house_number={placeDetails.addresstags.housenumber} road={placeDetails.addresstags.street} city={placeDetails.addresstags.city} state={placeDetails.addresstags.state} postcode={placeDetails.addresstags.postcode} place_id={placeId} rental_id={rental.id} lord={'John doe'} rating={overall} location={location} responsiveness={responsiveness} maintenance={maintenance} rent={rent}/>
                    </div>
                    <div className='col-md-8' style={{ position: 'relative'}}>
                        <Map selectPosition={selectPosition}/>
                        <SmallSearchBar/>
                    </div>
                </div>
                <div className='row wip-bottom-row'>
                    <div className='col-md-4'>
                            <p>Other nearby properties</p>
                        <div className='row'>
                            <div className='col-md-12 col-6'>
                                <Nearby image={"/photos/nearby/1.png"} address={'1513 Grand Ave.'} rating={4} reviews={23} />
                            </div>
                            <div className='col-md-12 col-6'>
                                <Nearby image={"/photos/nearby/2.png"} address={'1513 Grand Ave.'} rating={4} reviews={23} />
                            </div>
                            <div className='col-md-12 col-6'>
                                <Nearby image={"/photos/nearby/3.png"} address={'1513 Grand Ave.'} rating={4} reviews={23} />
                            </div>
                            <div className='col-md-12 col-6'>
                                <Nearby image={"/photos/nearby/4.png"} address={'1513 Grand Ave.'} rating={4} reviews={23} />
                            </div>
                        </div>

                    </div>
                    <div className='col-md-8 '>

                        <p>{reviewList.length > 0 ? reviewList.length + " Reviews" : "No reviews yet"}</p>
                        {reviewList.length > 0 &&
                          reviewList.map((review) => (
                            <Review location={review.location} responsiveness={review.responsiveness} maintenance={review.maintenance} rent={review.rent} date={review.created_at} lord={"John doe"} content={review.content}/>
                          ))}

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Wip
