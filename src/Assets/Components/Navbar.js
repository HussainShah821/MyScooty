import React, { useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, FloatingLabel, Form, InputGroup, Button } from 'react-bootstrap';
import { Telephone } from 'react-bootstrap-icons';
import Logo from '../Images/MyScoot Logo 1 (3) 1.png';
import calendar from '../Images/Vector (1).png';
import { Link } from 'react-router-dom';
import AOS from 'aos';

function MyNavbar() {
  useEffect(()=>{
    AOS.init({duration:1500})},[]);
  
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="Nav-bg">
      <Container>
        <Navbar.Brand href="#home">
          <Link to = "/"><img src={Logo} className='w-50 Logo' alt='logo' /></Link>
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
            <Nav.Link href="#Phone" data-aos="fade-down">
            <Button className=' phone-button'><Telephone />   09 53 60 47 57</Button>{' '}

            </Nav.Link>
            <Nav.Link eventKey={2} href="reserve" data-aos="fade-up">
              <Button variant="primary" className=' bookbutton'>
                <img src={calendar} className="button-txt px-3" alt='calendar' />Réserver
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <h5 className='text-white nano'>Nano 300 Watts</h5>
     </>
  );
}

export default MyNavbar;
