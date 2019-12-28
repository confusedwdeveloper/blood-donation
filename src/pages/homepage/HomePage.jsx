import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Introduction from "../../components/introduction/Introduction";

import "./HomePage.styles.scss";
import img from "../../assets/donatingblood.jpg";

export default function HomePage() {
  return (
    <article className="home-page">
      <Container>
        <Row>
          <Col className="col-introduction" lg={6}>
            <Introduction />
          </Col>
          <Col
            className="d-none d-lg-block col-image"
            lg={{ span: 3, offset: 2 }}
          >
            <div className="image-container">
              <Image fluid rounded src={img} />
            </div>
          </Col>
        </Row>
      </Container>
    </article>
  );
}
