import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* createAvailability(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const { type, date, comments } = action.payload;

    const response = yield axios.post(
      '/api/availability',
      { type, date, comments },
      config
    );

    yield put({ type: 'CREATE_AVAILABILITY', payload: response.data });
  } catch (error) {
    console.log('Secrets get request failed', error);
  }
}

// worker Saga: will be fired on "FETCH_AVAILABILITY" actions
function* fetchAvailability() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/availability', config);

    yield put({ type: 'GET_AVAILABILITY', payload: response.data });
  } catch (error) {
    console.log('Secrets get request failed', error);
  }
}

function* deleteAvailability(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const itemId = action.payload;

    yield axios.delete(`/api/availability/${itemId}`, config);

    yield put({ type: 'FETCH_AVAILABILITY' }); // Refetch availability after Deletion
  } catch (error) {
    console.log('Availability delete request failed', error);
  }
}

function* availabilitySaga() {
  yield takeLatest('ADD_AVAILABILITY', createAvailability);
  yield takeLatest('FETCH_AVAILABILITY', fetchAvailability);
  yield takeLatest('DELETE_AVAILABILITY_ITEM', deleteAvailability);
}

export default availabilitySaga;
