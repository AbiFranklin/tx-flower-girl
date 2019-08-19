import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios'


class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      buttontext: 'Submit',
      buttonvar: 'primary',
      name: '',
      message: '',
      email: '',
      sent: false
    }
  }

  formSubmit = (e) => {
    e.preventDefault()
  
    this.setState({
        buttontext: '...Sending',
        buttonvar: 'secondary'
    })
  
    let data = {
        "name": this.state.name,
        "email": this.state.email,
        "message": this.state.message
    }
    
    axios.post("https://tx-flower-girl-node-api.abifranklin.now.sh/", data)
    .then( res => {
        this.setState({ sent: true }, this.resetForm())
    })
    .catch( () => {
      console.log('Message not sent')
    })
  }


  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttontext: 'Sent!',
        buttonvar: 'success'
    })
  }

  render() {
    return (
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
            <Form.Control type="email" placeholder="Enter email" onChange={e => this.setState({ email: e.target.value })} onSubmit={e => e.target.value = ''}/>
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
    );
  }
}

export default ContactForm;