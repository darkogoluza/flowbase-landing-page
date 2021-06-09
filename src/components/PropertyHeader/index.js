import React from "react";
import Header from "../Header";
import {
  Container,
  Line,
  TextContainer,
  Title,
  Description,
} from "./propertyHeader";

const PropertyHeader = () => {
  return (
    <>
      <Container>
        <Header />
        <Line />
        <TextContainer>
          <dvi>
            <Title>Modern House</Title>
            <Description>3002 Foster Ave, Brooklyn, NY 11210, USA</Description>
          </dvi>
          <dvi>
            <Title style={{ textAlign: "right" }}>$450,000</Title>
            <Description style={{ textAlign: "right" }}>
              $2,800/sq ft
            </Description>
          </dvi>
        </TextContainer>
      </Container>
    </>
  );
};

export default PropertyHeader;
