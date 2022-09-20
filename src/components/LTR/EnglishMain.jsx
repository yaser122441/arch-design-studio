import React from "react";
import "../../css/ltr.scss";
import CardComponent from "./CardComponent";
import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";

const Main = ({ dir }) => {
  return (
    <section className="main__section" dir={dir}>
      <Container fluid className="main__container ">
        <Title />
        <Row className="img__row">
          <Col sm={12} md={6} className="img__col"></Col>
          <Col className="title__col d-none d-md-block"></Col>
        </Row>

        <Row className="card__row">
          <Col className="card__col col-sm-8 col-md-5 col-lg-3">
            <CardComponent
              img={require("../../Assets/blueprint.png")}
              title={"Design & Planning"}
              text={"Lorem ipsum dolor sit amet"}
            />
          </Col>
          <Col className="card__col col-sm-8 col-md-5 col-lg-3">
            <CardComponent
              img={require("../../Assets/sofa.png")}
              title={"Interior Design"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            />
          </Col>
          <Col className="card__col col-sm-8 col-md-5 col-lg-3">
            <CardComponent
              img={require("../../Assets/paint-brush.png")}
              title={"Exterior Design"}
              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
