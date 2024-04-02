const userReducer = (state = {}, action) => {
  //console.log('User Reducer data', action.payload);
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
  }
};

export default userReducer;
