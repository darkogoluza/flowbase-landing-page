import React from "react";
import {
  Button,
  HeaderWrapper,
  Logo,
  NavLink,
  NavWrapper,
  ButtonArrow,
  LogoWrapper,
} from "./headerElements";
import logoSVG from "../../assets/logo.svg";
import buttonArrow from "../../assets/button_arrow.svg";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <LogoWrapper>
          <Logo src={logoSVG} />
        </LogoWrapper>
        <NavWrapper>
          <NavLink>Nav Link</NavLink>
          <NavLink>Nav Link</NavLink>
          <NavLink>Nav Link</NavLink>
          <NavLink>Nav Link</NavLink>
        </NavWrapper>
        <Button>
          Work with us
          <ButtonArrow src={buttonArrow} />
        </Button>
      </HeaderWrapper>
    </>
  );
};

export default Header;
