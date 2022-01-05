const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENTBY10":
      return state + 10;
    case "DECREMENTBY10":
      return state - 10;
    case "RESETTOZERO":
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
