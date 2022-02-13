import React from 'react'

import { Routes,Route } from "react-router-dom";

import Login from "./Auth/Login/Login";
import Register from "./Auth/Register/Register";
import Dashboard from "./Dashboard"
const Admin = () => {

    
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/dashboard" element={<Dashboard/>}></Route>
            </Routes>
        </div>
    )
}

export default Admin;
