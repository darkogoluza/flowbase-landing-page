import React from "react";
import {
  Container,
  Line,
  Title,
  FilterContainer,
  FilterButton,
  FilterButtonIcon,
} from "./listingsElements";
import filterButtonIcon from "../../assets/arrow_down.png";

const Listings = () => {
  return (
    <>
      <Container>
        <Line />
        <Title>Find your next place to live</Title>
        <FilterContainer>
          <FilterButton>
            Looking for
            <FilterButtonIcon src={filterButtonIcon} />
          </FilterButton>
          <FilterButton>
            Location
            <FilterButtonIcon src={filterButtonIcon} />
          </FilterButton>
          <FilterButton>
            Property Type
            <FilterButtonIcon src={filterButtonIcon} />
          </FilterButton>
          <FilterButton>
            Price
            <FilterButtonIcon src={filterButtonIcon} />
          </FilterButton>
        </FilterContainer>
      </Container>
    </>
  );
};

export default Listings;
