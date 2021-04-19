import { all } from 'redux-saga/effects';
import { watchList } from './listSaga';

export default function* rootSaga() {
  yield all([watchList()]);
}
