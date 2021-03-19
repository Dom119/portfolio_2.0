import React from 'react'
import Button from 'reactstrap/lib/Button'
import Col from 'reactstrap/lib/Col'
import Container from 'reactstrap/lib/Container'
import Form from 'reactstrap/lib/Form'
import FormGroup from 'reactstrap/lib/FormGroup'
import FormText from 'reactstrap/lib/FormText'
import Input from 'reactstrap/lib/Input'
import Label from 'reactstrap/lib/Label'
import Row from 'reactstrap/lib/Row'

export default () => {

  const onSubmit = () => {
    // checking name
    // checking email
    // checking text
    // pop up thank you message
  }

  return (
    <div className="section section-white">
      <Container>
        <Row>
          <Col>
            <h2 className="title mb-0">Contact</h2>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Name</Label>
                <Input type="text" name="text" id="senderName" placeholder="Please enter your name..." />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="senderEmail" placeholder="Please enter your email..." />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="senderContent" />
              </FormGroup>
              <Button onClick={() => onSubmit()} className="btn-primary">Send</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
