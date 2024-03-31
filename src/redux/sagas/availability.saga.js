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

function* deleteAvailability(action) {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // Extract itemId from the action payload
    const itemId = action.payload;

    // Delete the availability item with specif ID
    yield axios.delete(`/api/availability/${itemId}`, config);

    // After successful deletion, dispatch action to update the store
    yield put({ type: 'FETCH_AVAILABILITY' }); // Refetch availability after Deletion
  } catch (error) {
    console.log('Availability delete request failed', error);
  }
}

function* availabilitySaga() {
  yield takeLatest('FETCH_AVAILABILITY', fetchAvailability);
  yield takeLatest('DELETE_AVAILABILITY_ITEM', deleteAvailability);
}

export default availabilitySaga;
