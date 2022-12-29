import { call, fork, put, select, takeEvery } from 'redux-saga/effects';

import getWeatherInDays from '@/API/weatherInDays';
import getWeatherInHours from '@/API/weatherInHours';
import { currentHour } from '@/constants';
import actionTypes from '@/store/constants';
import {
  setCurrentTheme,
  setDaysError,
  setHoursError,
  setPreloader,
  setWeatherInDays,
  setWeatherInHours,
  setWeatherSwitch,
} from '@/store/mainReducer';
import { getUserCity } from '@/store/selectors';

async function getCurrentWeatherInDays(city: string) {
  const request = await getWeatherInDays.currentWeather(city);
  return request.days;
}

async function getCurrentTheme(city: string) {
  const request = await getWeatherInDays.currentWeather(city);
  return request.days[0].icon;
}

async function getCurrentWeatherInHours(city: string) {
  const request = await getWeatherInHours.currentWeather(city);
  return request.forecast.forecastday[0].hour;
}

async function getThemeForCurrentHour(city: string) {
  const request = await getWeatherInHours.currentWeather(city);
  return request.forecast.forecastday[0].hour[currentHour].condition.text;
}

export function* loadWeatherInDays(): Generator {
  try {
    yield put(setPreloader(true));
    const city: ReturnType<typeof getUserCity> = yield select(getUserCity);
    const weather: any = yield call(getCurrentWeatherInDays, city);
    const theme: any = yield call(getCurrentTheme, city);
    yield put(setWeatherSwitch(true));
    yield put(setCurrentTheme(theme));
    yield put(setWeatherInDays(weather));
    yield put(setDaysError(''));
    yield put(setHoursError(''));
    yield put(setPreloader(false));
  } catch {
    yield put(setDaysError('Error in the name of the city'));
  }
}

export function* loadWeatherInHours(): Generator {
  try {
    yield put(setPreloader(true));
    const city: ReturnType<typeof getUserCity> = yield select(getUserCity);
    const weather: any = yield call(getCurrentWeatherInHours, city);
    const themeForHour: any = yield call(getThemeForCurrentHour, city);
    yield put(setWeatherSwitch(false));
    yield put(setCurrentTheme(themeForHour));
    yield put(setWeatherInHours(weather));
    yield put(setHoursError(''));
    yield put(setDaysError(''));
    yield put(setPreloader(false));
  } catch {
    yield put(setHoursError('Error in the name of the city'));
  }
}

export function* workerSagaForWeatherInDays() {
  yield fork(loadWeatherInDays);
}

export function* workerSagaForWeatherInHours() {
  yield fork(loadWeatherInHours);
}

export function* watchLoadDataSaga() {
  yield takeEvery(actionTypes.loadWeatherInDays, workerSagaForWeatherInDays);
  yield takeEvery(actionTypes.loadWeatherInHours, workerSagaForWeatherInHours);
}

export default function* rootSaga() {
  yield watchLoadDataSaga();
}
