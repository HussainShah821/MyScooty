import React from 'react';
import { Navbar, Container, Nav, NavDropdown, FloatingLabel, Form, InputGroup, Button } from 'react-bootstrap';
import { Telephone } from 'react-bootstrap-icons';
import Logo from '../Images/MyScoot Logo 1 (3) 1.png';
import calendar from '../Images/Vector (1).png';

function MyNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="Nav-bg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className='w-50 Logo' alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Nos modèles" className="mx-2 active" id="nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="La mobilité urbaine" className="mx-2" id="nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Financement" className="mx-2" id="nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Notre société" className="mx-2" id="nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#Phone">
              <InputGroup>
                <InputGroup.Text>
                  <Telephone />
                </InputGroup.Text>
                <FloatingLabel controlId="floatingInputGrid" label="09 53 60 47 57">
                  <Form.Control type="tel" placeholder="Enter your phone number" />
                </FloatingLabel>
              </InputGroup>
            </Nav.Link>
            <Nav.Link eventKey={2} href="reserve">
              <Button variant="primary" className='my-2'>
                <img src={calendar} className="w-50 px-3" alt='calendar' />Réserver
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
