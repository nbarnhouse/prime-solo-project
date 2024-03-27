const availabilityReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_AVAILABILITY':
      return action.payload; // Update the user's availability days
    default:
      return state;
  }
};

export default availabilityReducer;
