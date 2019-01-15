import React, { Component } from "react";
import Firebase from "../config/Firebase";
import Store from "../config/Store";
import {
  Jumbotron,
  Button,
  FormGroup,
  Form,
  InputGroup,
  Input,
  InputGroupAddon,
  Container
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  userLogin = () => {
    console.log("heree", this.state);
    Firebase.auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        Store.dispatch({ type: "login", payload: user });
      });
  };

  getInfo = e => {
    if (e.target.name === "email") {
      this.setState({ email: e.target.value });
    } else if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  };

  getCurrentState = () => {
    console.log(Store.getState());
  };
  render() {
    return (
      <Container>
        <h1>Memo</h1>
        <Jumbotron>
          <Form>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">E</InputGroupAddon>
                <Input
                  placeholder="Email"
                  name="email"
                  onChange={this.getInfo}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">P</InputGroupAddon>
                <Input
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={this.getInfo}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <Button color="info" onClick={this.userLogin}>
                Login
              </Button>{" "}
              <Button color="info">Create Account</Button>{" "}
              <Button color="danger" onClick={this.getCurrentState}>
                Get state
              </Button>
            </FormGroup>
          </Form>
        </Jumbotron>
      </Container>
    );
  }
}

export default Login;
