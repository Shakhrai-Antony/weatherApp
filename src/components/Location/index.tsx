import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getCurrentDateAndTime from '@/DAL/dateAndTime';
import getCurrentGeoLocation from '@/DAL/geoLocation';
import City from '@/components/LocationForms';
import { setCity, setDate, setTime } from '@/store/mainReducer';
import {
  getCurrentUser,
  getUserCity,
  getWeatherInDaysError,
  getWeatherInHoursError,
} from '@/store/selectors';
import { ErrorWrapper } from '@/styles/styles';

const Location = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const city = useSelector(getUserCity);
  const weatherByDaysError = useSelector(getWeatherInDaysError);
  const weatherByHoursError = useSelector(getWeatherInHoursError);
  const [currentCity, setCurrentCity] = useState(city);

  useEffect(() => {
    async function loadLocation() {
      const location = await getCurrentGeoLocation.getLocation();
      const { city } = location;
      dispatch(setCity(city));
      setCurrentCity(city);
      const currentDate = await getCurrentDateAndTime.getDate(city);
      dispatch(setTime(currentDate.time));
      dispatch(setDate(currentDate.date_time_txt));
    }
    if (user) {
      loadLocation();
    }
  }, [user]);

  const handleChangeCity = (e: string) => {
    setCurrentCity(e);
  };

  return (
    <div>
      <City handleChange={handleChangeCity} value={currentCity} />
      {weatherByDaysError ? (
        <ErrorWrapper>{weatherByDaysError}</ErrorWrapper>
      ) : null}
      {weatherByHoursError ? (
        <ErrorWrapper>{weatherByHoursError}</ErrorWrapper>
      ) : null}
    </div>
  );
};

export default Location;