import React from "react";
import {
  Container,
  Hero,
  Name,
  Stats,
  Stat,
  StatIcon,
  StatNumber,
} from "./houseCardElements";
import bedIcon from "../../assets/bed.svg";
import showerIcon from "../../assets/shower.svg";
import sizeIcon from "../../assets/size.svg";
import heroImage from "../../assets/house_example_1.png";

const HouseCard = () => {
  return (
    <>
      <Container>
        <Hero src={heroImage} />
        <Name>Malto House</Name>
        <Stats>
          <Stat>
            <StatIcon src={bedIcon} />
            <StatNumber>4</StatNumber>
          </Stat>
          <Stat>
            <StatIcon src={showerIcon} />
            <StatNumber>2</StatNumber>
          </Stat>
          <Stat>
            <StatIcon src={sizeIcon} />
            <StatNumber>2</StatNumber>
          </Stat>
        </Stats>
      </Container>
    </>
  );
};

export default HouseCard;
