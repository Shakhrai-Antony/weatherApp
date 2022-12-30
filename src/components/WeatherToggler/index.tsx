import React from 'react';
import { useDispatch } from 'react-redux';

import { WeatherTogglerWrapper } from '@/components/WeatherToggler/styles';
import actionTypes from '@/store/constants';

const WeatherToggler = () => {
  const dispatch = useDispatch();

  const showWeatherInDays = () => {
    dispatch({ type: actionTypes.loadWeatherInDays });
  };

  const showWeatherInHours = () => {
    dispatch({ type: actionTypes.loadWeatherInHours });
  };

  return (
    <WeatherTogglerWrapper>
      <div>
        <button type="button" id="weather_in_days" onClick={showWeatherInDays}>
          weather in days
        </button>
      </div>
      <div>
        <button
          type="button"
          id="weather_in_hours"
          onClick={showWeatherInHours}
        >
          weather in hours
        </button>
      </div>
    </WeatherTogglerWrapper>
  );
};

export default WeatherToggler;
