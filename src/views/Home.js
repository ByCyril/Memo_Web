import React, { Component } from "react";
import Firebase from "../config/Firebase";
import Store from "../config/Store";
import NoteCell from "./home_comp/NoteCell";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavLink,
  Nav,
  NavItem
} from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);

    this.db = Firebase.database()
      .ref()
      .child("XAioqb8FNuW9OF4eQm6yAs1ugw83")
      .child("notes");

    this.state = {
      notes: []
    };

    // this.db.on("child_added", snap => {
    //   console.log(snap.val());
    // });
  }

  componentWillMount() {
    const currentNotes = this.state.notes;

    this.db.on("child_added", snap => {
      console.log(snap.val());
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
          <Container>
            <NavbarBrand>
              <strong className="white-text">Memo</strong>
            </NavbarBrand>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" onClick={this.logout}>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>

        <Container>
          {this.state.notes.map(note => (
            <NoteCell note={note} key={note.noteId} />
          ))}
        </Container>
      </div>
    );
  }
}

export default Home;
