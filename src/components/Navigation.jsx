import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Swirl from "../assets/narutomaki.png"

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Swirl} width="30" height="30" className="d-inline-block align-top" alt="Kio San logo"/>
          Kio San
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/tienda">
              <Nav.Link>Tienda</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>Sobre nosotros</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
