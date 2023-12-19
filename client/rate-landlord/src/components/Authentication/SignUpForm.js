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
  const [name, setName] = useState('');
  // const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    onSignUp(name, email, password, passwordConfirm);
  };

  return (
    <div className='siu-container'>

    <div className="row">
    <div className='col-lg-4 offset-lg-1 col-md-5 '>
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

        <div className='col-lg-4 offset-lg-2 col-md-5 offset-md-2'>
          <form id="sign_up_form" onSubmit={handleSignUp} className="my-5">
            <div className="auth-custom-card p-5">
                  <input
                    className="auth-custom-input mb-4"
                    type="text"
                    name="name"
                    placeholder="Name (Optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
              <button type="submit" className="auth-btn w-100 mb-4">Sign Up</button>
            </div>
          </form>
        </div>
        </div>
        </div>

  );
};

export default SignUpForm;
