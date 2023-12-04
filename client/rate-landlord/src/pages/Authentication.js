// import React, { useState, useEffect } from 'react';
// import SignInForm from '../components/Authentication/SignInForm';
// import SignUpForm from '../components/Authentication/SignUpForm';
// import SignOutButton from '../components/Authentication/SignOutButton';

// const API_URL = "http://localhost:3001/users/tokens";

// const Authentication = () => {
//   const [access_token, setAccessToken] = useState(null);
//   const [refresh_token, setRefreshToken] = useState(localStorage.getItem('refresh_token') || null);
//   const [resource_owner, setResourceOwner] = useState(null);

//   useEffect(() => {
//     userSession();
//   }, []);

//   const nullOrUndefined = (itemToCheck) => {
//     return itemToCheck == null || itemToCheck === 'undefined';
//   };

//   const handleAuthResponse = async (response) => {
//     const data = await response.json();
//     localStorage.setItem('resource_owner', JSON.stringify(data.resource_owner));
//     localStorage.setItem('refresh_token', data.refresh_token);
//     setAccessToken(data.token);
//     setRefreshToken(data.refresh_token);
//     setResourceOwner(data.resource_owner);
//   };

//   const signUp = async (email, password, passwordConfirm) => {
//     if (password !== passwordConfirm) {
//       alert('Passwords do not match');
//       return;
//     }

//     const response = await fetch(`${API_URL}/sign_up`, {
//       method: 'POST',
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     await handleAuthResponse(response);
//     userSession();
//   };

//   const signIn = async (email, password) => {
//     const response = await fetch(`${API_URL}/sign_in`, {
//       method: 'POST',
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     await handleAuthResponse(response);
//     userSession();
//   };

//   const signOut = () => {
//     console.log('Logging out');
//     resetTokens();
//     userSession();
//   };

//   const resetTokens = () => {
//     localStorage.removeItem('refresh_token');
//     localStorage.removeItem('resource_owner');
//     setAccessToken(null);
//     setRefreshToken(null);
//     setResourceOwner(null);
//   };

//   const requestNewAccessToken = async () => {
//     if (nullOrUndefined(refresh_token) || access_token) {
//       return;
//     }

//     try {
//       const response = await fetch(`${API_URL}/refresh`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${refresh_token}`,
//         },
//       });

//       handleAuthResponse(response);
//     } catch (err) {
//       console.log('Error refreshing token: ', err);
//       resetTokens();
//       userSession();
//     }
//   };

//   const userSession = async () => {
//     await requestNewAccessToken();
//   };

//   const userCanAccess = async () => {
//     if (nullOrUndefined(access_token)) {
//       return;
//     }

//     const response = await fetch('http://localhost:3001/pages/restricted', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${access_token}`,
//       },
//     });

//     const data = await response.json();

//     console.log('%c' + data.message, 'color: cyan');

//     if (data.error) {
//       console.log('Error: ', data.error);
//       resetTokens();
//       userSession();
//     }
//   };

//   return (
//     <div>
//       {resource_owner ? (
//         <div>
//           <p id="user">{resource_owner.email}</p>
//           <button onClick={userCanAccess}>Check Access</button>
//           <SignOutButton onSignOut={signOut} />
//         </div>
//       ) : (
//         <div>
//           <SignUpForm onSignUp={signUp} />
//           <SignInForm onSignIn={signIn} />
//           <SignOutButton onSignOut={signOut} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Authentication;
import React, { useState, useEffect } from 'react';
import SignInForm from '../components/Authentication/SignInForm';
import SignUpForm from '../components/Authentication/SignUpForm';
import SignOutButton from '../components/Authentication/SignOutButton';

const API_URL = "http://localhost:3001/users/tokens";

const Authentication = () => {
  const [access_token, setAccessToken] = useState(null);
  const [refresh_token, setRefreshToken] = useState(localStorage.getItem('refresh_token') || null);
  const [resource_owner, setResourceOwner] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false); // New state variable to track whether the user is signing up

  useEffect(() => {
    userSession();
  }, []);

  const nullOrUndefined = (itemToCheck) => {
    return itemToCheck == null || itemToCheck === 'undefined';
  };

  const handleAuthResponse = async (response) => {
    const data = await response.json();
    localStorage.setItem('resource_owner', JSON.stringify(data.resource_owner));
    localStorage.setItem('refresh_token', data.refresh_token);
    setAccessToken(data.token);
    setRefreshToken(data.refresh_token);
    setResourceOwner(data.resource_owner);
  };

  const signUp = async (email, password, passwordConfirm) => {
    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    const response = await fetch(`${API_URL}/sign_up`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    await handleAuthResponse(response);
    userSession();
  };

  const signIn = async (email, password) => {
    const response = await fetch(`${API_URL}/sign_in`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    await handleAuthResponse(response);
    userSession();
  };

  const signOut = () => {
    console.log('Logging out');
    resetTokens();
    userSession();
  };

  const resetTokens = () => {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('resource_owner');
    setAccessToken(null);
    setRefreshToken(null);
    setResourceOwner(null);
  };

  const requestNewAccessToken = async () => {
    if (nullOrUndefined(refresh_token) || access_token) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${refresh_token}`,
        },
      });

      handleAuthResponse(response);
    } catch (err) {
      console.log('Error refreshing token: ', err);
      resetTokens();
      userSession();
    }
  };

  const userSession = async () => {
    await requestNewAccessToken();
  };

  const userCanAccess = async () => {
    if (nullOrUndefined(access_token)) {
      return;
    }

    const response = await fetch('http://localhost:3001/pages/restricted', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access_token}`,
      },
    });

    const data = await response.json();

    console.log('%c' + data.message, 'color: cyan');

    if (data.error) {
      console.log('Error: ', data.error);
      resetTokens();
      userSession();
    }
  };

  const handleSwitchForm = () => {
    setIsSigningUp(!isSigningUp); // Toggle between sign-in and sign-up forms
  };

  return (
    <div>
      {resource_owner ? (
        <div>
          <p id="user">{resource_owner.email}</p>
          <button onClick={userCanAccess}>Check Access</button>
          <SignOutButton onSignOut={signOut} />
        </div>
      ) : (
        <div>
          {isSigningUp ? (
            <SignUpForm onSignUp={signUp} />
          ) : (
            <SignInForm onSignIn={signIn} />
          )}
          <p>
            {isSigningUp
              ? "Already have an account?"
              : "Don't have an account?"}
            <button onClick={handleSwitchForm}>
              {isSigningUp ? "Sign In" : "Sign Up"}
            </button>
          </p>
          <SignOutButton onSignOut={signOut} />
        </div>
      )}
    </div>
  );
};

export default Authentication;