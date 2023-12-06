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
import "./signin.css"; 

const SignInForm = ({ onSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();
    onSignIn(email, password);
  };

  return (
    <div className="auth-row">
      <div className='auth-col-md-4 offset-md-1'>
      <h1 >
        
        We are a community
          </h1>
        <p className='auth-p-3'>
          We prioritize your privacy. Your reviews will always remain anonymous,
          ensuring your thoughts and feedback are shared confidently.
          Join us today and share your experiences without any worries
          about your identity being revealed.
        </p>
      </div>
      <div className='auth-col-md-4 offset-md-2'>
        <div className="signin-container"> {}
    
      <form id="sign_in_form" onSubmit={handleSignIn} className="signin-form">
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
        <button type="submit" className="signin-btn">Sign In</button>
      </form>
      </div>
    </div>
  </div>
  );
};

export default SignInForm;

