import React from 'react';
import { useDispatch } from 'react-redux';

import { WeatherTogglerWrapper } from '@/styles/styles';

const WeatherToggler = () => {
  const dispatch = useDispatch();

  const showWeatherInDays = () => {
    dispatch({ type: 'LOAD_WEATHER_IN_DAYS' });
  };

  const showWeatherInHours = () => {
    dispatch({ type: 'LOAD_WEATHER_IN_HOURS' });
  };

  return (
    <WeatherTogglerWrapper>
      <div>
        <button type="button" onClick={showWeatherInDays}>
          weather in days
        </button>
      </div>
      <div>
        <button type="button" onClick={showWeatherInHours}>
          weather in hours
        </button>
      </div>
    </WeatherTogglerWrapper>
  );
};

export default WeatherToggler;
