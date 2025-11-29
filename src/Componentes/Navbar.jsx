import React from 'react'
import { Navbar as RBNavbar, Container, Nav } from 'react-bootstrap'

const Navbar = () => {
    const total = 25000
    const token = false // Simula si el usuario está autenticado o no

    return (
        <RBNavbar bg="dark" variant="dark" expand="lg">
            <Container>
                <RBNavbar.Brand href="#home">Pizzería Mamma Mía</RBNavbar.Brand>
                <RBNavbar.Toggle aria-controls="basic-navbar-nav" />
                <RBNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#profile">Profile</Nav.Link>
                    </Nav>
                    <Nav>
                        {token ? (
                            <Nav.Link href="#logout">Logout</Nav.Link>
                        ) : (
                            <Nav.Link href="#login">Login</Nav.Link>
                        )}
                        <Nav.Link href="#register">Register</Nav.Link>
                        
                    </Nav>
                    <Nav className="justify-content-end">

                        <Nav.Link href="#total">Total: ${total}</Nav.Link>

                    </Nav>

                </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
    )
}

export default Navbar