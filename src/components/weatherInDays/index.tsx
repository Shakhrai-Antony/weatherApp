import React from 'react';
import { useSelector } from 'react-redux';

import { uuid } from '@/constants';
import {
  getTemperatureForSevenDays,
  getWeatherForSevenDates,
  getWeatherIconsForSevenDays,
} from '@/store/selectors';
import {
  DatesWrapper,
  TemperatureWrapper,
  WeatherIconsWrapper,
  WeatherImg,
  WeatherWrapper,
} from '@/styles/styles';

const WeatherInDays = () => {
  const dates = useSelector(getWeatherForSevenDates);
  const icons = useSelector(getWeatherIconsForSevenDays);
  const temperature = useSelector(getTemperatureForSevenDays);

  return (
    <WeatherWrapper>
      <DatesWrapper id="weekDates">
        {dates.map((item) => (
          <div key={uuid()}>{item}</div>
        ))}
      </DatesWrapper>
      <WeatherIconsWrapper id="weekIcons">
        {icons.map((item) => (
          <WeatherImg key={uuid()} icon={item} />
        ))}
      </WeatherIconsWrapper>
      <TemperatureWrapper id="weekTemperature">
        {temperature.map((item) => (
          <div key={uuid()}>{item}C</div>
        ))}
      </TemperatureWrapper>
    </WeatherWrapper>
  );
};

export default WeatherInDays;
