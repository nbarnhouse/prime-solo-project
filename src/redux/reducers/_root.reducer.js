import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import role from './role.reducer';
import availability from './availability.reducer';
import request from './request.reducer';
import weather from './weather.reducer';
import acceptedRequest from './acceptedRequest.reducer';
import submittedRequest from './submittedRequest.reducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  role, //user will set their role
  availability, //sub user will set availability
  request, //teacher user will set requests
  weather, //weather api data
  acceptedRequest, //sub user will accept request
  submittedRequest,
});

export default rootReducer;
