const pastAcceptedRequest = (state = [], action) => {
  switch (action.type) {
    case 'SET_PAST_ACCEPTED_REQUESTS':
      return action.payload;
    default:
      return state;
  }
};

export default pastAcceptedRequest;
