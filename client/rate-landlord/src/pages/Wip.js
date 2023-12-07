import React, { useEffect, useState} from 'react'
import Slider from '../components/Slider/Slider'
import Property from '../components/Property/Property'
import Nearby from '../components/Nearby/Nearby'
import Review from '../components/Review/Review'
import Map from '../components/Map/Map'
import SmallSearchBar from '../components/SmallSearchBar/SmallSearchBar'
import { useParams } from 'react-router-dom';

import "../components/Searchbar/SearchBar.css"
import "../components/Searchbar/SearchResultsList.css"
import "../components/Searchbar/SearchResult.css"

const Wip = () => {

    const { id } = useParams();

    const [selectPosition, setSelectPosition] = useState(null);
    const placeId = id.toString();
    const [placeDetails, setPlaceDetails] = useState(null);

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

      if (!placeDetails) {
        return <p>Loading place details...</p>;
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
                        <Property house_number={placeDetails.addresstags.housenumber} road={placeDetails.addresstags.street} city={placeDetails.addresstags.city} state={placeDetails.addresstags.state} postcode={placeDetails.addresstags.postcode} loard={'John doe'} rating={'4.5'} location={4} responsiveness={4} maintenance={4} rent={4}/>
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
                        
                        <p>14 Reviews</p>
                        <Review location={4} responsiveness={4} maintenance={3} rent={3} date={"12/02/2023"} lord={"John doe"} text={'Rate Your Landlord values your privacy, offering the option to submit reviews anonymously, ensuring you can candidly share your experiences without revealing your identity. Your voice, your choice. Rate Your Landlord values your privacy, offering the option to submit reviews anonymously, ensuring you can candidly share your experiences without revealing your identity. Your voice, your...See more...'}/>
                        <Review location={4} responsiveness={4} maintenance={3} rent={4} date={"11/02/2023"} lord={"John doe"} text={'Rate Your Landlord values your privacy, offering the option to submit reviews anonymously, ensuring you can candidly share your experiences Without revealing your identity. Your voice, your choice. Rate Your Landlord values your privacy, offering the option to submit reviews anonymously, ensuring you can candidly share your experiences without revealing your identity. Your voice, your Rate Your Landlord values your privacy, offering the option to submit reviews anonymously, ensuring you can candidly share your experiences without revealing your identity. Your voice, your choice. Rate Your Landlord values your privacy, offering the option to submit reviews anonymously, ensuring you can candidly share your experiences Rate Your Landlord values your privacy, offering the option to submit reviews anonymously, ndlord values your privacy, offering the option to submit reviews anonymously, ensuring you can candidly share your experiences ...See more...'}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Wip