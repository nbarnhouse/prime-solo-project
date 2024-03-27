import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import roleSaga from './role.saga';
import availabilitySaga from './availability.saga';
import requestsSaga from './request.saga';
import weatherSaga from './weather.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    roleSaga(),
    availabilitySaga(),
    requestsSaga(),
    weatherSaga(),
  ]);
}
