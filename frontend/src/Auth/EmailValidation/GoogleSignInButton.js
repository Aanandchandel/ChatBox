import React from 'react';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
  // Here you can access the user's email in response.profileObj.email
  const email = response.profileObj.email;
  // Now you can perform validation or other actions with the email
};

const GoogleSignInButton = () => {
  return (
    <div>
      <GoogleLogin
        clientId="YOUR_CLIENT_ID.apps.googleusercontent.com"
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleSignInButton;
