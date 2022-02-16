import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import api from "../config/api";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [details, setDetails] = useState(initialFormState);

  const submitHandler = async (e) => {
    e.preventDefault();
    //do action here to create a new contact
    try {
      const res = await api.post("/form", details);
      setDetails(initialFormState);
      e.target.reset();
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>Contact Form</Card.Header>
              <Card.Body>
                <Form onSubmit={submitHandler}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        onChange={(e) =>
                          setDetails({ ...details, firstName: e.target.value })
                        }
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        onChange={(e) =>
                          setDetails({ ...details, lastName: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={(e) =>
                          setDetails({ ...details, email: e.target.value })
                        }
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                        onChange={(e) =>
                          setDetails({ ...details, phone: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      placeholder="Enter subject here"
                      onChange={(e) =>
                        setDetails({ ...details, subject: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      placeholder="Enter message here"
                      onChange={(e) =>
                        setDetails({ ...details, message: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactForm;
