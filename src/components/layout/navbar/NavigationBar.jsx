import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../../firebase/firebase.utils";
import { connect } from "react-redux";

import "./NavigationBar.styles.scss";

function NavigationBar({ user }) {
  const history = useHistory();
  const handleSignOut = async e => {
    await auth.signOut();
    history.push("/");
  };

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
              <Nav.Link as={Link} className="link" to="/dashboard">
                Register to donate
              </Nav.Link>
              <Nav.Link onClick={handleSignOut} as="div" className="link">
                Logout
              </Nav.Link>
              <Nav.Link as="span" className="link ml-lg-5">
                Hello {user.displayName}
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

const mapStateToProps = state => ({ user: state.auth.user });

export default connect(mapStateToProps, null)(NavigationBar);
