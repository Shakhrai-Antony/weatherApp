import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from '../src/app';
import Location from '../src/components/Location';
import store from '../src/store';
import { expect, jest, test } from '@jest/globals';
import { render } from '@testing-library/react';

jest.mock('react-redux');

describe('Location', () => {
  it('should create location with empty input', () => {
    render(
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>,
    );
  });
});
