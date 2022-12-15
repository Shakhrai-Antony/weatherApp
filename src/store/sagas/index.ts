import { call, put, select, spawn, takeEvery } from 'redux-saga/effects';

import getWeatherInDays from '@/DAL/weatherInDays';
import getWeatherInHours from '@/DAL/weatherInHours';
import {
  setWeatherInDays,
  setWeatherInHours,
  setWeatherSwitch,
} from '@/store/mainReducer';
import { getUserCity } from '@/store/selectors';

async function getCurrentWeatherInDays(city: string) {
  const request = await getWeatherInDays.currentWeather(city);
  return request.days;
}

async function getCurrentWeatherInHours(city: string) {
  const request = await getWeatherInHours.currentWeather(city);
  return request.forecast.forecastday[0].hour;
}

export function* loadWeatherInDays(): Generator {
  const city: ReturnType<typeof getUserCity> = yield select(getUserCity);
  const weather: any = yield call(getCurrentWeatherInDays, city);
  yield put(setWeatherSwitch(true));
  yield put(setWeatherInDays(weather));
}

export function* loadWeatherInHours(): Generator {
  const city: ReturnType<typeof getUserCity> = yield select(getUserCity);
  const weather: any = yield call(getCurrentWeatherInHours, city);
  yield put(setWeatherSwitch(false));
  yield put(setWeatherInHours(weather));
}

export function* workerSagaForWeatherInDays() {
  yield spawn(loadWeatherInDays);
}

export function* workerSagaForWeatherInHours() {
  yield spawn(loadWeatherInHours);
}

export function* watchLoadDataSaga() {
  yield takeEvery('LOAD_WEATHER_IN_DAYS', workerSagaForWeatherInDays);
  yield takeEvery('LOAD_WEATHER_IN_HOURS', workerSagaForWeatherInHours);
}

export default function* rootSaga() {
  yield watchLoadDataSaga();
}
