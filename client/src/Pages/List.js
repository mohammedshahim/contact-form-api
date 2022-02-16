import React, { useEffect, useState } from "react";
import { Table, Container, Row, Col, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import DeleteModal from "../Componets/List/DeleteModal";
import EditModal from "../Componets/List/EditModal";
import api from "../config/api";

const List = () => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [editData, setEditData] = useState({});
  const [deleteData, setDeleteData] = useState({});

  // To get all contacts at initial load and any update in contacts
  const getAllForms = async () => {
    const res = await api.get("/form");
    if (res.data.success) {
      setContacts(res.data.data);
    } else {
      toast.error("Something went wrong");
    }
  };

  // Handler to update a specific contact
  const editHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/form?formId=${editData._id}`, editData);
      if (res.data.success) {
        toast.success(res.data.message);
        setEditModal(false);
        getAllForms();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  // Handler to delete a specific contact
  const deleteHandler = async () => {
    try {
      const res = await api.delete(`/form?formId=${deleteData._id}`);
      if (res.data.success) {
        toast.info(res.data.message);
        setDeleteModal(false);
        getAllForms();
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    getAllForms();
  }, []);

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
                {contacts.map((contact, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Button
                        variant="info"
                        onClick={() => {
                          setEditData(contact);
                          setEditModal(!editModal);
                        }}
                      >
                        Edit
                      </Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => {
                          setDeleteData(contact);
                          setDeleteModal(!deleteModal);
                        }}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <EditModal
        editModal={editModal}
        setEditModal={setEditModal}
        editData={editData}
        setEditData={setEditData}
        editHandler={editHandler}
      />
      <DeleteModal
        deleteModal={deleteModal}
        setDeleteModal={setDeleteModal}
        deleteHandler={deleteHandler}
      />
    </>
  );
};

export default List;
