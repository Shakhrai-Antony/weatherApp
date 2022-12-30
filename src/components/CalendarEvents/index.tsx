import React from 'react';
import { useSelector } from 'react-redux';

import {
  ActionWrapper,
  EventsWrapper,
  TimeWrapper,
} from '@/components/CalendarEvents/styles';
import useCalendarEvents from '@/components/Hooks/useCalendarEvents';
import { uuid } from '@/constants';
import { currentEvents } from '@/store/selectors';

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
