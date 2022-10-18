import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./NavBar";
// import Header from "./Header";

const ClientLayout = () => {
  return (
    <div className="client-layout">
      {/* <Header /> */}
      <NavBar />
      <Outlet />
    </div>
  );
};

export default ClientLayout;
