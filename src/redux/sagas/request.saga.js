import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';

// Saga for getting all requests
function* fetchRequests() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    const response = yield axios.get('/api/request', config);

    yield put({ type: 'SET_REQUESTS', payload: response.data });
  } catch (error) {
    console.log('Requests GET request failed', error);
  }
}

// Saga for accepting a request
function* acceptRequest() {
  try {
    const { requestId, userId } = action.payload;

    console.log('Request Saga Process - Request ID:', requestId);
    console.log('Request Saga Process - User ID:', userId);

    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // Send PUT request with userId in the request body
    yield (axios.put, `/api/request/${requestId}`, { user_id: userId }, config);

    yield put({ type: 'ACCEPT_REQUEST_SUCCESS', payload: requestId });
  } catch (error) {
    yield put({ type: 'ACCEPT_REQUEST_FAILURE', error: error.message });
  }
}

function* fetchAcceptedRequests() {
  try {
    const response = yield axios.get(`/api/request/accepted`);
    yield put({ type: 'SET_ACCEPTED_REQUESTS', payload: response.data });
  } catch (error) {
    console.error('Error fetching accepted requests:', error);
  }
}

function* fetchSubmittedRequests() {
  try {
    const response = yield axios.get(`/api/request/submitted`);
    yield put({ type: 'SET_SUBMITTED_REQUESTS', payload: response.data });
  } catch (error) {
    console.error('Error fetching accepted requests:', error);
  }
}

function* requestsSaga() {
  yield takeLatest('FETCH_REQUESTS', fetchRequests);
  yield takeLatest('ACCEPT_REQUEST', acceptRequest);
  yield takeLatest('FETCH_ACCEPTED_REQUESTS', fetchAcceptedRequests);
  yield takeLatest('FETCH_SUBMITTED_REQUESTS', fetchSubmittedRequests);
}

export default requestsSaga;
