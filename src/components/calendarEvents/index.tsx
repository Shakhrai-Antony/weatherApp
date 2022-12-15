import { gapi } from 'gapi-script';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { API_KEY, calendarId } from '@/components/googleCalendarAuth';
import { uuid } from '@/constants';
import { setCalendarActions } from '@/store/mainReducer';
import { getCurrentEvents, getCurrentUser } from '@/store/selectors';
import { ActionWrapper, EventsWrapper, TimeWrapper } from '@/styles/styles';

interface GapiResponse {
  body: string;
  headers: object;
  result: any;
  status: number;
  statusText: null;
}

const CalendarEvents = () => {
  const events = useSelector(getCurrentEvents);
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();

  const getEvents = (calendarId: string, apiKey: string) => {
    function initiate() {
      gapi.client
        .init({
          apiKey,
        })
        .then(() => {
          return gapi.client.request({
            path: `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
          });
        })
        .then((response: GapiResponse) => {
          dispatch(setCalendarActions(response.result.items));
        });
    }
    gapi.load('client', initiate);
  };

  useEffect(() => {
    if (user) {
      getEvents(calendarId, API_KEY);
    }
  }, [user]);

  return (
    <div>
      {events.map((item: Array<[]>) => (
        <EventsWrapper key={uuid()}>
          <TimeWrapper>{item[0]}</TimeWrapper>
          <ActionWrapper>{item[1]}</ActionWrapper>
        </EventsWrapper>
      ))}
    </div>
  );
};

export default CalendarEvents;
