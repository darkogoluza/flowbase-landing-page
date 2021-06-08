import React from "react";
import {
  ClientCard,
  Container,
  Line,
  QuoteCard,
  QuoteText,
  ClientContent,
  ClientImage,
  ClientName,
  ClientText,
} from "./qouteElements";
import clientImage from "../../assets/client_image.png";

const Quote = () => {
  return (
    <>
      <Container>
        <QuoteCard>
          <ClientCard color="white">
            <ClientImage src={clientImage} />
            <ClientContent>
              <ClientName color="black">Lara Madrigal</ClientName>
              <ClientText>Client</ClientText>
            </ClientContent>
          </ClientCard>
        </QuoteCard>
        <QuoteCard>
          <Line />
          <QuoteText>
            “Certe, inquam, pertinax non existimant oportere exquisitis
            rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et
            quidem faciunt, ut aut.”
          </QuoteText>
          <ClientCard color="black">
            <ClientImage src={clientImage} />
            <ClientContent>
              <ClientName color="white">Lara Madrigal</ClientName>
              <ClientText>Client</ClientText>
            </ClientContent>
          </ClientCard>
        </QuoteCard>
        <QuoteCard>
          <ClientCard color="white">
            <ClientImage src={clientImage} />
            <ClientContent>
              <ClientName color="black">Lara Madrigal</ClientName>
              <ClientText>Client</ClientText>
            </ClientContent>
          </ClientCard>
        </QuoteCard>
      </Container>
    </>
  );
};

export default Quote;
