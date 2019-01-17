import React, { Component } from "react";
import { Container } from "reactstrap";
import Firebase from "/Users/cy/Documents/GitHub/memo-web/src/config/Firebase.js";

class Thread extends Component {
  constructor(props) {
    super(props);

    this.state = {
      thread: [
        { note: "hello" },
        { note: "hello" },
        { note: "hello" },
        { note: "hello" }
      ]
    };
  }

  getThread = () => {
    var currentThread = this.state.thread;
    Firebase.database()
      .ref()
      .child("XAioqb8FNuW9OF4eQm6yAs1ugw83")
      .child("thread")
      .child(this.props.note.noteId)
      .on("child_added", snap => {
        currentThread.push(snap.val());
        console.log(snap.val());
        this.setState({
          thread: currentThread
        });
      });
  };

  render() {
    return (
      <Container>
        <h2>{this.props.note.title}</h2>
        {this.state.thread.map(note => (
          <p>{note.note}</p>
        ))}
      </Container>
    );
  }
}

export default Thread;
