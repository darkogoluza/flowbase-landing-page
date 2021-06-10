import React from "react";
import {
  Container,
  Line,
  Title,
  HousesCardContainer,
} from "./simularListingsElements";
import HouseCard from "../HouseCard";
import heroImage1 from "../../assets/house_example_1.png";
import heroImage2 from "../../assets/house_example_2.png";
import heroImage3 from "../../assets/house_example_3.png";
import heroImage4 from "../../assets/house_example_4.png";
import heroImage5 from "../../assets/house_example_5.png";
import heroImage6 from "../../assets/house_example_6.png";

const SimularListings = () => {
  return (
    <>
      <Container>
        <Line />
        <Title>Similar Features</Title>
        <HousesCardContainer>
          <HouseCard heroImage={heroImage1} />
          <HouseCard heroImage={heroImage2} />
          <HouseCard heroImage={heroImage3} />
          <HouseCard heroImage={heroImage4} />
          <HouseCard heroImage={heroImage5} />
          <HouseCard heroImage={heroImage6} />
        </HousesCardContainer>
      </Container>
    </>
  );
};

export default SimularListings;
