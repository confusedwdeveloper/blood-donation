import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { isSignUpInputsValid } from "../../firebase/signInFunctions";
import { auth, firestore } from "../../firebase/firebase.utils";

import "./SignUpForm.styles.scss";
import CustomButton from "../layout/custom-button/CustomButton";

export default class SignUpForm extends Component {
  state = {
    validated: false,
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  handleSubmit = async e => {
    e.preventDefault();
    if (!isSignUpInputsValid(this.state)) {
      await this.setState({ validated: true });
      return;
    }
    try {
      const { email, password, firstName, lastName } = this.state;
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = userCredential;
      const documentReference = firestore.doc(`users/${user.uid}`);
      const snapShot = documentReference.get();
      !snapShot.exists &&
        (await documentReference.set({
          email,
          displayName: firstName + " " + lastName,
          createdAt: new Date()
        }));
      await user.sendEmailVerification();
      user.updateProfile({
        displayName: firstName + " " + lastName
      });
    } catch (e) {
      console.log(`Error: ${e.message}`);
    }
  };
  handleChange = e => {
    const { name, value } = e.target;
    if (name === "firstName" || name === "lastName") {
      this.setState({ [name]: value.trim() });
    } else {
      this.setState({ [name]: value });
    }
  };

  render() {
    return (
      <Form
        className="text-left"
        noValidate
        validated={this.state.validated}
        onSubmit={this.handleSubmit}
      >
        <Form.Row>
          <Form.Group as={Col} xs={12} lg={6} controlId="first-name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="firstName"
              placeholder="First name"
              onChange={this.handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your first name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} lg={6} controlId="last-name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lastName"
              placeholder="Last name"
              onChange={this.handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter your last name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} controlId="email">
            <Form.Label>Email address </Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter valid email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} xs={12} controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              required
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please enter valid and strong password
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <CustomButton className="px-3" type="submit" variant="info">
          Sign Up
        </CustomButton>
      </Form>
    );
  }
}
