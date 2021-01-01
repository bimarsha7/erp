import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
// import LoaderButton from "../components/LoaderButton";
// import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
// import { onError } from "../libs/errorLib";
import "./Signup.css";
import Button from "react-bootstrap/Button";
// import useSignUpForm from "../libs/customhooks";

export default function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }
  function handleSubmit(event) {
    event.preventDefault();

    // setIsLoading(true);

    // setNewUser("test");

    // setIsLoading(false);
  }
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" size="lg">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="password" size="lg">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" size="lg">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            onChange={handleFieldChange}
            value={fields.confirmPassword}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
                Signup
        </Button>
      </Form>
    </div>
  );
}

