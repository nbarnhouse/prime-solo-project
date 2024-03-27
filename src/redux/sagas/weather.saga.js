import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_WEATHER" actions
function* fetchWeather() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/weather', config);

    yield put({ type: 'SET_WEATHER', payload: response.data });
  } catch (error) {
    console.log('Secrets get request failed', error);
  }
}

function* weatherSaga() {
  yield takeLatest('FETCH_WEATHER', fetchWeather);
}

export default weatherSaga;
