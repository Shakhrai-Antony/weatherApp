import axios, { AxiosResponse } from 'axios';

import { WeatherInHours } from '@/DAL/weatherInHours/interface';

const instance = axios.create({
  baseURL: `https://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_IN_HOURS_KEY}&q=`,
});

const getWeatherInHours = {
  currentWeather(city: string) {
    return instance
      .get(`${city}&days=1&aqi=no&alerts=no`)
      .then((response: AxiosResponse<WeatherInHours>) => response.data);
  },
};

export default getWeatherInHours;
