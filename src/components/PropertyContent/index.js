import React from "react";
import { Content } from "./propertyContentElement";

const PropertyContent = ({ children }) => {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
};

export default PropertyContent;
