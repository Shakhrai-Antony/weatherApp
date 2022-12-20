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
