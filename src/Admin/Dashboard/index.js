import React from 'react'
import { Container, Navbar, Nav } from "react-bootstrap";
import { getUserDetails,logOut } from "./../../config/firebase";
import { useNavigate, Navigate } from "react-router-dom";
import { getStore } from "./../../redux/store";
const Dashboard = () => {
    const navigate = useNavigate();
    console.log(getStore())
    if(!getUserDetails()) {
        return <Navigate to="/admin/login" />
    }
    
    return (
        <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <div className="fltRightEnd">
                    <a className="logout" onClick={logOut}>SignOut</a>
                    </div>
                    </Container>
                </Navbar>
        </div>
    )
}

export default Dashboard
