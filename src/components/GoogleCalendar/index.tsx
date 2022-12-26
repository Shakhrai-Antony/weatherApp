import React from 'react';
import { useSelector } from 'react-redux';

import { HandleLogin, HandleLogout } from '@/components/GoogleCalendarAuth';
import {
  getCurrentDate,
  getCurrentTime,
  getCurrentUser,
} from '@/store/selectors';
import { LogWrapper } from '@/styles/styles';

const GoogleCalendar = () => {
  const user = useSelector(getCurrentUser);
  const time = useSelector(getCurrentTime);
  const date = useSelector(getCurrentDate);
  return user ? (
    <LogWrapper>
      <HandleLogout />
      <p>{user}</p>
      <div>
        <p>{time}</p>
        <p>{date}</p>
      </div>
    </LogWrapper>
  ) : (
    <LogWrapper>
      <HandleLogin />
    </LogWrapper>
  );
};

export default GoogleCalendar;
