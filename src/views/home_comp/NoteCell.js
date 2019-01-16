import React, { Component } from "react";
import { Container } from "reactstrap";
import "./NoteCell.css";
import Thread from "../thread_comp/Thread";

class NoteCell extends Component {
  constructor(props) {
    super(props);
  }

  displaySampleTitle = text => {
    if (text.length >= 25) {
      return text.substring(0, 25) + "...";
    } else {
      return text;
    }
  };

  render() {
    return (
      <Container style={{ float: "left" }}>
        <div className="noteContainer">
          <h5>{this.props.note.title}</h5>
          <p>{this.displaySampleTitle(this.props.note.sampleTitle)}</p>
        </div>
      </Container>
    );
  }
}

export default NoteCell;
