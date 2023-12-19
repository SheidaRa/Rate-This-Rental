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
    const [nearby, setNearby] = useState([])

    const [overall, setOverall] = useState(0)

    // useEffect(() => {
    //   const fetchPlaceDetails = async () => {
    //     try {
    //       console.log(`https://nominatim.openstreetmap.org/details.php?place_id=${placeId}&format=json`);
    //       const response = await fetch(`https://nominatim.openstreetmap.org/details.php?place_id=${placeId}&format=json`);
    //       const data = await response.json();
    //       setPlaceDetails(data);
    //     } catch (error) {
    //       console.error('Error fetching place details:', error);
    //     }
    //   };

    //   fetchPlaceDetails();
    // }, [placeId]);

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
      const access_token = localStorage.getItem('access_token');
      const fetchNearbyRentals = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(`${API_URL}/api/v1/rentals/${placeId}/similar`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${access_token}`,
            },
          });
          const data = await response.json();
          setNearby(data);
          console.log('Nearby rentals: ', data);
        } catch (error) {
          console.error(error);
          setErrorMessage("Error fetching nearby rentals");
        } finally {
          setIsLoading(false);
        }
      };

      fetchNearbyRentals();
    }, [placeId]);

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
              console.log('rental: ' + rental);
            } catch (error) {
                console.error(error);
                setErrorMessage("Error fetching rental details");
              } finally {
                setIsLoading(false);
              }
            };

            fetchRental();
    }, [placeId]);

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
            setReviewList(data);
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


  useEffect(() => {
    const access_token = localStorage.getItem('access_token');

    const fetchPlaceDetails = async () => {
      try {
        console.log(`https://nominatim.openstreetmap.org/details.php?place_id=${placeId}&format=json`);
        const response = await fetch(`https://nominatim.openstreetmap.org/details.php?place_id=${placeId}&format=json`);
        const data = await response.json();
        setPlaceDetails(data);
      } catch (error) {
        console.error('Error fetching place details:', error);
      }
    };

    const updateAddress = async () => {
      try {
        if (rental && rental.housenumber === null) {
          const placeDetailsResponse = await fetch(`https://nominatim.openstreetmap.org/details.php?place_id=${placeId}&format=json`);
          const data = await placeDetailsResponse.json();
          setPlaceDetails(data);
          window.location.reload();

          const response = await fetch(`${API_URL}/api/v1/rentals/${placeId}/update_address`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${access_token}`,
            },
            body: JSON.stringify({
              rental: {
                housenumber: data.addresstags.housenumber,
                street: data.addresstags.street,
                city: data.addresstags.city,
                postcode: data.addresstags.postcode,
                state: data.addresstags.state,
                country_code: data.country_code.toUpperCase(),
                lon: data.geometry.coordinates[1],
                lat: data.geometry.coordinates[0]
              },
            }),
          });

          if (placeDetailsResponse.ok) {
            console.log('Place details fetched');
          } else {
            console.error('Error updating place details');
          }

          if (response.ok) {
            console.log('Rental updated');
          } else {
            console.error('Error updating rental');
          }
        }
      } catch (error) {
        console.error(error);
        setErrorMessage("Error occured updating rental");
      }
    };
    // updateAddress();
    fetchPlaceDetails().then(updateAddress());
  }, [rental, placeId]);

  useEffect(() => {
    if (placeDetails) {
      setSelectPosition(placeDetails);
    }
  }, [placeDetails]);

  if (!placeDetails) {
    return <p>Loading place details...</p>;
  } else if (isLoading) {
    return <p>Loading...</p>;
  } else if (errorMessage) {
    return <p>{errorMessage}</p>;
  }


const resourceOwnerString = localStorage.getItem('resource_owner');



  return (
    <>
        <section className='slider'>
            <Slider />
        </section>
        <section className='wip-content'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Property house_number={rental.housenumber} road={rental.street} city={rental.city} state={rental.state} postcode={rental.postcode} place_id={placeId} rental_id={rental.id} lord={rental.landlord} rating={overall} location={location} responsiveness={responsiveness} maintenance={maintenance} rent={rent}/>
                    </div>
                    <div className='col-md-8' style={{ position: 'relative'}}>
                        <Map selectPosition={rental}/>
                        <SmallSearchBar/>
                    </div>
                </div>
                <div className='row wip-bottom-row'>
                    <div className='col-md-4'>
                            <p>Other nearby properties</p>
                        <div className='row'>
                          {nearby.length > 0 &&
                            nearby.map((nearby_rental, index) => (
                              <div key={index} className='col-md-12 col-6'>
                                <Nearby image={`/photos/nearby/${index+1}.png`} housenumber={nearby_rental.housenumber} street={nearby_rental.street} place_id={nearby_rental.place_id} />
                            </div>
                            ))}
                        </div>

                    </div>
                    <div className='col-md-8 '>

                        <p>{reviewList.length > 0 ? reviewList.length + " Reviews" : "No reviews yet"}</p>
                        {reviewList.length > 0 &&
                          reviewList.map((review) => (
                            <Review location={review.location} responsiveness={review.responsiveness} maintenance={review.maintenance} rent={review.rent} date={review.created_at} lord={rental.landlord} content={review.content}/>
                          ))}

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Wip
