import React, {useState} from 'react';
import { Container, Row, Col, Form, Button, Navbar, Nav } from "react-bootstrap";

const Home = () => {
    return (
        <div>
            <h1>Welcome to Time Block Home Page</h1>

            <Nav.Link href="/admin/login">Login</Nav.Link>
            <Nav.Link href="/admin/register">Register</Nav.Link>
        </div>
    )
}

export default Home
