import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Worker Saga: handles updating the user's role in the database
function* updateSubProfile(action) {
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    console.log('Action Payload UPDATE SUB USER:', action.payload);

    const response = yield axios.put(
      `/api/user/sub/${action.payload.userId}`,
      action.payload
    );

    yield put({ type: 'SET_SUB_PROFILE', payload: response.data });
  } catch (error) {
    console.log('User put role failed', error);
  }
}

function* updateTeacherProfile(action) {
  try {
    // const config = {
    //   headers: { 'Content-Type': 'application/json' },
    //   withCredentials: true,
    // };

    console.log('Action Payload UPDATE TEACHER USER:', action.payload);

    const response = yield axios.post(`/api/user/tea`, action.payload);

    yield put({ type: 'SET_TEACHER_PROFILE', payload: response.data });
  } catch (error) {
    console.log('User put profile failed', error);
  }
}

// Watcher Saga: listens for 'SET_ROLE' actions and triggers the worker saga
function* updateUser() {
  yield takeLatest('UPDATE_PROFILE_SUB', updateSubProfile);
  yield takeLatest('UPDATE_PROFILE_TEACHER', updateTeacherProfile);
}

export default updateUser;
