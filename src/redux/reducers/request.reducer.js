//Stores incoming requests from the server

const requestReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_REQUESTS':
      return action.payload;
    default:
      return state;
  }
};

export default requestReducer;
