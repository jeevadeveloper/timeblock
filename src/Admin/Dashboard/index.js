import React, {useState} from 'react';
import { Container, Row, Col, Form, Button, Navbar, Nav } from "react-bootstrap";
import { getUserDetails,logOut,addCategory,getCategory } from "./../../config/firebase";
import { useNavigate, Navigate } from "react-router-dom";
import { getStore } from "./../../redux/store";
import { toast } from "react-toastify";
const Dashboard = () => {
    const[category,setCategory] = useState("");
    const[categoryArray,setCategoryArray] = useState([]);
    const[counter,setCounter] = useState(0);
    if(!getUserDetails()) {
        return <Navigate to="/admin/login" />
    }
    
    const getCategoryData = () => {
        if(getStore().auth[0].isLoggedIn){
            var cat = getCategory(getStore().auth[0].user_id);
           setTimeout(() => {
            setCounter(counter => counter+1)
            setCategoryArray(cat)
           }, 200);
        }
    }
    //getCategoryData()
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!category) return toast.info("Please add Category");
        addCategory(category,getStore().auth[0].user_id).then((res)=>{
            toast.success("category added successfully");
            getCategoryData();
        }).catch((err)=>{
        })
        //register users
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
                <Container className="fltLeftEnd w50">
            <Row>
                <h1 className="font-weight-bold text-center py-5">
                    Add Category {" "}
                    <span className="text-primary"></span>{" "}
                </h1>
            </Row>
            <Col md={6} sm={12} xm={12} className="mx-auto my-5">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId={"CategoryGroup"} className="my-2">
                         <Form.Control type="text" placeholder={"Category"} value={category}
                                  onChange={e=>setCategory(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId={"submitGroup"} className="mt-5">
                        <Button type="submit" variant={"dark"} bg="dark" className="form-control">Add</Button>
                    </Form.Group>
                </Form>
            </Col>
        </Container>

        <Container className="fltLeftEnd w50">
            <Row>
                <h1 className="font-weight-bold text-center py-5">
                    Category {" "}
                    <span className="text-primary"></span>{" "}
                </h1>
            </Row>
            <Col md={6} sm={12} xm={12} className="mx-auto my-5">
                
                {categoryArray.map(name => (
        <li>
          {name}
        </li>
      ))}
            </Col>
        </Container>

        </div>
    )
}

export default Dashboard
