import React, { Component } from "react";
import Firebase from "../config/Firebase";
import Store from "../config/Store";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        Store.dispatch({
          type: "logout",
          payload: { CURRENT_USER: {}, isLoggedIn: false }
        });
      });
  };

  render() {
    return (
      <div>
        <h1>Home</h1>

        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Home;
