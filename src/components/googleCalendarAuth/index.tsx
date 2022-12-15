import React from 'react';
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLogout,
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
    dispatch(setCurrentUser(res.profileObj.name));
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/calendar.events.readonly"
        buttonText="Login"
        onSuccess={onSuccess}
        cookiePolicy="single_host_origin"
        isSignedIn
      />
    </div>
  );
};

export const HandleLogout = () => {
  const dispatch = useDispatch();

  const onSuccess = () => {
    dispatch(unSetCurrentUser());
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
};
