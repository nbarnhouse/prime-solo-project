const availabilityReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_AVAILABILITY':
      return action.payload;

    case 'DELETE_AVAILABILITY_ITEM':
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default availabilityReducer;
