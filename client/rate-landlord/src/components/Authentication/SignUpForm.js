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
import './signin&up.css'

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
      <div className="auth-row">
      <div className='col-md-4 offset-md-1'>
          <h1 >
            We are a community
          </h1>
          <p className='auth-p'>
            We prioritize your privacy. Your reviews will always remain anonymous,
            ensuring your thoughts and feedback are shared confidently.
            Join us today and share your experiences without any worries
            about your identity being revealed.
          </p>
        </div>

        <div className='auth-col-md-4 offset-md-2'>
          <form id="sign_up_form" onSubmit={handleSignUp} className="my-5">
            <div className="auth-custom-card p-5">
                  <input
                    className="auth-custom-input mb-4"
                    type="text"
                    name="firstName"
                    placeholder="Name (Optional)"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
              <input
                className="auth-custom-input mb-4"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="auth-custom-input mb-4"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <input
                className="auth-custom-input mb-4"
                type="password"
                name="password_confirm"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
              <button type="submit" className="signup-btn w-100 mb-4">Sign Up</button>
            </div>
          </form>
        </div>
        </div>
  );
};

export default SignUpForm;
