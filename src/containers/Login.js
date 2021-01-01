import React ,{useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../libs/hooksLib"
import "./Login.css";

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
        const res = await fetch('http://127.0.0.1:8000/api/login/', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-type': 'application/json'
            },
            body: JSON.stringify(fields)
      
          })
        console.log(await res.json());
      }catch(err){
        console.log(err)
      }
  
        
    }
    return (
        <div className="Login">
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