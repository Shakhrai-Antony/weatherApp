import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import mainReducer from '@/store/mainReducer';
import rootSaga from '@/store/sagas';

const rootReducer = combineReducers({
  mainPage: mainReducer,
});

declare global {
  interface Window {
    gapi: object;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);
type rootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<rootReducerType>;

export default store;
