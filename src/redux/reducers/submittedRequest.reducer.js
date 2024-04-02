//Stores incoming requests from the server

const submittedRequestReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_SUBMITTED_REQUESTS':
      return action.payload;
    default:
      return state;
  }
};

export default submittedRequestReducer;
