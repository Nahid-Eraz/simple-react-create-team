import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="nav-hover">
            <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
                <Navbar.Brand href="#home">PL Dream Eleven</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Player</Nav.Link>
                        <NavDropdown title="Fantasy" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Point</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Pick Team</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Transfer</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Official PL Podcast</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Sign Up</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Log In
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;