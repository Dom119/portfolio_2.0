import React from 'react'
import Col from 'reactstrap/lib/Col'
import Container from 'reactstrap/lib/Container'
import Progress from 'reactstrap/lib/Progress'
import Row from 'reactstrap/lib/Row'

export default () => {
  return (
    <div className="section section-dark section-nucleo-icons">
      <Container>
        <Row>
          <Col lg="6" md="12">
            <h2 className="title">My Skills</h2>
          </Col>
          <Col lg="6" md="12"></Col>
        </Row>


        <Row className="mb-3">
          <Col>
            <div style={{ color: "white" }}>CSS/SCSS</div>
            <Progress value={90} color="primary"></Progress>
          </Col>
        </Row >

        <Row className="mb-3">
          <Col>
            <div style={{ color: "white" }}>Bootstrap / Reactstrap</div>
            <Progress value={80} color="primary"></Progress>
          </Col>
        </Row >

        <Row className="mb-3">
          <Col>
            <div style={{ color: "white" }}>JavaScript</div>
            <Progress value={95} color="primary"></Progress>
          </Col>
        </Row >

        <Row className="mb-3">
          <Col>
            <div style={{ color: "white" }}>React / Redux</div>
            <Progress value={80} color="primary"></Progress>
          </Col>
        </Row >

        <Row className="mb-3">
          <Col>
            <div style={{ color: "white" }}>Hooks / Context API</div>
            <Progress value={83} color="primary"></Progress>
          </Col>
        </Row >

        <Row className="mb-3">
          <Col>
            <div style={{ color: "white" }}>Nodejs / Express</div>
            <Progress value={75} color="primary"></Progress>
          </Col>
        </Row >

        <Row className="mb-3">
          <Col>
            <div style={{ color: "white" }}>MongoDB / MySQL</div>
            <Progress value={78} color="primary"></Progress>
          </Col>
        </Row >

        <Row className="mb-3">
          <Col>
            <div style={{ color: "white" }}>C# / ASP.NET</div>
            <Progress value={65} color="primary"></Progress>
          </Col>
        </Row >

      </Container>
    </div>
  )
}
