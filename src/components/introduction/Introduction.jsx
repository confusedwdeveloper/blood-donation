import React from "react";
import "./Introduction.styles.scss";
import { Link } from "react-router-dom";

export default function Introduction() {
  return (
    <section className="introduction">
      <h1 className="title">Donate Blood Save Lives</h1>
      <p className="home-page-pars">
        Help us save life by volunteering to donate blood. You can register for
        the event after you create an account. We will never share your data
        with anyone.
      </p>

      <Link className="homepage-link" to="/signup">
        SIGN IN WITH GOOGLE
      </Link>
    </section>
  );
}
