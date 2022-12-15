import axios, { AxiosResponse } from 'axios';

import { lastDayDate, todayDate } from '@/constants';

export interface WeatherInDays {
  address: string;
  alerts: Array<[]>;
  currentConditions: object;
  description: string;
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  stations: object;
  timezone: string;
  tzoffset: number;
  days: Array<[]>;
}

const instance = axios.create({
  baseURL:
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
});

const getWeatherInDays = {
  currentWeather(city: string) {
    return instance
      .get(
        `${city}/${todayDate}/${lastDayDate}?unitGroup=metric&key=H2AP2EYJXWK4SHTHCFR9H42BB&contentType=json`,
      )
      .then((response: AxiosResponse<WeatherInDays>) => response.data);
  },
};
export default getWeatherInDays;
