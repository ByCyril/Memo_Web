import React, { Component } from "react";
import { Container, Row, Jumbotron } from "reactstrap";
import "./NoteCell.css";
class NoteCell extends Component {
  viewNote = () => {
    console.log("working", this.props.note.title);
  };

  render() {
    return (
      <Container>
        <div className="noteContainer" onClick={this.viewNote}>
          <h5>{this.props.note.title}</h5>
          <p>{this.props.note.sampleTitle}</p>
        </div>
      </Container>
    );
  }
}

export default NoteCell;
