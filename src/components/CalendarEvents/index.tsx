import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GapiResponse } from '@/components/CalendarEvents/interface';
import { uuid } from '@/constants';
import { setCalendarActions } from '@/store/mainReducer';
import { getCurrentEvents, getCurrentUser } from '@/store/selectors';
import { ActionWrapper, EventsWrapper, TimeWrapper } from '@/styles/styles';

const CalendarEvents = () => {
  const events = useSelector(getCurrentEvents);
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getEvents(calendarId: string, apiKey: string) {
      function initiate() {
        gapi.client
          .init({
            apiKey,
          })
          .then(() => {
            return gapi.client.request({
              path: `${process.env.GOOGLE_CALENDAR_PATH_API}${calendarId}/events`,
            });
          })
          .then((response: GapiResponse) => {
            dispatch(setCalendarActions(response.result.items));
          });
      }
      gapi.load('client', initiate);
    }
    if (user) {
      getEvents(process.env.CALENDAR_ID, process.env.API_KEY);
    }
  }, [user]);

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
