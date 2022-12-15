import { AppStateType } from '@/store';

export const getCurrentTheme = (state: AppStateType) => {
  return state.mainPage.theme;
};

export const getCurrentUser = (state: AppStateType) => {
  return state.mainPage.currentUser;
};

export const getCurrentEvents = (state: AppStateType) => {
  return Object.values(state.mainPage.calendarItems).map((item: any) => [
    item.start.dateTime.substring(11, 19),
    item.description,
  ]);
};

export const getUserCity = (state: AppStateType) => {
  return state.mainPage.city;
};

export const getWeatherForSevenDates = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInDays).map((item: any) =>
    item.datetime.substring(5, 10),
  );
};

export const getWeatherIconsForSevenDays = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInDays).map(
    (item: any) => item.icon,
  );
};

export const getTemperatureForSevenDays = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInDays).map(
    (item: any) => item.temp,
  );
};

export const getWeatherHours = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInHours)
    .map((item: any) => item.time.substring(11, 16))
    .filter((item: any) => item !== undefined);
};

export const getWeatherTemperatureInHours = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInHours)
    .map((item: any) => item.temp_c)
    .filter((item: any, index) => item !== undefined && index !== 24);
};

export const getIconsForWeatherInHours = (state: AppStateType) => {
  return Object.values(state.mainPage.weatherInHours)
    .map((item: any) => item.condition)
    .filter((item: any, index) => item !== undefined && index !== 24)
    .map((item: any) => item.text);
};

export const getWeatherSwitch = (state: AppStateType) => {
  return state.mainPage.weatherSwitcher;
};
