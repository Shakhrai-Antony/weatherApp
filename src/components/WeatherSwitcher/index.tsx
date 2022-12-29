import React from 'react';
import { useSelector } from 'react-redux';

import WeatherInDays from '@/components/WeatherInDays';
import WeatherInHours from '@/components/WeatherInHours';
import Preloader from '@/preloader';
import { getPreloader, getWeatherSwitch } from '@/store/selectors';

const WeatherSwitcher = () => {
  const weatherSwitch = useSelector(getWeatherSwitch);
  const preloader = useSelector(getPreloader);
  return (() => {
    if (preloader) return <Preloader />;
    return weatherSwitch ? <WeatherInDays /> : <WeatherInHours />;
  })();
};

export default WeatherSwitcher;
