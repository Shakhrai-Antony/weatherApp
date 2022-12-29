import { AnyAction } from 'redux';

import actionTypes from '@/store/constants';
import { MainReducer } from '@/store/mainReducer/interface';

const initialState: MainReducer = {
  theme: 'snow',
  currentUser: '',
  calendarItems: [],
  city: '',
  weatherInDays: [],
  weatherInHours: [],
  weatherSwitcher: true,
  time: '',
  date: '',
  weatherInDaysError: '',
  weatherInHoursError: '',
  isFetching: false,
};

const mainReducer = (state: MainReducer = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.switchTheme:
      return {
        ...state,
        theme: payload,
      };
    case actionTypes.getCurrentUser:
      return {
        ...state,
        currentUser: payload,
      };
    case actionTypes.removeCurrentUser:
      return {
        ...state,
        currentUser: '',
      };
    case actionTypes.getCalendarActions:
      return {
        ...state,
        calendarItems: { ...state.calendarItems, ...payload },
      };
    case actionTypes.setCurrentCity:
      return {
        ...state,
        city: payload,
      };
    case actionTypes.setWeatherByDays:
      return {
        ...state,
        weatherInDays: { ...state.weatherInDays, ...payload },
      };
    case actionTypes.setWeatherByHours:
      return {
        ...state,
        weatherInHours: { ...state.weatherInHours, ...payload },
      };
    case actionTypes.setWeatherSwitcher:
      return {
        ...state,
        weatherSwitcher: payload,
      };
    case actionTypes.setCurrentTime: {
      return {
        ...state,
        time: payload,
      };
    }
    case actionTypes.setCurrentDate: {
      return {
        ...state,
        date: payload,
      };
    }
    case actionTypes.setWeatherInDaysError: {
      return {
        ...state,
        weatherInDaysError: payload,
      };
    }
    case actionTypes.setWeatherInHoursError: {
      return {
        ...state,
        weatherInHoursError: payload,
      };
    }
    case actionTypes.isFetching: {
      return {
        ...state,
        isFetching: payload,
      };
    }
    default:
      return state;
  }
};

export const setCurrentTheme = (payload: string) => {
  return {
    type: actionTypes.switchTheme,
    payload,
  };
};

export const setCurrentUser = (payload: string) => {
  return {
    type: actionTypes.getCurrentUser,
    payload,
  };
};

export const unSetCurrentUser = () => {
  return {
    type: actionTypes.removeCurrentUser,
  };
};

export const setCalendarActions = (payload: Array<[]>) => {
  return {
    type: actionTypes.getCalendarActions,
    payload,
  };
};

export const setCity = (payload: string) => {
  return {
    type: actionTypes.setCurrentCity,
    payload,
  };
};

export const setWeatherInDays = (payload: Array<[]>) => {
  return {
    type: actionTypes.setWeatherByDays,
    payload,
  };
};

export const setWeatherInHours = (payload: object) => {
  return {
    type: actionTypes.setWeatherByHours,
    payload,
  };
};

export const setWeatherSwitch = (payload: boolean) => {
  return {
    type: actionTypes.setWeatherSwitcher,
    payload,
  };
};

export const setTime = (payload: string) => {
  return {
    type: actionTypes.setCurrentTime,
    payload,
  };
};

export const setDate = (payload: string) => {
  return {
    type: actionTypes.setCurrentDate,
    payload,
  };
};

export const setDaysError = (payload: string) => {
  return {
    type: actionTypes.setWeatherInDaysError,
    payload,
  };
};

export const setHoursError = (payload: string) => {
  return {
    type: actionTypes.setWeatherInHoursError,
    payload,
  };
};

export const setPreloader = (payload: boolean) => {
  return {
    type: actionTypes.isFetching,
    payload,
  };
};

export default mainReducer;
