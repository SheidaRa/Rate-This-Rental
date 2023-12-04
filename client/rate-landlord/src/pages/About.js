import React from 'react';
import './CSS/About.css'

const About = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="about-us-section text-center">
            <h2>About Us</h2>
            <p className="lead">
              At Rate Ur Landlord, we believe that every renting experience matters. We provide a platform for renters to share their voices, express their opinions, and rate their landlords.
            </p>
            <p>
              Our mission is to empower tenants by creating a community-driven space where they can openly discuss their renting experiences, highlight the positives, and shed light on any issues they encounter.
            </p>
            <p>
              By sharing these experiences, we aim to promote transparency in the rental market, help renters make informed decisions, and encourage landlords to maintain high standards and accountability.
            </p>
            <p>
              Join us in shaping the future of renting experiences. Your voice matters!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
