import axios, { AxiosResponse } from 'axios';

import { WeatherInHours } from '@/DAL/weatherInHours/interface';

const instance = axios.create({
  baseURL:
    'https://api.weatherapi.com/v1/forecast.json?key=113125d86b6a4981af971806220912&q=',
});

const getWeatherInHours = {
  currentWeather(city: string) {
    return instance
      .get(`${city}&days=1&aqi=no&alerts=no`)
      .then((response: AxiosResponse<WeatherInHours>) => response.data);
  },
};

export default getWeatherInHours;
