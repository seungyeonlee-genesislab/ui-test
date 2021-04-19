import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import counterReducer, { counterActions } from './counter/counterSlice';
import toDosReducer, { toDosActions } from './toDos/toDosSlice';
import listReducer, { listActions } from './list/listSlice';
import rootSaga from '../sagas/index';

const rootReducer = combineReducers({
  counter: counterReducer,
  toDos: toDosReducer,
  list: listReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export const actions = { ...counterActions, ...toDosActions, ...listActions };

export default store;
