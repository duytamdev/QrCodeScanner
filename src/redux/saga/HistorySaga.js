import {put, takeLatest} from 'redux-saga/effects';
import {addHistory, addHistorySuccess} from '../historySlice';
import Storage from '../../utils/storage';
import {HISTORIES_KEY} from '../../utils/constants';

function* addHistorySaga(action) {
  let data = [];
  //TODO: check if data is already in storage
  Storage.getItem(HISTORIES_KEY).then(res => {
    if (res) {
      data = res;
    }
    data.push(action.payload);
    Storage.setItem(HISTORIES_KEY, data);
  });
  yield put(addHistorySuccess(data));
}
export function* watchHistorySaga() {
  yield takeLatest(addHistory.toString(), addHistorySaga);
}
