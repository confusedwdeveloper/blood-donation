import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./SignUpPage.styles.scss";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <Container className="my-5">
      <Row as="section">
        <Col className="text-container mb-5 mb-lg-0" xs={12} lg={4}>
          <h2 style={{ color: "#00214d" }}>Sign Up</h2>
          <div>
            <p className="signup-form--para">
              After you sign up you'll be able to register yourself as a
              volunteer.
            </p>
            <p className="signup-form--para">
              Thank You for helping save a life.
            </p>
          </div>
          <Link to="/login" className="btn btn-info btn-block link-button">
            Already have an account? Sign In
          </Link>
        </Col>
        <Col xs={12} lg={{ span: 6, offset: 2 }}>
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
}
