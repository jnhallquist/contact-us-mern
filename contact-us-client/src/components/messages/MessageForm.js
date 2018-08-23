import React, { Component } from 'react';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap';
import validator from 'validator';

export default class MessageForm extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      body: '',
      formErrors: [],
      successfulFormSubmission: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    const validationErrors = [];

    if (validator.isEmpty(this.state.firstName)) {
      validationErrors.push('First Name field cannot be left blank');
    }

    if (validator.isEmpty(this.state.lastName)) {
      validationErrors.push('Last Name field cannot be left blank');
    }

    if (validator.isEmpty(this.state.email)) {
      validationErrors.push('Email field cannot be left blank');
    }

    if (!validator.isEmail(this.state.email)) {
      validationErrors.push('Email Address is invalid');
    }

    if (validator.isEmpty(this.state.body)) {
      validationErrors.push('Body field cannot be left blank');
    }

    if (validationErrors.length === 0) {
      this.handleSubmit();
    } else {
      this.setState({
        formErrors: validationErrors,
        successfulFormSubmission: false 
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.status === 200) {
        this.setState({ formErrors: [], successfulFormSubmission: true })
      }
    })
    .catch((error) => { throw error; });
  }

  render() {
    return (
      <div>
        {this.state.formErrors.length > 0 &&
          <Alert bsStyle='danger'>
            {
              this.state.formErrors.map(
                (msg, index) => (<li key={index}>{msg}</li>)
              )
            }
          </Alert>
        }
        {this.state.successfulFormSubmission &&
          <Alert bsStyle='success'>
            Your message has been sent!
          </Alert>
        }
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup>
            <Col smOffset={2} sm={2}>
              <h3>Contact Form</h3>
            </Col>
          </FormGroup>
          <FormGroup controlId='firstName'>
            <Col componentClass={ControlLabel} sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <FormControl
                name='firstName'
                type='text'
                placeholder='Your first name...'
                defaultValue={this.state.firstName}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId='lastName'>
            <Col componentClass={ControlLabel} sm={2}>
            </Col>
            <Col sm={10}>
              <FormControl
                name='lastName'
                type='text'
                placeholder='Your last name...'
                defaultValue={this.state.lastName}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId='emailAddress'>
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl
                name='email'
                type='email'
                placeholder='Your email address...'
                defaultValue={this.state.email}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId='body'>
            <Col componentClass={ControlLabel} sm={2}>
              Body
            </Col>
            <Col sm={10}>
              <FormControl
                name='body'
                componentClass='textarea'
                placeholder='Your message...'
                defaultValue={this.state.body}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={2}>
              <Button bsStyle='primary' onClick={this.validateForm}>Send</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
