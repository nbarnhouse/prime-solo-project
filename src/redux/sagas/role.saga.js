import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Worker Saga: handles updating the user's role in the database
function* updateRole(action) {
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    // const { type, userId } = action.payload;
    console.log('Action Payload:', action.payload);

    // Make API call to update the user's role in the database
    const response = yield axios.put(
      `/api/user/${action.payload.userId}`,
      { type: action.payload.type }
      //Multiples
    );

    yield put({ type: 'SET_ROLE', payload: response.data });
  } catch (error) {
    console.log('User put role failed', error);
  }
}

// Watcher Saga: listens for 'SET_ROLE' actions and triggers the worker saga
function* roleSaga() {
  yield takeLatest('UPDATE_ROLE', updateRole);
}

export default roleSaga;
