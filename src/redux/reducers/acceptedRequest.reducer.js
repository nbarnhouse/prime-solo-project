const acceptedRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_ACCEPTED_REQUESTS':
      return action.payload;
    default:
      return state;
  }
};

export default acceptedRequestReducer;
