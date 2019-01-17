import React, { Component } from "react";
import { Container } from "reactstrap";
import "./NoteCell.css";
import Store from "/Users/cy/Documents/GitHub/memo-web/src/config/Store.js";

class NoteCell extends Component {
  constructor(props) {
    super(props);
  }

  displaySampleTitle = text => {
    if (text.length >= 45) {
      return text.substring(0, 40) + "...";
    } else {
      return text;
    }
  };

  getNote = () => {
    Store.dispatch({ type: "getTitle", payload: this.props.note });
  };

  render() {
    return (
      <Container style={{ float: "left" }}>
        <div className="noteContainer" onClick={this.getNote}>
          <h5>{this.props.note.title}</h5>
          <p>{this.displaySampleTitle(this.props.note.sampleTitle)}</p>
        </div>
      </Container>
    );
  }
}

export default NoteCell;
