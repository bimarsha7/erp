import React ,{useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../libs/hooksLib"
import "./Login.css";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

import {isAutheticated} from "../Routes"
import Profile from "./Profile"
import Dashboard from "../admin/Dashboard"
import Auth from '../component/auth';



export default function Login() {
    const history = useHistory();
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [fields, handleFieldChange] = useFormFields({
      email: "",
      password: ""
    });
    
    function validateForm(){
        return fields.email.length > 0 && fields.password.length > 0;
    }
    async function handleSubmit(event) {
      event.preventDefault();
      
      try{
        let res = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body: JSON.stringify(fields)
      
          })
        res = await res.json();
        
        
        Auth.login(()=>{
          localStorage.setItem('access', res.tokens.access)
          localStorage.setItem('refresh', res.tokens.refresh)
          history.push("/profile")
        })
        
        // history.push("/profile")
        console.log(res)
      }catch(err){
        console.log(err)
      }   
    }
    
    return (
        <div className="Login">
          {/* <Navbar>
          <LinkContainer to="/">
        <Navbar.Brand href="/" className="font-weight-bold text-muted">
          ERP System
        </Navbar.Brand>
        </LinkContainer>
        </Navbar> */}
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={fields.email}
                onChange={handleFieldChange}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={fields.password}
                onChange={handleFieldChange}
              />
            </Form.Group>
            
            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Login
            </Button>
          </Form>
        </div>
      );   
}