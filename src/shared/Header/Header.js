import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import AuthProvider from '../../Context/AuthProvider';

const Header = () => {
    const {user,logOut} = AuthProvider()
    return (
        <div>
            <Navbar bg="primary" variant="dark" className="text-white">
                <Container>
                
                <Nav className="me-auto">
                <Nav.Link as={HashLink} to="/">Home</Nav.Link>
                <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
                <Nav.Link as={HashLink} to="/dashboard">Dashboard</Nav.Link>
               {user?.displayName && <Nav.Link className="fs-5 text-black fw-bold" as={HashLink} to="/added">{user.displayName}</Nav.Link>}
              {user?.email &&  <Button onClick={logOut} variant="warning">Logout</Button>}
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;