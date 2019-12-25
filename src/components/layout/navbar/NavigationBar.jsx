import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { auth } from "../../../firebase/firebase.utils";

import "./NavigationBar.styles.scss";

export default function NavigationBar({ user }) {
  return (
    <Navbar expand="lg" className="bg-secondary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="link" to="/">
            Donate Blood
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {user ? (
            <Nav as="div" className="ml-lg-auto">
              <Nav.Link as={Link} className="link" to="/register">
                Register to donate
              </Nav.Link>
              <Nav.Link as="div" className="link">
                Logout
              </Nav.Link>
              <Nav.Link as="span" className="link ml-lg-5">
                Hello Darshan
              </Nav.Link>
            </Nav>
          ) : (
            <Nav as="div" className="ml-lg-auto">
              <Nav.Link as={Link} className="link" to="/signup">
                Sign Up
              </Nav.Link>
              <Nav.Link as={Link} className="link" to="/login">
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Set up event listener for sign up handler . I will try if async await works
const signUp = async () => {
  // I will fill it later after I am done with homepage and dashboard
};
