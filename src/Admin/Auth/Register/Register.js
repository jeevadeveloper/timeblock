import React, {useState} from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { signUp, updateProfileData, getUserDetails } from "./../../../config/firebase";
import {useDispatch} from "react-redux";
import { loginUser } from '../../../redux/actionCreators/authActionCreators';
import { useNavigate, Navigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[repassword,setRePassword] = useState("");

    if(getUserDetails()) {
        return <Navigate to="/admin/dashboard" />
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!name || !email || !password || !repassword) return toast.info("Please fill in all fields");

        if(password.length<9) return toast.info("password must be greater than or equal to 9");

        if(password !== repassword) return toast.info("password doesnot match");

        //register user
            
        signUp(email,password).then((response) => {
            const data = {
                user: response.user.displayName,
                id: response.user.uid
            }
                    updateProfileData(name).then((response)=>{
                        dispatch(loginUser(data));
                        navigate("/admin/dashboard");
                        toast.success("user added successfully");
                    })
                    .error((err)=>{
                        toast.error("Failed to update profile");
                    })
                    
          }).catch((error) => {
              if(error.code === "auth/email-already-in-use"){
                    toast.error("Email already exists");
              }
          }) 
    }

    return (
        
        <Container>
            <Row>
                <h1 className="font-weight-bold text-center py-5">
                    Sign Up {" "}
                    <span className="text-primary"></span>{" "}
                </h1>
            </Row>
            <Col md={6} sm={12} xm={12} className="mx-auto my-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId={"fullNameGroup"} className="my-2">
                         <Form.Control type="text" placeholder={"Full Name"} value={name}
                                  onChange={e=>setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId={"emailGroup"} className="my-2">
                         <Form.Control type="email" placeholder={"Email"} value={email}
                                  onChange={e=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId={"passwordGroup"} className="my-2">
                         <Form.Control type="password" placeholder={"Password"} value={password}
                                  onChange={e=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId={"confirmPasswordGroup"} className="my-2">
                        <Form.Control type="password" placeholder={"Re-type Password"} value={repassword}
                                  onChange={e=>setRePassword(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId={"submitGroup"} className="mt-5">
                        <Button type="submit" variant={"dark"} bg="dark" className="form-control">Register</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Container>
    )
}

export default Register
