import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getCurrentGeoLocation from '@/DAL/geoLocation';
import City from '@/components/locationForms';
import { setCity } from '@/store/mainReducer';
import { getCurrentUser, getUserCity } from '@/store/selectors';

const Location = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const city = useSelector(getUserCity);
  const [currentCity, setCurrentCity] = useState(city);

  async function loadLocation() {
    const location = await getCurrentGeoLocation.getLocation();
    dispatch(setCity(location.city));
    setCurrentCity(location.city);
  }

  useEffect(() => {
    if (user) {
      loadLocation();
    }
  }, [user]);

  const handleChangeCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentCity(e.target.value);
  };

  return (
    <div>
      <City handleChange={handleChangeCity} value={currentCity} />
    </div>
  );
};

export default Location;
