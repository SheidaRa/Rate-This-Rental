import React from "react";

const SignOutButton = ({ onSignOut }) => {
  return (
    <button id="sign_out" onClick={onSignOut}>
      Sign Out
    </button>
  );
};

export default SignOutButton;
