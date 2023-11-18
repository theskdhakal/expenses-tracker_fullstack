import React from "react";
import { Header } from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <div className="main">
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
