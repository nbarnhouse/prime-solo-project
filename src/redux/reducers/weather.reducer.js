const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return action.payload; // Update the user's availability days
    default:
      return state;
  }
};

export default weatherReducer;
