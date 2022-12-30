import React from 'react';
import { useSelector } from 'react-redux';

import {
  LogWrapper,
  UserDateWrapper,
  UserTimeWrapper,
  UserWrapper,
} from '@/components/GoogleCalendar/styles';
import { HandleLogin, HandleLogout } from '@/components/GoogleCalendarAuth';
import { currentDate, currentTime, getCurrentUser } from '@/store/selectors';

const GoogleCalendar = () => {
  const user = useSelector(getCurrentUser);
  const time = useSelector(currentTime);
  const date = useSelector(currentDate);
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
