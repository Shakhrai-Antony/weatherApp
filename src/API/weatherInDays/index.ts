import axios, { AxiosResponse } from 'axios';

import { WeatherInDays } from '@/API/weatherInDays/interface';
import { lastDayDate, todayDate } from '@/constants';

const instance = axios.create({
  baseURL:
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
});

const getWeatherInDays = {
  currentWeather(city: string) {
    return instance
      .get(
        `${city}/${todayDate}/${lastDayDate}?unitGroup=metric&key=${process.env.WEATHER_IN_DAYS_KEY}&contentType=json`,
      )
      .then((response: AxiosResponse<WeatherInDays>) => response.data);
  },
};
export default getWeatherInDays;
