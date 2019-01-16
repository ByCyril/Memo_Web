import React, { Component } from "react";
import "./App.css";
import Login from "./views/Login";
import Home from "./views/Home";
import Firebase from "./config/Firebase";
import Store from "./config/Store";
import { throws } from "assert";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CURRENT_USER: {},
      isLoggedIn: false
    };
  }

  componentWillUpdate() {
    Store.subscribe(() => {
      this.setState(Store.getState());
    });
  }

  componentWillMount() {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const newState = { CURRENT_USER: user, isLoggedIn: true, test: "hi" };
        Store.dispatch({ type: "login", payload: newState });
        this.setState(Store.getState());
      }
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoggedIn === false ? <Login /> : <Home />}
      </div>
    );
  }
}

export default App;
