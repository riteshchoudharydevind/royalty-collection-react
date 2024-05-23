import React from "react";
import { MainContainer } from "./styled-components/common";
import LeftContentImage from "../assets/images/mainImage.svg";
const LeftViewContainer = () => {
  return (
    <>
      <MainContainer>
        <img src={LeftContentImage} alt="" />
      </MainContainer>
    </>
  );
};

export default LeftViewContainer;
