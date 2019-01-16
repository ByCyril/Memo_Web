import React, { Component } from "react";
import { Container } from "reactstrap";

class Thread extends Component {
  render() {
    return (
      <Container>
        <h2>{this.props.title}</h2>
      </Container>
    );
  }
}

export default Thread;
