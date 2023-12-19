// import React, { useState } from "react";

// const SignInForm = ({ onSignIn }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     onSignIn(email, password);
//   };

//   return (
//     <form id="sign_in_form" onSubmit={handleSignIn}>
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
//       <button type="submit">Sign In</button>
//     </form>
//   );
// };

// export default SignInForm;

import React, { useState } from "react";
import "./signin&up.css"; 

const SignInForm = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <div className='siu-container'>

    <div className="row">
    <div className='col-lg-4 offset-lg-1 col-md-5 siu-container'>
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
      <form id="sign_in_form" onSubmit={handleSignIn} className="signin-form">
      <div className="auth-custom-card p-5">

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="signin-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="signin-input"
        />
        <button type="submit" className="auth-btn w-100 mb-4">Sign In</button>
        </div>
      </form>
      </div>
    </div>
    </div>

  );
};

export default SignInForm;

