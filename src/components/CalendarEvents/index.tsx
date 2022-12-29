import React from 'react';
import { useSelector } from 'react-redux';

import useCalendarEvents from '@/components/Hooks/useCalendarEvents';
import { uuid } from '@/constants';
import { currentEvents } from '@/store/selectors';
import { ActionWrapper, EventsWrapper, TimeWrapper } from '@/styles/styles';

const CalendarEvents = () => {
  const events = useSelector(currentEvents);

  useCalendarEvents();

  return (
    <div>
      {events.map((item) => (
        <EventsWrapper key={uuid()}>
          <TimeWrapper>{item[0]}</TimeWrapper>
          <ActionWrapper>{item[1]}</ActionWrapper>
        </EventsWrapper>
      ))}
    </div>
  );
};

export default CalendarEvents;
