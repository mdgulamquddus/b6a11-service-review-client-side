import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Pages/Footer/Footer";
import Header from "../components/Pages/Shared/Header";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
