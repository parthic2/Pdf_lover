import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Renders the child route's element, if there is one. */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
