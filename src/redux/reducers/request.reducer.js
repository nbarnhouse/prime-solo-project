//Stores incoming requests from the server

const requestReducer = (state = {}, action) => {
  console.log('Request Reducer data', action.payload);
  switch (action.type) {
    case 'SET_REQUESTS':
      return action.payload; // Update the user's requests
    default:
      return state;
  }
};

export default requestReducer;
