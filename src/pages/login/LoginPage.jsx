import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SignInForm from "../../components/SignInForm/SignInForm";
import { Link } from "react-router-dom";

import "./LoginPage.styles.scss";

export default function LoginPage() {
  return (
    <Container className="my-5">
      <Row as="section">
        <Col
          id="login-container"
          className="text-container mb-5 mb-lg-0"
          xs={12}
          lg={4}
        >
          <h2 style={{ color: "#00214d" }}>Sign In</h2>
          <div>
            <p className="signup-form--para login-age--para">
              Sign in with your email address and password. After your identity
              is verified you will be redirected to dashboard
            </p>
          </div>
          <Link to="/login" className="btn btn-info btn-block link-button">
            Don't have an account? Sign Up!
          </Link>
        </Col>
        <Col xs={12} lg={{ span: 6, offset: 2 }} className="mt-3 mt-lg-0">
          <SignInForm />
        </Col>
      </Row>
    </Container>
  );
}
