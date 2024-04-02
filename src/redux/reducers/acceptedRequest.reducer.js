const acceptedRequestReducer = (state = [], action) => {
  if (action.type === 'SET_ACCEPTED_REQUESTS') {
    return action.payload;
  }
  return state;
};

export default acceptedRequestReducer;
