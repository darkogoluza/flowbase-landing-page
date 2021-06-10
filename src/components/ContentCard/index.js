import React from "react";
import {
  Wrapper,
  Content,
  Title,
  Description,
  Button,
  ButtonIcon,
  Image,
  Card,
} from "./contentCardElements";
import { Line } from "./contentCardElements";
import buttonIcon from "../../assets/button_arrow2.svg";

const ContentCard = ({ isLeft, title, description, img_src }) => {
  return (
    <>
      <Card>
        <Wrapper
          style={{
            flexDirection: `${isLeft ? "row" : "row-reverse"}`,
            justifyContent: `${isLeft ? "start" : "end"}`,
            alignItems: `${isLeft ? "center" : "flex-end"}`,
            bottom: `${isLeft ? "-175px" : "75px"}`,
          }}
        >
          <Image src={img_src} />
          <Content style={{ marginBottom: `${isLeft ? "150px" : "110px"}` }}>
            <Line />
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Button>
              Learn more <ButtonIcon src={buttonIcon} />
            </Button>
          </Content>
        </Wrapper>
      </Card>
    </>
  );
};

export default ContentCard;
