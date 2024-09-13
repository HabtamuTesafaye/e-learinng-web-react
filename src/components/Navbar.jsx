import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Import NavLink for active link styling
import logo from '../assets/images/logo2.jpg'; // Replace with your logo image


const MyNavbar = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="navbar-custom sticky-top">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="navbar-brand">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="mx-auto navbar-text">
            <Nav.Link as={NavLink} to="/" exact className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/my-courses" className="nav-link-custom">My Courses</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex ms-auto">
          <Button as={NavLink} to="/login" variant="outline-dark" className="me-2 navbar-button">Login</Button>
          <Button as={NavLink} to="/register" variant="dark" className="navbar-button">Register</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
