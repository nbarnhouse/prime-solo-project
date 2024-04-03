const pastSubmittedRequest = (state = [], action) => {
  switch (action.type) {
    case 'SET_PAST_SUBMITTED_REQUESTS':
      return action.payload;
    default:
      return state;
  }
};

export default pastSubmittedRequest;
