import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_AVAILABILITY" actions
function* fetchAvailability() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/availability', config);

    yield put({ type: 'SET_AVAILABILITY', payload: response.data });
  } catch (error) {
    console.log('Secrets get request failed', error);
  }
}

function* availabilitySaga() {
  yield takeLatest('FETCH_AVAILABILITY', fetchAvailability);
}

export default availabilitySaga;
