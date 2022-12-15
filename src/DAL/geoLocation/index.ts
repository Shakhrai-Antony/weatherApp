import axios, { AxiosResponse } from 'axios';

interface geoLocation {
  IPv4: string;
  city: string;
  countryCode: string;
  countryName: string;
  latitude: number;
  longitude: number;
  postal: string;
  state: string;
}

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
