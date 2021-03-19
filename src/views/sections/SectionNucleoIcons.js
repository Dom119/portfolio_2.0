import React from "react";

import { Button, Container, Row, Col } from "reactstrap";
import Progress from "reactstrap/lib/Progress";


export default function SectionNucleoIcons() {
  return (
    <>
      <div className="section section-dark section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title mb-0">About Me</h2>
              <br />
              <div className="description mb-3 " style={{ color: "white" }}>
                Hi, My name is Dom, and I am a self-taught programmer.
              </div>
              <div className="description mb-3" style={{ color: "white" }}>
                I focused on doing full-stack web application. Most of the apps in this portfolio were written in React / Nodejs / Express and MongoDB.
              </div>
              <div className="description mb-3" style={{ color: "white" }}>
                At the moment, I am working on my own project written in ASP.NET / C# and React / Reactstrap.
              </div>
              <div className="description mb-3" style={{ color: "white" }}>
                I am actively searching for a full-time position at the moment. If you are interested in my projects, please feel free to contact me through below contact form.
              </div>
              <div className="description mb-3" style={{ color: "white" }}>
                Thank you and Happy Coding!
              </div>
              <div className="description" style={{ color: "white" }}>
                Dom
              </div>
              <br />

              <Button
                className="btn-round ml-1"
                color="danger"
                href="CV.html"
                outline
                target="_blank"
              >
                View My CV
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container " >

                <i className="fab fa-angular" />
                <i className="fab fa-html5" />
                <i className="fab fa-css3-alt" />
                <i className="fab fa-js" />
                <i className="fab fa-node" />
                <i className="fab fa-react" />
                <i className="fab fa-node-js" />
                <i className="fab fa-docker" />
                <i className="fab fa-hotjar" />
                <i className="fas fa-dev" />
                <i className="fas fa-database" />
                <i className="fab fa-facebook" />
                <i className="fab fa-free-code-camp" />
                <i className="fab fa-hubspot" />
                <i className="fab fa-github" />

              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

