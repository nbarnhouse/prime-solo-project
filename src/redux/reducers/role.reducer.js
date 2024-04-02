const roleReducer = (state = {}, action) => {
  //console.log('Role Reducer data', action.payload);
  switch (action.type) {
    case 'SET_ROLE':
      return {};
    default:
      return state;
  }
};

export default roleReducer;
