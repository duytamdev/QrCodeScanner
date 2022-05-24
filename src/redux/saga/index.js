import {fork} from 'redux-saga/effects';
import {watchHistorySaga} from './HistorySaga';
export default function* rootSaga() {
  yield fork(watchHistorySaga);
}
