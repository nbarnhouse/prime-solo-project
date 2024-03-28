const initialState = {
  type: '', // initial role state
};

const roleReducer = (state = initialState, action) => {
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
