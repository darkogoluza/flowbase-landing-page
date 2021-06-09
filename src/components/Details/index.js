import React from "react";
import {
  Container,
  Title,
  StatsList,
  StatIcon,
  StatText,
  Stat,
} from "./detailsElement";
import bedIcon from "../../assets/bed.svg";
import showerIcon from "../../assets/shower.svg";
import sizeIcon from "../../assets/size.svg";
import garageIcon from "../../assets/garage.svg";
import dateIcon from "../../assets/date.svg";

const Details = () => {
  return (
    <>
      <Container>
        <Title>Details</Title>
        <StatsList>
          <Stat>
            <StatIcon src={bedIcon} />
            <StatText>4</StatText>
          </Stat>
          <Stat>
            <StatIcon src={showerIcon} />
            <StatText>2</StatText>
          </Stat>
          <Stat>
            <StatIcon src={sizeIcon} />
            <StatText>2</StatText>
          </Stat>
          <Stat>
            <StatIcon src={garageIcon} />
            <StatText>1</StatText>
          </Stat>
          <Stat>
            <StatIcon src={dateIcon} />
            <StatText>2007</StatText>
          </Stat>
        </StatsList>
      </Container>
    </>
  );
};

export default Details;
