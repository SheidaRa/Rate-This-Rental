// import React, { useState } from "react";

// const SignUpForm = ({ onSignUp }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     onSignUp(email, password, passwordConfirm);
//   };

//   return (
//     <form id="sign_up_form" onSubmit={handleSignUp}>
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         name="password_confirm"
//         placeholder="Confirm Password"
//         value={passwordConfirm}
//         onChange={(e) => setPasswordConfirm(e.target.value)}
//         required
//       />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;

import React, { useState } from "react";
import './signup.css'

const SignUpForm = ({ onSignUp }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    onSignUp(email, password, passwordConfirm);
  };

  return (
    <div className="custom-container p-4"> {/* Use a custom container class similar to MDBContainer */}
      <div className="custom-row">
        <div className="custom-col-md-6 text-center text-md-start d-flex flex-column justify-content-center">
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            <span className="text-primary">We are a community</span>
          </h1>
          <p className='px-3'>
            We prioritize your privacy. Your reviews will always remain anonymous,
            ensuring your thoughts and feedback are shared confidently.
            Join us today and share your experiences without any worries
            about your identity being revealed.
          </p>
        </div>

        <div className="custom-col-md-6">
          <form id="sign_up_form" onSubmit={handleSignUp} className="my-5">
            <div className="custom-card p-5">
              <div className="custom-row">
                <div className="custom-col-6">
                  <input
                    className="custom-input mb-4"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="custom-col-6">
                  <input
                    className="custom-input mb-4"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <input
                className="custom-input mb-4"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="custom-input mb-4"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                className="custom-input mb-4"
                type="password"
                name="password_confirm"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
              <button type="submit" className="custom-btn w-100 mb-4">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
