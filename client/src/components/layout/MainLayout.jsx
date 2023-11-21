import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const MainLayout = ({ children, isLoggedIn, setIsLoggedIn }) => {
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <div className="main">
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
