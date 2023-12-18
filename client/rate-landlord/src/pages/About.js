import React from "react";
import "./CSS/About.css";

const About = () => {
  return (
    <div className="about-us-page">
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Rate Your Landlord was created as a tool for tenants to stay informed
          about housing the same way we stay informed about every other
          business, through crowd-sourced reviews.
        </p>
        <p>
          We know that tenants are often in the dark when it comes to renting
          with a new landlord. This conflicts with the standards we hold for
          every other business and service where reviews allow the consumer to
          make an informed decision based on reports of quality and conduct.
        </p>
        <p>
          Something as important as housing shouldn't be an exception. Reviewing
          landlords alongside other businesses will make for a more transparent
          marketplace. By sharing rental experiences, tenants can help others
          avoid situations of negligence or mistreatment and find landlords who
          will uphold best practices and adhere to their local legislation.
        </p>
        <p>
          Share your experiences, read the reviews, and help us keep one another
          safe, informed, and empowered.
        </p>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <strong>Why are the reviews anonymous?</strong>
            <p>
              Reviews are kept anonymous to ensure honest feedback without fear
              of repercussion. It encourages transparency and helps in providing
              genuine experiences.
            </p>
          </li>
          <li>
            <strong>
              How is reviewing landlords fair if you can't review tenants?
            </strong>
            <p>
              Landlord reviews aim to create accountability and transparency in
              the renting process. However, tenant privacy is equally important,
              and their information is protected.
            </p>
          </li>
          <li>
            <strong>Why does we include landlord names?</strong>
            <p>
              Including landlord names helps in fostering accountability and
              clarity in reviews. It ensures accurate feedback and aids in
              creating a reliable platform for both landlords and tenants.
            </p>
          </li>
        </ul>
      </section>

      <section className="privacy-policy">
        <h2>Privacy Policy</h2>
        <p>
          At Rate Your Landlord we are committed to protecting the privacy
          of those who submit reviews. All submissions made to our website are
          anonymous. We do not collect any personal data or information that
          could be used to identify you, such as your name, email address, or
          phone number.
        </p>
      </section>

      {/* Other sections */}
    </div>
  );
};
export default About;
