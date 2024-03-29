import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: handles updating the user's role in the database
function* updateRole() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    //console.log('Action Payload:', action.payload);

    // Make API call to update the user's role in the database
    const response = yield axios.put(`/api/user/${id}`, config);

    yield put({ type: 'SET_ROLE', payload: response.data });
  } catch (error) {
    console.log('User put role failed', error);
  }
}

// Watcher Saga: listens for 'SET_ROLE' actions and triggers the worker saga
function* roleSaga() {
  yield takeLatest('FETCH_ROLE', updateRole);
}

export default roleSaga;
