import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../helpers/axiosHelper";
import { toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const handleOnLogin = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const { status, message, user } = await loginUser({ email, password });

    toast[status](message);

    if (status === "success") {
      sessionStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    }
  };
  return (
    <div className="login-page d-flex justify-content-center pt-5 ">
      <div className="login-form border bg-white p-5 shadow-lg rounded">
        <h3>Welcome back</h3>
        <Form onSubmit={handleOnLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              ref={emailRef}
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />
          </Form.Group>

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>

        <div className="text-end  ">
          New here? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
