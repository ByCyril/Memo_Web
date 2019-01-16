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
  Container,
  Navbar,
  NavbarBrand
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
      <div>
        <Navbar
          sticky={"top"}
          style={{
            marginBottom: "15px",
            backgroundColor: "#00B7D2",
            color: "#ffffff"
          }}
        >
          <Container>
            <NavbarBrand>
              <strong className="white-text">Memo</strong>
            </NavbarBrand>
          </Container>
        </Navbar>

        <Container>
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
              </FormGroup>
            </Form>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

export default Login;
