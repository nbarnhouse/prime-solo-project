const roleReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SUBMIT_ROLE':
      return action.payload; // Update the user's role with the selected role
    default:
      return state;
  }
};

export default roleReducer;
