import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>Contact Form</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="boxhead">
                Form
              </NavLink>
              <NavLink to="/all">List</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
