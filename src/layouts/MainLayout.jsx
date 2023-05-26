import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";

function MainLayout({ children }) {
  return (
    <>
      <ToastContainer />
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
}

export default MainLayout;
