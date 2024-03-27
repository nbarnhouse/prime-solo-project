// import { takeLatest, call, put } from 'redux-saga/effects';
// import axios from 'axios';

// const SUBMIT_ROLE = 'SUBMIT_ROLE';
// const SUBMIT_ROLE_SUCCESS = 'SUBMIT_ROLE_SUCCESS';
// const SUBMIT_ROLE_FAILURE = 'SUBMIT_ROLE_FAILURE';

// // Worker Saga: Makes the Axios call to update the database
// function* updateDatabase(action) {
//   try {
//     // Assuming you have an API endpoint to update the user's role in the database
//     yield call(axios.post, '/api/updateUserRole', { role: action.payload });

//     // Dispatch a success action
//     yield put(submitRoleSuccess());
//   } catch (error) {
//     // Dispatch a failure action
//     yield put(submitRoleFailure(error));
//   }
// }

// // Watcher Saga: Watches for the SUBMIT_ROLE action
// export function* watchSubmitRole() {
//   yield takeLatest(SUBMIT_ROLE, updateDatabase);
// }
