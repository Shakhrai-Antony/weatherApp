import { createSelector } from 'reselect';

import { AppStateType } from '@/store';

export const getCurrentTheme = (state: AppStateType) => {
  return state.mainPage.theme;
};

export const getCurrentUser = (state: AppStateType) => {
  return state.mainPage.currentUser;
};

const getCurrentEvents = (state: AppStateType) => {
  return Object.values(state.mainPage.calendarItems);
};

export const currentEvents = createSelector(getCurrentEvents, (calendarItems) =>
  calendarItems.map((item: any) => [
    item.start.dateTime.substring(0, 10) +
      ' ' +
      item.start.dateTime.substring(11, 16),
    item.description,
  ]),
);

export const getUserCity = (state: AppStateType) => {
  return state.mainPage.city;
};

const getWeatherForSevenDates = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInDays);
};

export const weatherForSevenDates = createSelector(
  getWeatherForSevenDates,
  (weatherInDays) =>
    weatherInDays.map((item: any) => item.datetime.substring(5, 10)),
);

const getWeatherIconsForSevenDays = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInDays);
};

export const weatherIconsForSevenDates = createSelector(
  getWeatherIconsForSevenDays,
  (weatherInDays) => weatherInDays.map((item: any) => item.icon),
);

const getTemperatureForSevenDays = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInDays);
};

export const temperatureForSevenDays = createSelector(
  getTemperatureForSevenDays,
  (weatherInDays) => weatherInDays.map((item: any) => Math.round(item.temp)),
);

const getWeatherHours = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInHours);
};

export const weatherHours = createSelector(getWeatherHours, (weatherInHours) =>
  weatherInHours
    .map((item: any) => item.time.substring(11, 16))
    .filter((item: any) => item !== undefined),
);

const getWeatherTemperatureInHours = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInHours);
};

export const weatherTemperatureInHours = createSelector(
  getWeatherTemperatureInHours,
  (weatherInHours) =>
    weatherInHours
      .map((item: any) => Math.round(item.temp_c))
      .filter((item: any, index) => item !== undefined && index !== 24),
);

const getIconsForWeatherInHours = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInHours);
};

export const iconsForWeatherInHours = createSelector(
  getIconsForWeatherInHours,
  (weatherInHours) =>
    weatherInHours
      .map((item: any) => item.condition)
      .filter((item: any, index) => item !== undefined && index !== 24)
      .map((item: any) => item.text),
);

export const getWeatherSwitch = (state: AppStateType) => {
  return state.mainPage.weatherSwitcher;
};

export const getCurrentTime = (state: AppStateType) => {
  return state.mainPage.time;
};

export const currentTime = createSelector(getCurrentTime, (time) =>
  time.substring(0, 5),
);

const getCurrentDate = (state: AppStateType) => {
  return state.mainPage.date;
};

export const currentDate = createSelector(getCurrentDate, (date) =>
  date.substring(0, 26),
);

export const getWeatherInDaysError = (state: AppStateType) => {
  return state.mainPage.weatherInDaysError;
};

export const getWeatherInHoursError = (state: AppStateType) => {
  return state.mainPage.weatherInHoursError;
};

export const getPreloader = (state: AppStateType) => {
  return state.mainPage.isFetching;
};
