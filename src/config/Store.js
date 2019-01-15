import { createStore } from "redux";

const initialState = {
  CURRENT_USER: {},
  isLoggedIn: false
};

const reducer = function(state = initialState, action) {
  if (action.type === "login") {
    state = action.payload;

    console.log("logged in");
  } else if (action.type === "logout") {
    state = action.payload;
    console.log("logged out");
  }

  return state;
};

const Store = createStore(reducer, initialState);

export default Store;
