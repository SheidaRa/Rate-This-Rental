import React from 'react'
import SearchBar from '../components/Searchbar/SearchBar';
import {SearchResultsList} from '../components/Searchbar/SearchResultsList';
import { useState } from "react";
import InfoCard from '../components/Cards/InfoCard';

import "../components/Searchbar/SearchBar.css"
import "../components/Searchbar/SearchResultsList.css"
import "../components/Searchbar/SearchResult.css"
import "./CSS/Home.css"



const Home = () => {

  const [results, setResults] = useState([]);

  return (
    <>
    <section className='home-search'>
    <div className='container'>
    <SearchBar />
    </div>
  </section>

  <section className="seperator"></section>
  <section className='introduction'>

    <div className='container'>
    <div className='home-container'>

      <div className='row'>
        <div className='col-md-12'>
          <h2>Why are we here ?</h2>
        </div>
      </div>
      <div className='row'>
      <div className='why-container'>
        
        <div className='col-md-4 offset-md-1'>
          <InfoCard title={'Renters Impowerment'} info={'We believe in the power of community. Your reviews and ratings help renters make informed choices and encourage landlords to excel in their service. Together, we are creating a transparent  environment that strengthens our community.'} image={'/photos/icons/why1.png'} altText={'Solidarity Figure'}/>
        </div>
        
        <div className='col-md-4 offset-md-2'>
        <InfoCard title={'Stay Annonymous'} info={'Rate Your Landlord values your privacy, offering the option to submit reviews anonymously, ensuring you can candidly share your experiences without revealing your identity. Your voice, your choice.'} image={'/photos/icons/why2.png'} altText={'Stay Annonymous Figure'}/>
        </div>

        {/* <div className='col-md-3 offset-md-1'>
        <InfoCard title={'Flexabilty'} info={'You dont Need to sign up to be part of the comunity! If you dont feel comftable with signing up just submit a review as a guest!'} image={'/photos/icons/why3.png'} />

        </div> */}
        
      </div>
      </div>

      <div className='row'>
        <div class="col-md-10 offset-md-1 sign-up-text">
          <p>Sign up to save your searches, and reviews and interact with others in the community!</p>
        </div>
      </div>

      <div className='row'>
        <div class="col-md-12">
          <button type="button" class="rtr-btn">Sign Up !</button>
        </div>
      </div>
      

    </div>
    </div>

  </section>

  <section className="seperator"></section>
  </>
  )


}

export default Home