import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationBar extends React.Component<{}, {}>{
  render() {
    return (
      <div>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="/home">Site Brand</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavigationBar;