import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const EditModal = ({ editModal, setEditModal }) => {
  return (
    <>
      <Modal show={editModal} size="lg" onHide={() => setEditModal(!editModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Subject</Form.Label>
              <Form.Control placeholder="Enter subject here" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Message</Form.Label>
              <Form.Control placeholder="Enter message here" />
            </Form.Group>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setEditModal(!editModal)}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => setEditModal(!editModal)}
              >
                Update
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
