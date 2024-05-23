import React from "react";
import { Description, Title } from "./styled-components/common";

const PageHeader = ({ title, description }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </>
  );
};

export default PageHeader;
