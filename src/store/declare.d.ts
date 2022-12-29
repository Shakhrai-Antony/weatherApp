import { compose } from 'redux';

declare global {
  interface Window {
    gapi: object;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
