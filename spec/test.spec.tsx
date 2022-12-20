import React from 'react';

import actionTypes from '../src/store/constants';
import { setCity, setCurrentTheme } from '../src/store/mainReducer';
import { expect, jest, test } from '@jest/globals';

jest.mock('react-redux');

describe('Location', () => {
  it('should create Location', () => {
    const payload = 'Minsk';
    const expectation = {
      type: actionTypes.setCurrentCity,
      payload,
    };
    expect(setCity(payload)).toEqual(expectation);
  });
  it('should change theme', () => {
    const payload = 'sun';
    const expectation = {
      type: actionTypes.switchTheme,
      payload,
    };
    expect(setCurrentTheme(payload)).toEqual(expectation);
  });
});
