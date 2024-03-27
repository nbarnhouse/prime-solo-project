const requestReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_REQUEST':
      return action.payload; // Update the user's requests
    default:
      return state;
  }
};

export default requestReducer;
