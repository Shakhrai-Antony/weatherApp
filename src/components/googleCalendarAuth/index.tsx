import React from 'react';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLogout,
  UseGoogleLogoutResponse,
} from 'react-google-login';
import { useDispatch } from 'react-redux';

import { setCurrentUser, unSetCurrentUser } from '@/store/mainReducer';

export const clientId =
  '1028937362468-uaploh0b1mhhhcb2dknqjeolp3cvhhme.apps.googleusercontent.com';

export const calendarId = 'manager.laune@gmail.com';

export const API_KEY = 'AIzaSyDRtNos1LeZDRmieJyYYgzS96x-VgZ54to';

export const HandleLogin = () => {
  const dispatch = useDispatch();

  const onSuccess = (res: GoogleLoginResponse) => {
    console.log('Login Success! Current user: ', res.profileObj);
    dispatch(setCurrentUser(res.profileObj.name));
  };

  const onFailure = (res: UseGoogleLogoutResponse) => {
    console.log('Login Failed! res: ', res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar.events.readonly"
        buttonText={'Login'}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
};

export const HandleLogout = () => {
  const dispatch = useDispatch();

  const onSuccess = () => {
    console.log('Log out successful!');
    dispatch(unSetCurrentUser());
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText={'Logout'}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};
