import { type } from "os";
import Navbar from "./components/Navbar";
import React from "react";
type childrenProps = {
  children: React.ReactNode;
};

function Layout({ children }: childrenProps) {
  return (
    <div className=" text-[#ffffff] mx-8 my-4 h-full container">
      <Navbar></Navbar>
      {children}
    </div>
  );
}

export default Layout;
