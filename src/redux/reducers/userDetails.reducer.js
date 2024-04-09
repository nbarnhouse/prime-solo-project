const userDetailsReducer = (state = [], action) => {
  //console.log('Role Reducer data', action.payload);
  switch (action.type) {
    case 'SET_USER_DETAILS':
      console.log('User details payload at Reducer:', action.payload); // Log the payload received by the reducer
      return action.payload;
    default:
      return state;
  }
};

export default userDetailsReducer;
