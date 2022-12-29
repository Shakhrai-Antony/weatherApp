import React from 'react';
import { useDispatch } from 'react-redux';

import actionTypes from '@/store/constants';
import { WeatherTogglerWrapper } from '@/styles/styles';

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
