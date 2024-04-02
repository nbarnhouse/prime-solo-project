const availabilityReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_AVAILABILITY':
      return action.payload;

    case 'GET_AVAILABILITY':
      return action.payload;

    case 'DELETE_AVAILABILITY_ITEM':
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};

export default availabilityReducer;
