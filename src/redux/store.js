import {configureStore} from '@reduxjs/toolkit';
import historyReducer from './historySlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    history: historyReducer,
  },
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default store;
