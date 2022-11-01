import React from "react";
import { Outlet } from "react-router";
import { LayoutDefaultProps } from "../../types";
import Header from "./Header";
import Footer from "./Footer";

// const Layout = (props: { children: React.ReactNode }) => {
const Layout = ({ children }: LayoutDefaultProps) => {
  return (
    <div>
      <Header />
      <main>{children || <Outlet />}</main>
      <Footer />
    </div>
  );
};

export default Layout;
