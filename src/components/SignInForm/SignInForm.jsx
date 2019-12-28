import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import CustomButton from "../layout/custom-button/CustomButton";
import { auth } from "../../firebase/firebase.utils";
import { signInWithGoogle } from "../../firebase/signInFunctions";

import "./SignInForm.styles.scss";

export default class SignInForm extends Component {
  state = {
    validated: false,
    email: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    auth
      .signInWithEmailAndPassword(email, password)
      .catch(err => console.log(err));
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Form
        className="text-left"
        noValidate
        validated={this.state.validated}
        onSubmit={this.handleSubmit}
      >
        <Form.Group controlId="loginemail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            required
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter valid email
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="loginpassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            name="password"
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please enter valid password
          </Form.Control.Feedback>
        </Form.Group>
        <CustomButton className="px-3" type="submit" variant="info">
          Sign In
        </CustomButton>
        <button
          onClick={signInWithGoogle}
          className="google-signin"
          type="button"
        >
          SIGN IN WITH GOOGLE
        </button>
      </Form>
    );
  }
}
