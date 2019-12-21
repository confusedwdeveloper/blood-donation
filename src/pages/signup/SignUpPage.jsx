import React from "react";
import Container from "react-bootstrap/Container";

import "./SignUpPage.styles.scss";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function SignUpPage() {
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
}
