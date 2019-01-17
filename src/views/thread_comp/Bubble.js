import React, { Component } from "react";
import { Container } from "reactstrap";

class Bubble extends Component {
  state = {};
  render() {
    return (
      <Container>
        <p>{this.props.note.note}</p>
      </Container>
    );
  }
}

export default Bubble;
