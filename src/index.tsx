import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './app';
import store from '@/store';

const persistor = persistStore(store);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as Element);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);

if (window.Cypress) {
  window.store = store;
}
