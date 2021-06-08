import React from "react";
import {
  Container,
  Wrapper,
  Line,
  Title,
  Description,
  Button,
  ButtonIcon,
} from "./calloutElements";
import buttonIcon from "../../assets/button_arrow.svg";

const Callout = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Line />
          <Title>You’re in good hands</Title>
          <Description>
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
            involuta aperiri, altera occulta quaedam et voluptatem accusantium
            doloremque.
          </Description>
          <Button>
            Learn more <ButtonIcon src={buttonIcon} />
          </Button>
        </Wrapper>
      </Container>
    </>
  );
};

export default Callout;
