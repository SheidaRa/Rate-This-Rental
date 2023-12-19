import React from 'react';
import './CSS/Contacts.css'

function Contacts() {
  return (
    <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-shadow">
                <img src="/photos/other/contact.png" className="contact-img" alt=" Letter pockets Image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1 className="font-weight-light mt-2">Write to Us!</h1>
                <p>Comments, Questions, Compliments? Send us an email and we will get back to you as soon a we can!</p>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="name" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="email" placeholder="email address" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input className="form-control" type="text" placeholder="phone" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea className="form-control" rows="3" placeholder="message" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="submit-btn"><span> SUBMIT</span></button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card mt-4 border-0 mb-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4">

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
