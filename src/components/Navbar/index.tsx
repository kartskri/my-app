import React from "react";
import {Container, Nav, Navbar, NavDropdown, Offcanvas} from "react-bootstrap";

export default function AppNavbar() {
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand+""} bg="light">
                    <Container>
                        <Navbar.Brand href="#">Invest In That</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    User Actions
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/about">About</Nav.Link>
                                    <Nav.Link href="/contact">Contact</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="/about">About</NavDropdown.Item>
                                        <NavDropdown.Item href="/contact">
                                            Contact
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}