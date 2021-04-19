import { call, put, takeLatest } from 'redux-saga/effects';
import { listAPI } from '../apis/index';
import { listActions } from '../_redux/list/listSlice';

function* fetchList() {
  const { getListSuccess, getListFail } = listActions;
  try {
    const { data } = yield call(listAPI);
    yield put(getListSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(getListFail(error));
  }
}

export function* watchList() {
  const { getListRequest } = listActions;
  yield takeLatest(getListRequest, fetchList);
}
