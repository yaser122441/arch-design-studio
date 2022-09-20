import React from "react";
import CardComponent from "./CardComponent";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import "../../css/rtl.scss";

const Main = ({ dir }) => {
  return (
    <section className="aramain__section" dir={dir}>
      <Container fluid className="aramain__container">
        <Title />
        <Row className="araimg__row">
          <Col className="title__col d-none d-md-block"></Col>
          <Col sm={12} md={6} className="araimg__col"></Col>
        </Row>
        <Row className="aracard__row">
          <Col className="aracard__col col-sm-8 col-md-5 col-lg-3">
            <CardComponent
              img={require("../../Assets/blueprint.png")}
              title={"تصميم و تخطيط"}
              text={"سهولة تامة في تنفيذ التصاميم"}
            />
          </Col>
          <Col className="aracard__col col-sm-8 col-md-5 col-lg-3">
            <CardComponent
              img={require("../../Assets/sofa.png")}
              title={"تصميم داخلي"}
              text={"التصميم الداخلي بات من اسهل المراحل في عملية التصميم"}
            />
          </Col>
          <Col className="aracard__col col-sm-8 col-md-5 col-lg-3">
            <CardComponent
              img={require("../../Assets/paint-brush.png")}
              title={"التصميم الخارجي"}
              text={"التصميم الخارجي بات من اسهل المراحل في عملية التصميم"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
