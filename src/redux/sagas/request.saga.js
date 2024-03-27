import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_SECRETS" actions
function* fetchRequests() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/requests', config);

    yield put({ type: 'SET_REQUESTS', payload: response.data });
  } catch (error) {
    console.log('Secrets get request failed', error);
  }
}

function* requestsSaga() {
  yield takeLatest('FETCH_REQUESTS', fetchRequests);
}

export default requestsSaga;
