import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ROLE" actions
function* fetchRole() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.put('/api/user', config);

    yield put({ type: 'SET_ROLE', payload: response.data });
  } catch (error) {
    console.log('Secrets get request failed', error);
  }
}

function* roleSaga() {
  yield takeLatest('FETCH_ROLE', fetchRole);
}

export default roleSaga;
