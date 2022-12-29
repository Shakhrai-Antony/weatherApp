import { gapi } from 'gapi-script';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GapiResponse } from '@/components/CalendarEvents/interface';
import { setCalendarActions } from '@/store/mainReducer';
import { getCurrentUser } from '@/store/selectors';

const useCalendarEvents = () => {
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
};

export default useCalendarEvents;
