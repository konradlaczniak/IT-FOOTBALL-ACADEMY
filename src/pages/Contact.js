import React from "react";
import Title from "../components/Title";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Contact(props) {
  return (
    <section className="container-fluid container-contact">
      <Title title="Contact" />
      <div className="wrap-contact">
        <div className="contact-form">
          <Form>
            <span class="contact100-form-title">Send Us A Message</span>
            <Form.Group controlId="formBasicEmail" className="wrap-input">
              <Form.Label>Full name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name..."
                className="input100"
              />
              <span className="focus-input100"></span>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="wrap-input">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email..."
                className="input100"
              />
              <span className="focus-input100"></span>
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="wrap-input">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your phone number"
                className="input100"
              />
              <span className="focus-input100"></span>
            </Form.Group>

            {/* <Form.Group
              controlId="exampleForm.ControlSelect1"
              className="wrap-input"
            >
              <Form.Label>What do you need?</Form.Label>
              <Form.Control as="select" className="input100" id="input-select">
                <option>Become a player</option>
                <option>Become a coach</option>
                <option>Become a sponsor</option>
                <option>Become a partner</option>
                <option>Other topics</option>
              </Form.Control>
              <span className="focus-input100"></span>
            </Form.Group> */}
            <Form.Group
              controlId="exampleForm.ControlTextarea1"
              className="wrap-input"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows="3" className="input100" />
              <span className="focus-input100"></span>
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
