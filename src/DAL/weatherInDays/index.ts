import axios from 'axios';

import { lastDayDate, todayDate } from '@/constants';

const instance = axios.create({
  baseURL:
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
});

export const getWeatherInDays = {
  currentWeather(city: string) {
    return instance
      .get(
        `${city}/${todayDate}/${lastDayDate}?unitGroup=metric&key=H2AP2EYJXWK4SHTHCFR9H42BB&contentType=json`,
      )
      .then((response) => {
        return response.data;
      });
  },
};
