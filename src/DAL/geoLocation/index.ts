import axios, { AxiosResponse } from 'axios';

import { geoLocation } from '@/DAL/geoLocation/interface';

const instance = axios.create({
  baseURL: 'http://ip-api.com/json/',
});

const getCurrentGeoLocation = {
  getLocation() {
    return instance
      .get(``)
      .then((response: AxiosResponse<geoLocation>) => response.data);
  },
};

export default getCurrentGeoLocation;
