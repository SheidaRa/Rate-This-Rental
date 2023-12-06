import React from 'react';
import './CSS/About.css'

const About = () => {
  return (
    <div className="about-us-page">
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Rate the Landlord was created as a tool for tenants to stay informed about housing the same way we stay informed about every other business, through crowd-sourced reviews.
        </p>
        <p>
          We know that tenants are often in the dark when it comes to renting with a new landlord. This conflicts with the standards we hold for every other business and service where reviews allow the consumer to make an informed decision based on reports of quality and conduct.
        </p>
        <p>
          Something as important as housing shouldn't be an exception. Reviewing landlords alongside other businesses will make for a more transparent marketplace. By sharing rental experiences, tenants can help others avoid situations of negligence or mistreatment and find landlords who will uphold best practices and adhere to their local legislation.
        </p>
        <p>
          Share your experiences, read the reviews, and help us keep one another safe, informed, and empowered.
        </p>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>Why are the reviews anonymous?</li>
          <li>How is reviewing landlords fair if you can't review tenants?</li>
          <li>What should I do if I can't review my current landlord but still need help?</li>
          <li>Why does RTL include landlord names?</li>
        </ul>
      </section>

      <section className="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>
          At Rate the Landlord Inc., we are committed to protecting the privacy of those who submit reviews. All submissions made to our website are anonymous. We do not collect any personal data or information that could be used to identify you, such as your name, email address, or phone number.
        </p>
        {/* ... (rest of the Privacy Policy content) */}
      </section>

      {/* Other sections */}
    </div>
  );
};
export default About;
