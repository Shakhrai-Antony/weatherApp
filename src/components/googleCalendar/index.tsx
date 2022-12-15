import React from 'react';
import { useSelector } from 'react-redux';

import { HandleLogin, HandleLogout } from '@/components/googleCalendarAuth';
import { getCurrentUser } from '@/store/selectors';
import { LogWrapper } from '@/styles/styles';

const GoogleCalendar = () => {
  const user = useSelector(getCurrentUser);
  return (
    <LogWrapper>
      <HandleLogin />
      <HandleLogout />
      <p>{user}</p>
    </LogWrapper>
  );
};

export default GoogleCalendar;
