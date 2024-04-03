const profSubReducer = (state = [], action) => {
  //console.log('Role Reducer data', action.payload);
  switch (action.type) {
    case 'SET_SUB_PROFILE':
      return {};
    default:
      return state;
  }
};

export default profSubReducer;
