import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../pages/userState/userSlice";
import { userLogoutAction } from "../../pages/userState/userAction";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  console.log(user);

  const handleOnLogout = () => {
    dispatch(userLogoutAction());
  };
  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link text-white">
            Expenses Tracker
          </Link>
        </Navbar.Brand>
        <div className="text-end"> Welcome {user.lName}</div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            {!user._id ? (
              <>
                <Link to="/login" className="nav-link text-white">
                  Login
                </Link>
                <Link to="/register" className="nav-link text-white">
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/login"
                className="nav-link text-white"
                onClick={handleOnLogout}
              >
                Logout
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
