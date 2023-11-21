import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

export const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleOnLogout = () => {
    sessionStorage.removeItem("user");
    setIsLoggedIn(false);
  };
  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link text-white">
            Expenses Tracker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="nav-link text-white">
                  Login
                </Link>
                <Link to="/register" className="nav-link text-white">
                  Register
                </Link>
              </>
            ) : (
              <Link to="/login" onClick={handleOnLogout}>
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
