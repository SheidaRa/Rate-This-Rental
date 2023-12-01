import React from 'react'
import Slider from '../components/Slider/Slider'
import Property from '../components/Property/Property'
import Nearby from '../components/Nearby/Nearby'

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
                        <Nearby image={""} address={'1513 Grand Ave.'} rating={4} reviews={23} />
                    </div>
                    <div className='col-lg-7 offset-lg-1'>
                        <p>b</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Wip