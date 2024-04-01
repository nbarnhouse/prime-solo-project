//Stores incoming requests from the server
//The accepted Requests are based on specific subs changing the status from
//Requested to Accepted and their ID is assigned

const acceptedRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACCEPTED_REQUESTS':
      return action.payload;
    default:
      return state;
  }
};

export default acceptedRequestReducer;
