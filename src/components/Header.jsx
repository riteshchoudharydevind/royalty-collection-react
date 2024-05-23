import React from "react";
import { Logo, NavText, Navbar } from "./styled-components/common";
import ChevronRightIcon from "../assets/images/Arrow.svg";

const Header = () => {
  return (
    <>
      <Navbar>
        <Logo />
        <NavText>
          Login
          <img style={{ height: "14px" }} src={ChevronRightIcon} alt="" />
        </NavText>
      </Navbar>
    </>
  );
};

export default Header;
