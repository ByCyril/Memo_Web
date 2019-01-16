import React, { Component } from "react";
import { Container } from "reactstrap";
import "./NoteCell.css";
import Thread from "../thread_comp/Thread";

class NoteCell extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ float: "left" }}>
        <div className="noteContainer test">
          <h5>{this.props.note.title}</h5>
          <p>{this.props.note.sampleTitle}</p>
        </div>
      </Container>
    );
  }
}

export default NoteCell;
