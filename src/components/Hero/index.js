import React from "react";
import Header from "../Header";
import {
  Background,
  Description,
  ListingsContainer,
  ListingsIcon,
  ListingsText,
  Title,
  Wrapper,
  ListingsWrapper,
} from "./heroElements";
import heroImage from "../../assets/hero_background.png";
import listingsIcon from "../../assets/listings_arrow.svg";

const Hero = () => {
  return (
    <>
      <Background src={heroImage}>
        <Header />
        <Wrapper>
          <Title>
            Beautiful
            <br /> homes made <br /> for you
          </Title>
          <Description>
            In oculis quidem se esse admonere interesse enim maxime placeat,
            facere possimus, omnis. Et quidem faciunt, ut labore et accurate
            disserendum et harum quidem exercitus quid.
          </Description>
          <ListingsWrapper>
            <ListingsContainer>
              <ListingsText>
                See all listings <ListingsIcon src={listingsIcon} />
              </ListingsText>
            </ListingsContainer>
          </ListingsWrapper>
        </Wrapper>
      </Background>
    </>
  );
};

export default Hero;
