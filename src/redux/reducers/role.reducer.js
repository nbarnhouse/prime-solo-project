const initialState = {
  type: '', // initial role state
};

const roleReducer = (state = initialState, action) => {
  //console.log('Role Reducer data', action.payload);
  switch (action.type) {
    case 'SET_ROLE':
      return {
        ...state,
        type: action.payload.type, // Update the user's role with the selected role
      };
    default:
      return state;
  }
};

export default roleReducer;
