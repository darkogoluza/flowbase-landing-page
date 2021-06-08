import React from "react";
import HouseCard from "../HouseCard";
import Listings from "../Listings";
import { Container, HousesList } from "./mainContentElements";

const MainContent = () => {
  return (
    <>
      <Container>
        <Listings />
        <HousesList>
          <HouseCard />
        </HousesList>
      </Container>
    </>
  );
};

export default MainContent;
