import React from 'react';
import { useSelector } from 'react-redux';

import { HandleLogin, HandleLogout } from '@/components/GoogleCalendarAuth';
import {
  getCurrentDate,
  getCurrentTime,
  getCurrentUser,
} from '@/store/selectors';
import {
  LogWrapper,
  UserDateWrapper,
  UserTimeWrapper,
  UserWrapper,
} from '@/styles/styles';

const GoogleCalendar = () => {
  const user = useSelector(getCurrentUser);
  const time = useSelector(getCurrentTime);
  const date = useSelector(getCurrentDate);
  return user ? (
    <LogWrapper>
      <HandleLogout />
      <UserWrapper>{user}</UserWrapper>
      <div>
        <UserDateWrapper>{time}</UserDateWrapper>
        <UserTimeWrapper>{date}</UserTimeWrapper>
      </div>
    </LogWrapper>
  ) : (
    <LogWrapper>
      <HandleLogin />
    </LogWrapper>
  );
};

export default GoogleCalendar;
