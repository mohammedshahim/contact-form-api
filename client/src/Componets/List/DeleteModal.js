import React from "react";
import { Button, Modal } from "react-bootstrap";

const DeleteModal = ({ deleteModal, setDeleteModal }) => {
  return (
    <>
      <Modal show={deleteModal} onHide={() => setDeleteModal(!deleteModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, are your sure to delete!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setDeleteModal(!deleteModal)}
          >
            Close
          </Button>
          <Button variant="danger" onClick={() => setDeleteModal(!deleteModal)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
