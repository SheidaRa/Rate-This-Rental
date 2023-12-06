import React, {useState} from 'react'
import Slider from '../components/Slider/Slider'
import Property from '../components/Property/Property'
import Nearby from '../components/Nearby/Nearby'
import Review from '../components/Review/Review'
import Map from '../components/Map/Map'
import SmallSearchBar from '../components/SmallSearchBar/SmallSearchBar'

import "../components/Searchbar/SearchBar.css"
import "../components/Searchbar/SearchResultsList.css"
import "../components/Searchbar/SearchResult.css"

const Wip = () => {

    const [selectPosition, setSelectPosition] = useState(null);

  return (
    <>
        <section className='slider'>
            <Slider />
        </section>
        <section className='wip-content'> 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Property address={'1600 Grand Ave.'} city={'St Paul'} state={'MN'} zip={'55105'} loard={'John doe'} rating={'4.5'} location={4} responsiveness={4} maintenance={4} rent={4}/>
                    </div>
                    <div className='col-md-8' style={{ position: 'relative'}}>
                        <Map selectPosition={selectPosition} />
                        <SmallSearchBar selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
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