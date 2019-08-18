import React from 'react';
import './App.css';
import { Form, Button, Row, Col } from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <Form onSubmit={ (e) => this.formSubmit(e)}>
        <Form.Row>
        <Col>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" onChange={e => this.setState({ name: e.target.value })}/>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({ email: e.target.value })}/>
        </Form.Group>
        </Col>
        </Form.Row>
        <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows="3" placeholder='Message' onChange={e => this.setState({ message: e.target.value })}/>
      </Form.Group>
        <Button variant={this.state.buttonvar} type="submit">
          {this.state.buttontext}
        </Button>
      </Form>
    </div>
  );
}

export default App;
