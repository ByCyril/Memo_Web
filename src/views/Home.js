import React, { Component } from "react";
import Firebase from "../config/Firebase";
import Store from "../config/Store";
import NoteCell from "./home_comp/NoteCell";
import "./Home.css";
import { Navbar, NavbarBrand, NavLink, Nav, NavItem } from "reactstrap";
import { HashRouter, Route } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    console.log("Home", Store.getState().CURRENT_USER.uid);
    this.db = Firebase.database()
      .ref()
      .child("XAioqb8FNuW9OF4eQm6yAs1ugw83")
      .child("notes");

    this.state = {
      notes: [],
      currentNote: ""
    };

    this.newUser = Firebase.database()
      .ref()
      .child(Store.getState().CURRENT_USER.uid)
      .child("notes");
  }

  componentWillUpdate() {
    Store.subscribe(() => {
      this.setState({ currentNote: Store.getState().currentNoteTitle });
    });
  }

  componentWillMount() {
    const currentNotes = this.state.notes;

    this.db.on("child_added", snap => {
      currentNotes.push(snap.val());
      this.setState({
        notes: currentNotes
      });
    });
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

  looking = note => {
    console.log("note", note);
  };

  render() {
    return (
      <div>
        <Navbar
          sticky={"top"}
          style={{
            marginBottom: "15px",
            backgroundColor: "#00B7D2",
            color: "#ffffff"
          }}
          expand="md"
        >
          <NavbarBrand>
            <img
              src={require("../icons/memo.png")}
              style={{
                width: "25px",
                height: "25px",
                marginRight: "5px",
                borderRadius: "5px"
              }}
              alt="memo"
            />
            <strong className="white-text">Memo</strong>
          </NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/" style={{ color: "#ffffff" }}>
                Settings
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="/"
                style={{ color: "#ffffff" }}
                onClick={this.logout}
              >
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>

        <div className="sidenav">
          {this.state.notes.map(note => (
            <NoteCell note={note} key={note.noteId} onClick={this.looking} />
          ))}
        </div>

        <div className="main">
          <h2>{this.state.currentNote}</h2>
        </div>
      </div>
    );
  }
}

export default Home;
