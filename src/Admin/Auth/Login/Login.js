import React, {useState} from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { logIn, getUserDetails } from "./../../../config/firebase";
import {useDispatch} from "react-redux";
import { loginUser } from '../../../redux/actionCreators/authActionCreators';
import { useNavigate, Navigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[email,setEmail] = useState("");
    const[pass,setPass] = useState("");
    
    if(getUserDetails()) {
        return <Navigate to="/admin/dashboard" />
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email || !pass) return toast.info("Please fill in all fields");

        if(pass.length<9) return toast.info("password must be greater than or equal to 9");

        //register user
            
        logIn(email,pass).then((response) => {
            const data = {
                user: response.user.displayName,
                id: response.user.uid
            }
            dispatch(loginUser(data));
            navigate("/admin/dashboard");
            toast.success("user loggedin successfully");
        }).catch((error) => {
            console.log(error);
            toast.error("Email and password mismatch");
        }) 
    }

    return (
        <Container>
        <Row>
            <h1 className="font-weight-bold text-center py-5">
                Log In {" "}
                <span className="text-primary"></span>{" "}
            </h1>
        </Row>
        <Col md={6} sm={12} xm={12} className="mx-auto my-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId={"emailGroup"} className="my-2">
                     <Form.Control type="email" placeholder={"Email"} value={email}
                                  onChange={e=>setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId={"passwordGroup"} className="my-2">
                     <Form.Control type="password" placeholder={"Password"} value={pass}
                                  onChange={e=>setPass(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId={"submitGroup"} className="mt-5">
                    <Button type="submit" variant={"dark"} bg="dark" className="form-control">Login</Button>
                </Form.Group>
            </Form>
        </Col>
    </Container>
    )
}

export default Login
