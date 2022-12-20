import axios, { AxiosResponse } from 'axios';

import { geoLocation } from '@/DAL/geoLocation/interface';

const instance = axios.create({
  baseURL: 'https://geolocation-db.com/json/',
});

const getCurrentGeoLocation = {
  getLocation() {
    return instance
      .get(``)
      .then((response: AxiosResponse<geoLocation>) => response.data);
  },
};

export default getCurrentGeoLocation;
