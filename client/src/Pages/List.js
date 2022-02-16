import React, { useState } from "react";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import DeleteModal from "../Componets/List/DeleteModal";
import EditModal from "../Componets/List/EditModal";

const List = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md="8">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Mobile</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={() => setEditModal(!editModal)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => setDeleteModal(!deleteModal)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <Button variant="info">Edit</Button>{" "}
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <DeleteModal deleteModal={deleteModal} setDeleteModal={setDeleteModal} />
      <EditModal editModal={editModal} setEditModal={setEditModal} />
    </>
  );
};

export default List;
