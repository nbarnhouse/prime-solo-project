const profTeaReducer = (state = [], action) => {
  //console.log('Role Reducer data', action.payload);
  switch (action.type) {
    case 'SET_TEACHER_PROFILE':
      return {};
    default:
      return state;
  }
};

export default profTeaReducer;
