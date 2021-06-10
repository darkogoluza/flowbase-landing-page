import React from "react";
import {
  Container,
  User,
  UserIcon,
  UserContent,
  UserName,
  UserLink,
  Input,
  Message,
  Button,
  ButtonIcon,
} from "./contactFormElements";
import userIcon from "../../assets/user_image.png";
import buttonIcon from "../../assets/button_arrow2.svg";

const ContactForm = () => {
  return (
    <>
      <Container>
        <User>
          <UserIcon src={userIcon} />
          <UserContent>
            <UserName>Kayley Hall</UserName>
            <UserLink href="#">View profile</UserLink>
          </UserContent>
        </User>
        <Input placeholder="Name" />
        <Input placeholder="Phone" />
        <Input placeholder="Email" />
        <Message placeholder="Message" />
        <Button>
          Learn More <ButtonIcon src={buttonIcon} />
        </Button>
      </Container>
    </>
  );
};

export default ContactForm;
