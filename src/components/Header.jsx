import React from "react";
import {
  ChevronRight,
  Logo,
  NavText,
  Navbar,
} from "./styled-components/common";
import { navbarTitle } from "../utils/input_fields/navbartext";

const Header = () => {
  return (
    <>
      <Navbar>
        <Logo></Logo>
        <NavText>
          {navbarTitle.title}
          <ChevronRight />
        </NavText>
      </Navbar>
    </>
  );
};

export default Header;
