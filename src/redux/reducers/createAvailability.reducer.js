const createAvailabilityReducer = (state = [], action) => {
  if (action.type === 'CREATE_AVAILABILITY') {
    return action.payload;
  }
  return state;
};

export default createAvailabilityReducer;
