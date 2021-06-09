import React from "react";
import HouseCard from "../HouseCard";
import Listings from "../Listings";
import { Container, HousesList } from "./mainContentElements";
import heroImage1 from "../../assets/house_example_1.png";
import heroImage2 from "../../assets/house_example_2.png";
import heroImage3 from "../../assets/house_example_3.png";
import heroImage4 from "../../assets/house_example_4.png";
import heroImage5 from "../../assets/house_example_5.png";
import heroImage6 from "../../assets/house_example_6.png";

const MainContent = () => {
  return (
    <>
      <Container>
        <Listings />
        <HousesList>
          <HouseCard heroImage={heroImage1} />
          <HouseCard heroImage={heroImage2} />
          <HouseCard heroImage={heroImage3} />
          <HouseCard heroImage={heroImage4} />
          <HouseCard heroImage={heroImage5} />
          <HouseCard heroImage={heroImage6} />
        </HousesList>
      </Container>
    </>
  );
};

export default MainContent;
