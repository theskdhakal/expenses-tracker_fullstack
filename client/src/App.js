import "./App.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./components/layout/MainLayout";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </MainLayout>

      <ToastContainer />
    </>
  );
}

export default App;
