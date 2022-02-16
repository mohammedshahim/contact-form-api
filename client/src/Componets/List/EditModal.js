import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";

const EditModal = ({
  editModal,
  setEditModal,
  editData,
  setEditData,
  editHandler,
}) => {
  return (
    <>
      <Modal show={editModal} size="lg" onHide={() => setEditModal(!editModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={editHandler}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.firstName}
                  placeholder="Enter first name"
                  onChange={(e) =>
                    setEditData({ ...editData, firstName: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.lastName}
                  placeholder="Enter last name"
                  onChange={(e) =>
                    setEditData({ ...editData, lastName: e.target.value })
                  }
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={editData.email}
                  placeholder="Enter email"
                  onChange={(e) =>
                    setEditData({ ...editData, email: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  value={editData.phone}
                  placeholder="Enter phone number"
                  onChange={(e) =>
                    setEditData({ ...editData, phone: e.target.value })
                  }
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                value={editData.subject}
                placeholder="Enter subject here"
                onChange={(e) =>
                  setEditData({ ...editData, subject: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Message</Form.Label>
              <Form.Control
                value={editData.message}
                placeholder="Enter message here"
                onChange={(e) =>
                  setEditData({ ...editData, message: e.target.value })
                }
              />
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
                type="submit"
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
