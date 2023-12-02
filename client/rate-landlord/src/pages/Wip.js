import React from 'react'
import Slider from '../components/Slider/Slider'
import Property from '../components/Property/Property'
import Nearby from '../components/Nearby/Nearby'
import Review from '../components/Review/Review'
import Map from '../components/Map/Map'

const Wip = () => {
  return (
    <>
        <section className='slider'>
            <Slider />
        </section>
        <section className='wip-content'> 
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <Property address={'1600 Grand Ave.'} city={'St Paul'} state={'MN'} zip={'55105'} loard={'John doe'} rating={'4.5'} location={4} responsiveness={4} maintenance={4} rent={4}/>
                        <div className='row'>
                            <p>Other nearby properties</p>
                        </div>
                        <Nearby image={"/photos/nearby/1.png"} address={'1513 Grand Ave.'} rating={4} reviews={23} />
                        <Nearby image={"/photos/nearby/2.png"} address={'1513 Grand Ave.'} rating={4} reviews={23} />
                        <Nearby image={"/photos/nearby/3.png"} address={'1513 Grand Ave.'} rating={4} reviews={23} />
                        <Nearby image={"/photos/nearby/4.png"} address={'1513 Grand Ave.'} rating={4} reviews={23} />
                    </div>
                    <div className='col-lg-7 offset-lg-1'>
                        <Map />
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