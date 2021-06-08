import React from "react";
import {
  Container,
  ButtonIcon,
  Button,
  Title,
  Logo,
  SocialLink,
  SocialLinks,
  Link,
  Links,
  LinksTitle,
  UpperFooter,
  LowerFooter,
  Line,
  Social,
  TitleHighlight,
} from "./footerElements";
import logo from "../../assets/logo.svg";
import buttonArrow from "../../assets/button_arrow.svg";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <>
      <Container>
        <UpperFooter>
          <Title>
            Make your dreams a <TitleHighlight>reality</TitleHighlight>
          </Title>
          <Button>
            Work with us
            <ButtonIcon src={buttonArrow} />
          </Button>
        </UpperFooter>
        <Line />
        <LowerFooter>
          <Social>
            <Logo src={logo} />
            <SocialLinks>
              <SocialLink href="#" src={facebook} />
              <SocialLink href="#" src={twitter} />
              <SocialLink href="#" src={instagram} />
            </SocialLinks>
          </Social>
          <Links>
            <LinksTitle>Column Heading</LinksTitle>
            <Link href="#">Link goes here</Link>
            <Link href="#">Link goes here</Link>
            <Link href="#">Link goes here</Link>
            <Link href="#">Link goes here</Link>
          </Links>
          <Links>
            <LinksTitle>Column Heading</LinksTitle>
            <Link href="#">Link goes here</Link>
            <Link href="#">Link goes here</Link>
            <Link href="#">Link goes here</Link>
            <Link href="#">Link goes here</Link>
          </Links>
          <Links>
            <LinksTitle>Column Heading</LinksTitle>
            <Link href="#">Link goes here</Link>
            <Link href="#">Link goes here</Link>
            <Link href="#">Link goes here</Link>
            <Link href="#">Link goes here</Link>
          </Links>
        </LowerFooter>
      </Container>
    </>
  );
};

export default Footer;
