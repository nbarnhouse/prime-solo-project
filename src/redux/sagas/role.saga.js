import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Worker Saga: handles updating the user's role in the database
function* updateRoleInDatabase(action) {
  try {
    const { type } = action.payload; // Extract the role type from the action payload

    // Make API call to update the user's role in the database
    yield axios.put('/api/user/role', { role: type });

    // Dispatch a success action if needed
    yield put({ type: 'UPDATE_ROLE_SUCCESS' });
  } catch (error) {
    // Dispatch an error action if needed
    yield put({ type: 'UPDATE_ROLE_ERROR', error });
  }
}

// Watcher Saga: listens for 'SET_ROLE' actions and triggers the worker saga
function* roleSaga() {
  yield takeLatest('SET_ROLE', updateRoleInDatabase);
}

export default roleSaga;
