import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnRegister = (e) => {
    e.preventDefault();

    console.log(form);

    if (form.password === form.confirmPassword) {
      console.log("password matches");
    } else {
      console.log("didnt match");
    }

    toast.success("user info sent to console");
    setForm({
      confirmPassword: "",
      email: "",
      fName: "",
      lName: "",
      password: "",
    });
  };
  return (
    <div className="regsiter-page d-flex justify-content-center pt-5 ">
      <div className="register-form bg-white border p-5 shadow-lg rounded">
        <h3>Register your details</h3>
        <Form onSubmit={handleOnRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="fName"
              placeholder="Enter email"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lName"
              placeholder="Enter last name"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleOnChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              type="password"
              placeholder="Password"
              onChange={handleOnChange}
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Register
            </Button>
          </div>
        </Form>

        <div className="text-end">
          Already have account?<Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
