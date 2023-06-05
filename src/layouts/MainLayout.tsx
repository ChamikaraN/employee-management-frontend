import React, { ReactNode } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import HeaderComponent from "../components/organisms/Header";
import FooterComponent from "../components/organisms/Footer";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
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
