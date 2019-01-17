import { createStore } from "redux";

const initialState = {
  CURRENT_USER: {},
  isLoggedIn: false,
  currentNoteTitle: ""
};

const reducer = function(state = initialState, action) {
  if (action.type === "login") {
    state = action.payload;

    console.log("logged in");
  } else if (action.type === "logout") {
    state = action.payload;
    console.log("logged out");
  } else if (action.type === "getTitle") {
    state.currentNoteTitle = action.payload;
  }

  return state;
};

const Store = createStore(reducer, initialState);

export default Store;
