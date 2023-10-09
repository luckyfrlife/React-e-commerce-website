import React from "react";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";

const Header = ({ cartItem }) => {
  return (
    <>
      <Head />
      <div className="all">
        <Search cartItem={cartItem} />
        <Navbar />
      </div>
    </>
  );
};

export default Header;
