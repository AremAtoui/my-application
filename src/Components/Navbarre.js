import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbarre() {
  return (
    <div>
         {/* NAVBAR */}
  <Navbar bg="light" expand="lg">
      <Container fluid>
        <img  className="Na" src="data:image/jpeg;base64,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"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1"><Link style={{textDecoration:"none", color:"black"}} to="/">Home</Link></Nav.Link>
            <Nav.Link href="#action2"><Link style={{textDecoration:"none", color:"black"}} to="/parfums">Parfums</Link></Nav.Link>
            <Nav.Link href="#action2"><Link  style={{textDecoration:"none", color:"black"}}to="/contact">contact</Link></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarre