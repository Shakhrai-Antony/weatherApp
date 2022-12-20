import axios, { AxiosResponse } from 'axios';

import { IDateTime } from '@/DAL/dateAndTime/interface';

const instance = axios.create({
  baseURL: 'https://timezoneapi.io/api/timezone/?Europe/',
});

const getCurrentDateAndTime = {
  getDate(city: string) {
    return instance
      .get(`${city}&token=aihUjYafZzFMYbqxHmJH`)
      .then(
        (response: AxiosResponse<IDateTime>) => response.data.data.datetime,
      );
  },
};

export default getCurrentDateAndTime;
