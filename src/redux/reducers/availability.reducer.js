const availabilityReducer = (state = [], action) => {
  if (action.type === 'GET_AVAILABILITY') {
    return action.payload;
  }
  return state;
};

export default availabilityReducer;
