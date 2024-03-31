//Stores incoming requests from the server

const acceptedRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACCEPTED_REQUESTS':
      return action.payload; // Replace the current state with the fetched accepted requests
    default:
      return state;
  }
};

export default acceptedRequestReducer;
