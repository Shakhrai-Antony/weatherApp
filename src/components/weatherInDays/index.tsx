import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getIconsForWeatherInHours,
  getTemperatureForSevenDays,
  getWeatherForSevenDates,
  getWeatherHours,
  getWeatherIconsForSevenDays,
  getWeatherTemperatureInHours,
} from '@/store/selectors';
import {
  DatesWrapper,
  TemperatureWrapper,
  WeatherIconsWrapper,
  WeatherImg,
  WeatherWrapper,
} from '@/styles/styles';

const Weather = () => {
  const dates = useSelector(getWeatherForSevenDates);
  const icons = useSelector(getWeatherIconsForSevenDays);
  const temperature = useSelector(getTemperatureForSevenDays);
  const hours = useSelector(getWeatherHours);
  const tempInHours = useSelector(getWeatherTemperatureInHours);
  const iconsForHours = useSelector(getIconsForWeatherInHours);

  return (
    <WeatherWrapper>
      <DatesWrapper>
        {dates.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </DatesWrapper>
      <WeatherIconsWrapper>
        {icons.map((item, index) => (
          <WeatherImg key={index} icon={item}></WeatherImg>
        ))}
      </WeatherIconsWrapper>
      <TemperatureWrapper>
        {temperature.map((item, index) => (
          <div key={index}>{item}C</div>
        ))}
      </TemperatureWrapper>
    </WeatherWrapper>
  );
};

export default Weather;
