import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInForm from '../components/Authentication/SignInForm';
import SignUpForm from '../components/Authentication/SignUpForm';
import SignOutButton from '../components/Authentication/SignOutButton';
import './CSS/Authentication.css'

const API_URL = "http://localhost:3001";

const Authentication = () => {
  const [access_token, setAccessToken] = useState(null);
  const [refresh_token, setRefreshToken] = useState(localStorage.getItem('refresh_token') || null);
  const [resource_owner, setResourceOwner] = useState(null);
  const [profile_name, setProfileName] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false); // New state variable to track whether the user is signing up
  const navigate = useNavigate();
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
    localStorage.setItem('access_token', data.token);
    setAccessToken(data.token);
    setRefreshToken(data.refresh_token);
    setResourceOwner(data.resource_owner);
  };

  const handleProfileResponse = async (response) => {
    const data = await response.json();
    localStorage.setItem('profile_name', JSON.stringify(data.name));
    setProfileName(data.name);
  }

  const handleProfileCreate = async (name) => {
    const access_token = localStorage.getItem('access_token')
    const profile = await fetch(`${API_URL}/api/v1/profiles`, {
      method: 'POST',
      body: JSON.stringify({
        name
      }),
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${access_token}`
        },
    });

    await handleProfileResponse(profile);
  }

  const signUp = async (name, email, password, passwordConfirm) => {
    if (password !== passwordConfirm) {
      alert('Passwords do not match');
      return;
    }

    const response = await fetch(`${API_URL}/users/tokens/sign_up`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    // if (name !== "") {
      await handleAuthResponse(response)
      await userSession()
      await handleProfileCreate(name);
      navigate(`/`)
    // } else {
    //   await handleAuthResponse(response);
    //   userSession();
    // }


    // if (name !== null) {
    //   const profile = await fetch(`${API_URL}/api/v1/profiles`, {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       name
    //     }),
    //     headers: {
    //        'Content-Type': 'application/json',
    //        Authorization: `Bearer ${access_token}`
    //       },
    //   });

    //   await handleProfileResponse(profile);
    // }

  };

  const signIn = async (email, password) => {
    const response = await fetch(`${API_URL}/users/tokens/sign_in`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    await handleAuthResponse(response);
    userSession();
    navigate(`/`)
  };

  const signOut = () => {
    console.log('Logging out');
    resetTokens();
    userSession();
    navigate(`/`)
  };

  const resetTokens = () => {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('resource_owner');
    localStorage.removeItem('access_token');
    localStorage.removeItem('profile_name');
    setAccessToken(null);
    setRefreshToken(null);
    setResourceOwner(null);
    setProfileName(null);
  };

  const requestNewAccessToken = async () => {
    if (nullOrUndefined(refresh_token) || access_token) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/users/tokens/refresh`, {
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

    // const profile = await fetch(`${API_URL}/api/v1/profiles`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     name: "Quang",
    //   }),
    //   headers: {
    //      'Content-Type': 'application/json',
    //      Authorization: `Bearer ${access_token}`
    //     },
    // });

    // await handleProfileResponse(profile);

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
    <div className='container'>
      {resource_owner ? (
        <div>
          <p id="user">{resource_owner.email}</p>
          <button onClick={userCanAccess}>Check Access</button>
          <SignOutButton onSignOut={signOut} />
        </div>
      ) : (
        <div className='authentication-wrapper'>
          <div>
            {isSigningUp ? (
              <SignUpForm onSignUp={signUp} />
            ) : (
              <SignInForm onSignIn={signIn} />
            )}
            <div className='col-lg-4 offset-lg-7 col-md-5 offset-md-7'>
              <div className="sign-inup-contianer">
              <p className="sign-inup-section">
                {isSigningUp
                  ? "Already have an account?"
                  : "Don't have an account?"}
                <button onClick={handleSwitchForm}>
                  {isSigningUp ? "Sign In" : "Sign Up"}
                </button>
              </p>
              </div>
            </div>

            
        </div>
      </div>
      )}
    </div>
  );
};

export default Authentication;
