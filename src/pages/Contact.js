import React from "react";
import Title from "../components/Title";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Validation from "./Contact_sections/Validation";

function Contact(props) {
  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (data) => {
    alert("Thank you for your message!");

    reset();
  };

  return (
    <section className="container-fluid container-contact">
      <Title title="Contact" />
      <div className="wrap-contact">
        <div className="contact-form">
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <span className="contact100-form-title">Send Us A Message</span>
            <Form.Group controlId="formBasicEmail" className="wrap-input">
              <Form.Label>Full name *</Form.Label>
              <Validation className="validate-input" isValid={errors.fullName}>
                <Form.Control
                  className="input100"
                  type="text"
                  placeholder="Enter your name..."
                  name="fullName"
                  ref={register({ required: true })}
                />
                <span className="focus-input100"></span>
              </Validation>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="wrap-input">
              <Form.Label>Email address *</Form.Label>
              <Validation className="validate-input" isValid={errors.email}>
                <Form.Control
                  type="email"
                  placeholder="Enter your email..."
                  className="input100"
                  name="email"
                  ref={register({ required: true })}
                />
                <span className="focus-input100"></span>
              </Validation>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="wrap-input">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                className="input100"
                name="phoneNumber"
              />
              <span className="focus-input100"></span>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="wrap-input"
            >
              <Form.Label>Message *</Form.Label>
              <Validation className="validate-input" isValid={errors.textArea}>
                <Form.Control
                  as="textarea"
                  rows="3"
                  className="input100"
                  name="textArea"
                  ref={register({ required: true })}
                />
                <span className="focus-input100"></span>
              </Validation>
            </Form.Group>
            <div className="container-contact-form-btn">
              <Button variant="primary" type="submit" id="contact-form-btn">
                Send
              </Button>
            </div>
          </Form>
        </div>
        <div className="contact-side"></div>
      </div>
    </section>
  );
}

export default Contact;
